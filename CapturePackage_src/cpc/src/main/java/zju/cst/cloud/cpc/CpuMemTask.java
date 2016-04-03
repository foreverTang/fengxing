package zju.cst.cloud.cpc;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import org.apache.log4j.Logger;

import zju.cst.cloud.bean.TaskInfo;

/**
*Declaration: 
*
*@author Benjy
*@date 2016年4月3日
*/
public class CpuMemTask implements ClientTask{
	private ClientSend cs=null;
	private int taskcode = 0;
	private String basePath="";
	private Logger log = null;
	
	public void initParams(ConfigData cfd,TaskInfo ti){
		if(null==cfd){
			cs = new ClientSend();
			return;
		}
		if(null!=ti){
			taskcode = ti.getTaskNum();
		}
		
		basePath = cfd.getCaptureBasePath()+"cpuMem.log";
		
		log = Logger.getLogger("FlowCountTask");
		
		cs = new ClientSend(cfd.getServerIP(),cfd.getServerPort());
	}

	public void execTask() {
		log.info("执行加载主机负载任务...");
		if(null==cs){
			log.error("ClientSend类实例不存在，无法建立远程连接");
			return;
		}
		
		File file = new File(basePath);
		StringBuilder sb = new StringBuilder();
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(file));
            String ip=reader.readLine();
            ip=ip.trim().split(" ")[1];
            sb.append("ip:");
            sb.append(ip);
            sb.append(",");
            
            String mem = reader.readLine();
            String[] tmp = mem.trim().split(" ");
            int count=0;
            for(String d:tmp){
                if(!"".equals(d))
                        count++;
            }
            String[] detail = new String[count];
            count=0;
            for(String d:tmp){
                if(!"".equals(d))
                        detail[count++]=d;
            }

            int total = Integer.parseInt(detail[1]);
            int total_free  = Integer.parseInt(detail[3]) + Integer.parseInt(detail[5]) + Integer.parseInt(detail[6]);
            
            sb.append("mem:");
            sb.append(total_free*100/total);
            sb.append(",");
            
            String cpu = reader.readLine();
            tmp = cpu.split(" ");
            if(!"%Cpu(s):".equals(tmp[0])){
            	throw new Exception("读取Cpu数据失败");
            }
            count = 0;
            for(String d:tmp){
                if(!"".equals(d))
                        count++;
            }
            detail = new String[count];
            count = 0;
			for(String d:tmp){
				if(!"".equals(d)){
					detail[count++]=d;
				}
			}
//            System.out.println(detail[7]);
			sb.append("cpu:");
			sb.append(detail[7]);
        } catch (Exception e) {
            log.error(e.getMessage());
            log.error(e.getStackTrace());
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e1) {
                }
            }
        }
		
		if("".equals(sb.toString())){
			log.info("本次未获取到Cpu、Memory信息");
			return;
		}
        
        //发送客户端流量信息    send the （cpu、Memory） data in Client to Server
        cs.sendCpuMem(taskcode, sb.toString());
		log.info("Cpu、Memory任务执行结束。");
	}
	
}
