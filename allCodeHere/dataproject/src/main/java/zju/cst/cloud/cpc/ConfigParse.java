package zju.cst.cloud.cpc;

import java.io.File;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

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
			
			//时间点
			cfd.setTimePoint(Integer.parseInt(doc.getElementsByTagName("timePoint").item(0).getFirstChild().getNodeValue()));
			//抓包基础路径
			cfd.setCaptureBasePath(doc.getElementsByTagName("captureBasePath").item(0).getFirstChild().getNodeValue());
			//客户端服务器交互 时间间隔
			cfd.setTimeInterval(Integer.parseInt(doc.getElementsByTagName("timeInterval").item(0).getFirstChild().getNodeValue()));
			//服务器IP
			cfd.setServerIP(doc.getElementsByTagName("ipAddress").item(0).getFirstChild().getNodeValue());
			//服务器端口
			cfd.setServerPort(Integer.parseInt(doc.getElementsByTagName("port").item(0).getFirstChild().getNodeValue()));
			
			//任务信息
			NodeList nl = doc.getElementsByTagName("task");
			for(int i=0;i<nl.getLength();i++){
				TaskInfo ti =new TaskInfo();
				ti.setTaskNum(Integer.parseInt(doc.getElementsByTagName("taskNum").item(i).getFirstChild().getNodeValue()));
				ti.setTaskName(doc.getElementsByTagName("taskName").item(i).getFirstChild().getNodeValue());
				ti.setTaskClass(doc.getElementsByTagName("taskClass").item(i).getFirstChild().getNodeValue());
				cfd.addTaskInfo(ti);
			}
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
			return null;
		} catch (SAXException e) {
			e.printStackTrace();
			return null;
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		} catch(Exception e){
			e.printStackTrace();
			return null;
		}
		
		return cfd;
	}
}
