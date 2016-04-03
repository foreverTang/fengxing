package zju.cst.cloud.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;


import org.apache.log4j.Logger;

/**
 * Declaration:
 *
 * @author Benjy
 * @date 2016年1月9日
 */
public class MysqlConnection {

	private String driver = "";
	private String url = "";
	private String user = "";
	private String password = "";

	private static MysqlConnection oc = null;

	public void setData(String driver, String url, String user, String password) {
		this.driver = driver;
		this.url = url;
		this.user = user;
		this.password = password;
	}

	public static MysqlConnection getInstance() {
		if (null == oc) {
			oc = new MysqlConnection();
		}
		return oc;
	}

	/**
	 * 获取数据库连接
	 * 
	 * @return
	 */
	public Connection getConnection() {
		// jdbc:mysql://localhost:3306/test?user=root&password=&useUnicode=true&characterEncoding=gbk&autoReconnect=true&failOverReadOnly=falsejdbc:mysql://localhost:3306/test?user=root&password=&useUnicode=true&characterEncoding=gbk&autoReconnect=true&failOverReadOnly=false
		// Class.forName("com.mysql.jdbc.Driver");
		// String url="jdbc:mysql://123.56.178.214:3306/ticket";
		try {
			Class.forName(driver);
			return DriverManager.getConnection(url, user, password);
		} catch (SQLException ex) {
			Logger log = Logger.getLogger("Connection");
			log.error("获取Connection失败。driver:" + driver + "  url:" + url + "  user:" + user + "  password:" + password);
			return null;
		} catch (Exception ex) {
			Logger log = Logger.getLogger("Connection");
			log.error("获取Connection失败。driver:" + driver + "  url:" + url + "  user:" + user + "  password:" + password);
			return null;
		}
	}

	public PreparedStatement getStatement(Connection conn, String sql) throws SQLException {
		return conn.prepareStatement(sql);
	}

	public boolean testDBConnection() {
		Connection dbc = null;
		Statement stat = null;
		ResultSet rs = null;
		try {
			dbc = getConnection();
			stat = dbc.createStatement();
			rs = stat.executeQuery("select 1");
			ResultSetMetaData rsmd = rs.getMetaData();
			if (rsmd.getColumnCount() != 1)
				return false;
		} catch (SQLException e) {
			return false;
		} finally {
			try {
				if (rs != null)
					rs.close();
			} catch (SQLException e) {

			}
			try {
				if (null != stat)
					stat.close();
			} catch (SQLException e) {

			}
			try {
				if (dbc != null)
					dbc.close();
			} catch (SQLException e) {

			}
		}
		return true;
	}
}
