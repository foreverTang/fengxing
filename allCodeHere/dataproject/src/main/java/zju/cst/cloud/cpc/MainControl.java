package zju.cst.cloud.cpc;

import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * 
 * Declaration: 主控制类，客户端抓包程序的主入口
 * 
 * @author benjy
 * @date 2015年12月17日
 */
public class MainControl {
	public static void main(String[] args) throws Exception {
		ConfigParse cp = new ConfigParse("config.xml");
		final ConfigData cfd = cp.parseConfigXml();
		if (null == cfd) {
			throw new Exception("读取配置文件config.xml失败，请修改配置文件");
		}
		
		// 定时执行的任务列表，the concrete client task instances are saved in
		// List<ClientTask> .
		final List<ClientTask> taskList = new ArrayList<ClientTask>();
		
		for(TaskInfo ti:cfd.getTaskInfoList()){
			ClientTask ct = null;
			try {
				ct = (ClientTask) Class.forName(ti.getTaskClass()).newInstance();
				ct.initParams(cfd, ti);//初始化任务参数  init parameters in task.
			} catch (InstantiationException e) {
				//log
				throw new Exception("转换配置文件config.xml中task任务失败，请任务信息");
			} catch (IllegalAccessException e) {
				throw new Exception("转换配置文件config.xml中task任务失败，请任务信息");
			} catch (ClassNotFoundException e) {
				throw new Exception("转换配置文件config.xml中task任务失败，请任务信息");
			}
			taskList.add(ct);
		}
		
		// 定时5秒 执行全部任务
		Runnable runnable = new Runnable() {
			public void run() {
				for (ClientTask ct : taskList) {
					ct.execTask();
				}
			}
		};

		// 启动定时执行任务
		ScheduledExecutorService service = Executors.newSingleThreadScheduledExecutor();
		service.scheduleAtFixedRate(runnable, 0, cfd.getTimeInterval(), TimeUnit.SECONDS);
	}
}
