package zju.cst.cloud.cpc;

import org.apache.log4j.Logger;

//import java.io.IOException;

/**
*Declaration: 
*
*@author Benjy
*@date 2016年4月3日
*/
public class LoadComs {
	public boolean loadCpcShell(Logger log) throws Exception{
		log.info("加载客户端脚本shell: " + System.getProperty("user.dir").replace('\\', '/')+"/cpc.sh");
		String[] cmds = {"/bin/sh",System.getProperty("user.dir").replace('\\', '/')+"/cpc.sh"};
        Process pro = Runtime.getRuntime().exec(cmds);
        pro.waitFor();
        if(pro.exitValue()==0){
        	log.info("成功加载客户端脚本");
        	return true;
        }else{
        	log.error("加载客户端脚本失败");
        	return false;
        }
	}
}