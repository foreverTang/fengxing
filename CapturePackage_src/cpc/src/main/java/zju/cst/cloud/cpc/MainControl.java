package zju.cst.cloud.cpc;

import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;

import zju.cst.cloud.bean.TaskInfo;

/**
 * 
 * Declaration: 主控制类，客户端抓包程序的主入口
 * 
 * @author benjy
 * @date 2015年12月17日
 */
public class MainControl {
	public static void main(String[] args) throws Exception {
		try {
			DOMConfigurator.configure(System.getProperty("user.dir").replace('\\', '/') + "/log4j.xml");
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println(e.getStackTrace());
			return;
		}
		final Logger log = Logger.getLogger("MainControl");

		log.info("-------------------------------------------------------------------------------");
		log.info("-------------------------------------------------------------------------------");

		log.info("解析配置文件" + System.getProperty("user.dir").replace('\\', '/') + "/config.xml...");
		ConfigParse cp = new ConfigParse(System.getProperty("user.dir").replace('\\', '/') + "/config.xml");
		final ConfigData cfd = cp.parseConfigXml();
		if (null == cfd) {
			log.log(Level.ERROR,
					"读取配置文件 " + System.getProperty("user.dir").replace('\\', '/') + "/config.xml失败，请修改配置文件");
			throw new Exception("读取配置文件config.xml失败，请修改配置文件");
		}
		log.info("解析配置文件config.xml成功");
		// load client shell
		LoadComs lc = new LoadComs();
		if (!lc.loadCpcShell(log)) {
			return;
		}

		try {
			// 使linux脚本写入文件和java程序读取文件有2s错开。
			Thread.sleep(2000);
		} catch (Exception e) {
			log.error("主进程停留2s失败");
			return;
		}
		// 定时执行的任务列表，the concrete client task instances are saved in
		// List<ClientTask> .
		final List<ClientTask> taskList = new ArrayList<ClientTask>();

		log.info("配置任务，并初始化任务内容...");
		for (TaskInfo ti : cfd.getTaskInfoList()) {
			ClientTask ct = null;
			try {
				ct = (ClientTask) Class.forName(ti.getTaskClass()).newInstance();
				ct.initParams(cfd, ti);// 初始化任务参数 init parameters in task.
				log.info("加载任务(Load Task)：" + ti.getTaskName() + " : 执行类(Exec Class)：" + ti.getTaskClass());
			} catch (ClassNotFoundException e) {
				log.error("转换配置文件" + System.getProperty("user.dir").replace('\\', '/') + "config.xml中task任务失败，请任务信息");
				log.error(e.getMessage());
				log.error(e.getStackTrace());
				throw new Exception("转换配置文件config.xml中task任务失败，请任务信息");
			}
			taskList.add(ct);
		}
		log.info("任务初始化完成.");
		// 定时5秒 执行全部任务
		Runnable runnable = new Runnable() {
			public void run() {
				for (ClientTask ct : taskList) {
					log.info("crontab execute task");
					ct.execTask();
					log.info("crontab end task");
				}
			}
		};

		log.info("启动定时任务...");
		// 启动定时执行任务
		ScheduledExecutorService service = Executors.newSingleThreadScheduledExecutor();
		service.scheduleAtFixedRate(runnable, 0, cfd.getTimeInterval(), TimeUnit.SECONDS);
		log.info("定时任务已启动。");
	}
}
