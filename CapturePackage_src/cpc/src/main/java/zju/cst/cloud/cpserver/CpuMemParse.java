package zju.cst.cloud.cpserver;

import java.sql.Connection;
//import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import org.apache.log4j.Logger;

import zju.cst.cloud.dao.MysqlConnection;

/**
 * Declaration:
 *
 * @author Benjy
 * @date 2016年4月3日
 */
public class CpuMemParse implements ServerParse {
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
		String[] temp = datas[1].split(",");
		int mem = -1;
		double cpu = -1;
		String ip = temp[0].split(":")[1];
		try{
			mem = Integer.parseInt(temp[1].split(":")[1]);
			if(!"".equals(temp[2]))
				cpu=Double.parseDouble(temp[2].split(":")[1]);
		}catch(Exception e){
			log.error("解析Cpu、Memory参数错误： "+txt);
			return;
		}
		
		String date = txt.substring(1, 20);
		String cpuMemSql = "insert into loadlevel(ip,cpu,ram,time) values(\'"+ip+"\',"+cpu+","+mem+",\'"+date+"\')";
		if (dbconnection == null)
			dbconnection = MysqlConnection.getInstance().getConnection();
		
		Statement psCpuMem = null;
		try {
			psCpuMem = dbconnection.createStatement();
			psCpuMem.execute(cpuMemSql);
			
			log.info("SQL: "+cpuMemSql);
		} catch (SQLException e) {
			log.error(e.getMessage());
			log.error(e.getStackTrace());
		}finally{
			try {
				psCpuMem.close();
			} catch (SQLException e) {
				log.error(e.getMessage());
				log.error(e.getStackTrace());
			}
		}
	}

}
