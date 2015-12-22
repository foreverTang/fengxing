package zju.cst.cloud.cpc;
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
	
	int getTaskNum() {
		return taskNum;
	}
	void setTaskNum(int taskNum) {
		this.taskNum = taskNum;
	}
	String getTaskName() {
		return taskName;
	}
	void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	String getTaskClass() {
		return taskClass;
	}
	void setTaskClass(String taskClass) {
		this.taskClass = taskClass;
	}
	
	
}
