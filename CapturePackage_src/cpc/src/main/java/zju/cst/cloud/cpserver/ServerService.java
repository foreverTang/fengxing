package zju.cst.cloud.cpserver;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;

import zju.cst.cloud.bean.TaskInfo;

/**
 * Declaration:
 *
 * @author Benjy
 * @date 2016年3月6日
 */
public class ServerService {
	final Logger log;
	ConfigData cfd = null;
	public Map<String,ServerParse> taskMap = null;
	
	public ServerService(Logger log,ConfigData cfd) {
		this.log = log;
		this.cfd = cfd;
	}
	private boolean generateParseMap(){
		taskMap = new HashMap<String,ServerParse>();
		log.info("初始化解析任务的Map...");
		for(TaskInfo ti:cfd.getTaskInfoList()){
			ServerParse sp = null;
			try {
				sp = (ServerParse) Class.forName(ti.getTaskClass()).newInstance();
				//sp.initParams(cfd, ti);//初始化任务参数  init parameters in task.
			} catch (ClassNotFoundException e) {
				log.error(ti.getTaskName()+"任务加载失败，请修改配置文件"+System.getProperty("user.dir").replace('\\', '/')+"/configServer.xml。");
				log.error(e.getMessage());
				log.error(e.getStackTrace());
				//throw new Exception("转换配置文件"+System.getProperty("user.dir").replace('\\', '/')+"configServer.xml中task任务失败，请任务信息");
				continue;
			} catch (Exception e){
				log.error(ti.getTaskName()+"任务加载失败，请修改配置文件"+System.getProperty("user.dir").replace('\\', '/')+"/configServer.xml。");
				log.error(e.getMessage());
				log.error(e.getStackTrace());
				//throw new Exception("转换配置文件"+System.getProperty("user.dir").replace('\\', '/')+"configServer.xml中task任务失败，请任务信息");
				continue;
			}
			taskMap.put(String.valueOf(ti.getTaskNum()), sp);
			log.info("成功加载任务(Load Task)："+ti.getTaskName()+" : 执行类(Exec Class)："+ti.getTaskClass());
		}
		log.info("生成解析的Map任务.");
		return true;
	}
	public void execTask(){
		generateParseMap();
		log.info("开始监听...");
		ServerParse sp = null;
		// 监听端口
		DatagramSocket socket = null;
		try {
			socket = new DatagramSocket(cfd.getPort());
			byte[] buf = new byte[6000];
			while (true) {
				DatagramPacket packet = new DatagramPacket(buf, buf.length);
				socket.receive(packet);
				String s = new String(packet.getData());
				sp=taskMap.get(s.substring(0, 1));
				if(sp!=null)
					sp.parse(s,log);
				log.info(s.substring(0, 20)+s.length());
				for(int i=0;i<6000;i++){
					buf[i]='\0';
				}
			}
		} catch (SocketException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			socket.close();
		}
	}
}
