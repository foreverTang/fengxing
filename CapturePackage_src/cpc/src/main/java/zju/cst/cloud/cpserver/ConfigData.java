package zju.cst.cloud.cpserver;

import java.util.List;

import zju.cst.cloud.bean.TaskInfo;

import java.util.ArrayList;
/**
*Declaration: 
*
*@author Benjy
*@date 2015年12月17日
*/

public class ConfigData {
	//private String serverIP;//服务端的IP地址
	private int port;//服务端监听的port
	
	private String driver;
	private String url;
	private String user;
	private String password;
	
	private List<TaskInfo> taskInfoList = new ArrayList<TaskInfo>();//任务信息列表
	
	/**
	 * 获取Server的监听端口
	 * @return
	 */
	public int getPort() {
		return port;
	}
	/**
	 * 设置Server的监听端口
	 * @param serverPort
	 */
	void setPort(int port) {
		this.port = port;
	}
	/**
	 * 获取任务列表
	 * @return
	 */
	List<TaskInfo> getTaskInfoList() {
		return taskInfoList;
	}
	/**
	 * 添加新任务信息
	 * @param task
	 */
	void addTaskInfo(TaskInfo task) {
		taskInfoList.add(task);
	}
	
	
	public String getDriver() {
		return driver;
	}
	public void setDriver(String driver) {
		this.driver = driver;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
