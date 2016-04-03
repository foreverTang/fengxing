package zju.cst.cloud.cpc;

import zju.cst.cloud.bean.TaskInfo;

/**
*Declaration: 
*
*@author Benjy
*@date 2015年12月17日
*/
public interface ClientTask {
	public void initParams(ConfigData cfd,TaskInfo ti);
	//任务执行方法
	public	void execTask();
}
