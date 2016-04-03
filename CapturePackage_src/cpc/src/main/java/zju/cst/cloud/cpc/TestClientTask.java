package zju.cst.cloud.cpc;

import java.util.Date;

import zju.cst.cloud.bean.TaskInfo;

/**
*Declaration: 
*
*@author Benjy
*@date 2015年12月18日
*/
public class TestClientTask implements ClientTask {

	public void initParams(ConfigData cfd, TaskInfo ti) {
		// TODO Auto-generated method stub
		
	}

	public void execTask() {
		// TODO Auto-generated method stub
		System.out.println(new Date().toString()+"Hello World!");
	}

}
