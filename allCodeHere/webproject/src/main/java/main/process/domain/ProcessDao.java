package main.process.domain;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

//import javax.mail.Flags.Flag;
import main.process.service.ProcessService;
import main.process.service.ProcessService;

import utils.jdbcHelper.JdbcUtils;

public class ProcessDao implements ProcessService {

	private JdbcUtils jdbcUtils;
	public ProcessDao() {
		// TODO Auto-generated constructor stub
		jdbcUtils = new JdbcUtils();
	}

	public boolean login(List<Object> params) {
		// TODO Auto-generated method stub
		boolean flag = false;
		
		try {
			jdbcUtils.getConnection();
			String sql = "select * from user where name = ? and password = ?";
			Map<String, Object> map = jdbcUtils.findSimpleResult(sql, params);
			flag = !map.isEmpty()?true:false;			
			 
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{
			
		//¹Ø±ÕÊý¾Ý¿â
		jdbcUtils.releaseConn();
			
		}
		
		return flag;
	}	

}
