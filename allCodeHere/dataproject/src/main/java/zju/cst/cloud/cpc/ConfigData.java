package zju.cst.cloud.cpc;

import java.util.List;
import java.util.ArrayList;
/**
*Declaration: 
*
*@author Benjy
*@date 2015年12月17日
*/

public class ConfigData {
	private int timePoint;//切换抓包文件的时间点
	private String captureBasePath;//抓包的数据文件基本路径
	private int timeInterval;//客户端服务端交互的时间间隔
	private String serverIP;//服务端的IP地址
	private int serverPort;//服务端的Port端口号
	
	private List<TaskInfo> taskInfoList = new ArrayList<TaskInfo>();//任务信息列表
	
	//private List<ClientTask> taskList = new ArrayList<ClientTask>();//定时执行的任务列表
	
	/**
	 * 获取时间节点
	 * @return
	 */
	public int getTimePoint() {
		return timePoint;
	}
	/**
	 * 设置时间节点
	 * @param timePoint
	 */
	void setTimePoint(int timePoint) {
		this.timePoint = timePoint;
	}
	/**
	 * 获取抓包进程放置文件的基本路径
	 * @return
	 */
	public String getCaptureBasePath(){
		return captureBasePath;
	}
	/**
	 * 设置抓包进程放置文件的基本路径
	 * @param captureBasePath
	 */
	void setCaptureBasePath(String captureBasePath){
		this.captureBasePath=captureBasePath;
	}
	
	/**
	 * 获取时间间隔
	 * @return
	 */
	public int getTimeInterval() {
		return timeInterval;
	}
	/**
	 * 设置时间间隔
	 * @param timePoint
	 */
	public void setTimeInterval(int timeInterval) {
		this.timeInterval = timeInterval;
	}
	/**
	 * 得到服务器端的IP地址
	 * @return
	 */
	public String getServerIP() {
		return serverIP;
	}
	/**
	 * 设置服务端的IP地址
	 * @param serverIP
	 */
	void setServerIP(String serverIP) {
		this.serverIP = serverIP;
	}
	/**
	 * 获取服务端接受的端口
	 * @return
	 */
	public int getServerPort() {
		return serverPort;
	}
	/**
	 * 设置服务端接受端口
	 * @param serverPort
	 */
	void setServerPort(int serverPort) {
		this.serverPort = serverPort;
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
}
