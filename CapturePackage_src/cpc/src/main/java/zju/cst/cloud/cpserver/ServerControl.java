package zju.cst.cloud.cpserver;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;

import zju.cst.cloud.dao.MysqlConnection;


/**
*Declaration: 
*
*@author Benjy
*@date 2016年3月6日
*/
public class ServerControl {	
	
	public static void main(String[] args){
		DOMConfigurator.configure(System.getProperty("user.dir").replace('\\', '/')+"/log4jServer.xml");
		final Logger log = Logger.getLogger("ServerControl");
		
		log.info("-------------------------------------------------------------------------------");
		log.info("-------------------------------------------------------------------------------");
		
		log.info("解析配置文件"+System.getProperty("user.dir").replace('\\', '/')+"/configServer.xml...");
		ConfigParse cp = new ConfigParse(System.getProperty("user.dir").replace('\\', '/')+"/configServer.xml");
		final ConfigData cfd = cp.parseConfigXml();
		if (null == cfd) {
			log.log(Level.ERROR,"读取配置文件 "+System.getProperty("user.dir").replace('\\', '/')+"/configServer.xml失败，请修改配置文件");
			return;
		}
		log.info("解析配置文件configServer.xml成功");
		
		//设置数据库连接
		MysqlConnection.getInstance().setData(cfd.getDriver(), cfd.getUrl(), cfd.getUser(), cfd.getPassword());
		if(!MysqlConnection.getInstance().testDBConnection()){
			log.error("数据库连接失败");
			return;
		}
		log.info("数据库连接成功");
		
		ServerService ss = new ServerService(log, cfd);
		ss.execTask();
	}
}
