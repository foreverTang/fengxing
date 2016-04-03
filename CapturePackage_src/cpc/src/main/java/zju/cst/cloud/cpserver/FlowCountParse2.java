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
 * @date 2016年3月6日
 */
public class FlowCountParse2 implements ServerParse {
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

	public void parse(String txt,Logger log) {
		// String tmp = txt.substring(20);
		String[] datas = txt.split("\\|");
		if (datas.length < 2)
			return;
		String[] temp = null;
		String date = txt.substring(1, 12);
		StringBuilder componentSql = new StringBuilder(10000);
		StringBuilder hostSql = new StringBuilder(10000);
		
		//String comSql = "insert into componentlevel(portNumFrom,portNumTo,size,time,ipFrom,ipTo) values(?,?,?,?,?,?)";
		//String hoSql = "insert into hostlevel(ipFrom,ipTo,size,time) values(?,?,?,?)";
		//PreparedStatement psCom=dbconnection.prepareStatement(comSql);
		//PreparedStatement pshost=dbconnection.prepareStatement(hoSql);
		
		for (int i = 1; i < datas.length&&i<3; i++) {
			temp = datas[i].split(",");
			if (temp.length < 5)
				continue;
			componentSql.append("insert into componentlevel(portNumFrom,portNumTo,size,time,ipFrom,ipTo) values('");
			componentSql.append(temp[2]);
			componentSql.append("','");
			componentSql.append(temp[4]);
			componentSql.append("',");
			componentSql.append(temp[5]);
			componentSql.append(",'");
			componentSql.append(date);
			componentSql.append(temp[0]);
			componentSql.append("','");
			componentSql.append(temp[1]);
			componentSql.append("','");
			componentSql.append(temp[3]);
			componentSql.append("');");

			hostSql.append("insert into hostlevel(ipFrom,ipTo,size,time) values('");
			hostSql.append(temp[1]);
			hostSql.append("','");
			hostSql.append(temp[3]);
			hostSql.append("',");
			hostSql.append(temp[5]);
			hostSql.append(",'");
			hostSql.append(date);
			hostSql.append(temp[0]);
			hostSql.append("');");
		}

		if (dbconnection == null)
			dbconnection = MysqlConnection.getInstance().getConnection();
		Statement stat = null;
		try {
			stat = dbconnection.createStatement();
			int res = stat.executeUpdate(componentSql.toString());
			log.info("更新表 componentlevel： "+res+"条");
			res = stat.executeUpdate(hostSql.toString());
			log.info("更新表hostlevel: "+res+"条");
			dbconnection.commit();
		} catch (SQLException e) {
			log.error("更新数据库失败 "+datas.length);
			log.error("SQL componentSql : "+componentSql.toString());
			log.error("SQL hostSql : "+hostSql.toString());
		}finally{
			if(stat != null)
				try {
					stat.close();
				} catch (SQLException e) {
				}
		}
	}

}
