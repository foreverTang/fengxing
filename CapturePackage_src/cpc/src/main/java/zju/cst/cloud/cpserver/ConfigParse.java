package zju.cst.cloud.cpserver;

import java.io.File;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.log4j.Logger;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

import zju.cst.cloud.bean.TaskInfo;

/**
 * Declaration:
 *
 * @author Benjy
 * @date 2015年12月17日
 */

public class ConfigParse {
	// 配置文件路径
	private String path = "";

	public ConfigParse(String path) {
		this.path = path;
	}

	/**
	 * 解析配置XML文件
	 * 
	 * @param cfd
	 *            从配置文件中解析的数据
	 * @return
	 */
	public ConfigData parseConfigXml() {
		if (null == path || "".equals(path))
			return null;

		ConfigData cfd = new ConfigData();
		
		File f = new File(path);
		try {
			DocumentBuilder builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
			Document doc = builder.parse(f);
			
			//服务器端口
			cfd.setPort(Integer.parseInt(doc.getElementsByTagName("serverPort").item(0).getFirstChild().getNodeValue()));
			cfd.setDriver(doc.getElementsByTagName("driver").item(0).getFirstChild().getNodeValue());
			cfd.setUrl(doc.getElementsByTagName("url").item(0).getFirstChild().getNodeValue());
			cfd.setUser(doc.getElementsByTagName("user").item(0).getFirstChild().getNodeValue());
			cfd.setPassword(doc.getElementsByTagName("password").item(0).getFirstChild().getNodeValue());
			
			//任务信息
			NodeList nl = doc.getElementsByTagName("task");
			for(int i=0;i<nl.getLength();i++){
				TaskInfo ti =new TaskInfo();
				ti.setTaskNum(Integer.parseInt(doc.getElementsByTagName("taskNum").item(i).getFirstChild().getNodeValue()));
				ti.setTaskName(doc.getElementsByTagName("taskName").item(i).getFirstChild().getNodeValue());
				ti.setTaskClass(doc.getElementsByTagName("taskClass").item(i).getFirstChild().getNodeValue());
				cfd.addTaskInfo(ti);
			}
		} catch(Exception e){
			Logger log = Logger.getLogger("ConfigParse");
			log.error(e.getMessage());
			log.error(e.getStackTrace());
			return null;
		}
		
		return cfd;
	}
}
