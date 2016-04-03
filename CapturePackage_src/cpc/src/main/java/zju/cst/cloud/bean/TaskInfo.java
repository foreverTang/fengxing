package zju.cst.cloud.bean;
/**
*Declaration: 
*
*@author Benjy
*@date 2015年12月18日
*/
public class TaskInfo {
	private int taskNum; //任务号码
	private String taskName;//任务名称
	private String taskClass;//任务执行的类名
	
	public int getTaskNum() {
		return taskNum;
	}
	public void setTaskNum(int taskNum) {
		this.taskNum = taskNum;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public String getTaskClass() {
		return taskClass;
	}
	public void setTaskClass(String taskClass) {
		this.taskClass = taskClass;
	}
	
	
}
