package zju.cst.cloud.cpserver;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import org.apache.log4j.Logger;

import zju.cst.cloud.dao.MysqlConnection;

/**
 * Declaration:解析流量数据
 * 格式：
 * 	12016-03-06 21:14:11{pTime,srcIp,sPort,dstIp,dPort,len}|21:14:01,10.82.82.49,3306,10.82.82.51,54317,1104|21:14:01,10.82.82.49,3306,10.82.82.51,54317,52|......
 * 	1:	任务编号，配置在config.xml和configServer.xml中
 * 	2016-03-06 21:14:11:发送时间
 * 	{pTime,srcIp,sPort,dstIp,dPort,len} : 包格式
 * 	| : 分隔符
 * 	21:14:01,10.82.82.49,3306,10.82.82.51,54317,1104   : 数据
 * @author Benjy
 * @date 2016年3月6日
 */
public class FlowCountParse implements ServerParse {
	private Connection dbconnection = null;

	/**
	 * 数据库 表更新
	 * 
	 * @param sql
	 * @return
	 * @throws SQLException
	 */
	public int updateBysql(String sql) throws SQLException {
		if (dbconnection == null)
			dbconnection = MysqlConnection.getInstance().getConnection();
		Statement stat = dbconnection.createStatement();
		int res = stat.executeUpdate(sql);
		stat.close();
		return res;
	}

	public void parse(String txt, Logger log) {
		String[] datas = txt.trim().split("\\|");
		if (datas.length < 2)
			return;
		String[] temp = null;
		String date = txt.substring(1, 12);
		
		String comSql = "insert into componentlevel(portNumFrom,portNumTo,size,time,ip) values(?,?,?,?,?)";
		String hoSql = "insert into hostlevel(ipFrom,ipTo,size,time) values(?,?,?,?)";

		if (dbconnection == null)
			dbconnection = MysqlConnection.getInstance().getConnection();
		PreparedStatement psCom = null;
		PreparedStatement pshost = null;
		try {
			psCom = dbconnection.prepareStatement(comSql);
			pshost = dbconnection.prepareStatement(hoSql);
			for (int i = 1; i < datas.length; i++) {
				temp = datas[i].split(",");
				if (temp.length < 5)
					continue;
				psCom.setString(1, temp[2]);
				psCom.setString(2, temp[4]);
				try{
					psCom.setInt(3, Integer.parseInt(temp[5]));
				}catch(NumberFormatException e){
					log.error("size为非数字。  dataIndex: "+i+" "+ temp[5]);
					log.error(datas[i]);
					log.error(txt);
					psCom.setInt(3, 0);
				}
				psCom.setString(4, date + temp[0]);
				psCom.setString(5, temp[1]);
//				psCom.setString(6, temp[3]);

				psCom.addBatch();

				pshost.setString(1, temp[1]);
				pshost.setString(2, temp[3]);
				try{
					pshost.setInt(3, Integer.parseInt(temp[5]));
				}catch(NumberFormatException e){
					pshost.setInt(3, 0);
				}
				pshost.setString(4, date + temp[0]);

				pshost.addBatch();

				if (i % 500 == 0 && i < datas.length - 1) {
					psCom.executeBatch();
					psCom.clearBatch();
					psCom.close();
					pshost.executeBatch();
					pshost.clearBatch();
					pshost.close();
					psCom = dbconnection.prepareStatement(comSql);
					pshost = dbconnection.prepareStatement(hoSql);
				}
			}
			psCom.executeBatch();
			pshost.executeBatch();
			log.info("更新表 componentlevel： " + (datas.length - 1) + "条");
			log.info("更新表hostlevel: " + (datas.length - 1) + "条");
		} catch (SQLException e) {
			log.error("更新数据库表componentlevel、hostlevel失败  lenth:"+datas.length);
			log.error(e.getMessage());
			log.error(e.getStackTrace());
		}finally{
			try {
				if(psCom!=null)
					psCom.close();
			} catch (SQLException e) {
				log.error(e.getMessage());
				log.error(e.getStackTrace());
			}
			try{
				if(pshost!=null)
					pshost.close();
			}catch(SQLException e) {
				log.error(e.getMessage());
				log.error(e.getStackTrace());
			}
			
		}
	}

}
