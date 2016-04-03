package zju.cst.cloud.cpc;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.apache.log4j.Logger;

import zju.cst.cloud.bean.FlowCountBean;
import zju.cst.cloud.bean.TaskInfo;

/**
*Declaration: 获取流量信息的任务
*
*@author Benjy
*@date 2015年12月18日
*/
public class FlowCountTask implements ClientTask{
	private	long startPos=0;
	private ClientSend cs=null;
	private int taskcode = 0;
	private String basePath="";
	private int timePoint=2;
	private int timeInterval=5;
	private Logger log = null;
	
	public void initParams(ConfigData cfd,TaskInfo ti){
		if(null==cfd){
			cs = new ClientSend();
			return;
		}
		if(null!=ti){
			taskcode = ti.getTaskNum();
		}
		
		basePath = cfd.getCaptureBasePath();
		timePoint = cfd.getTimePoint();
		timeInterval = cfd.getTimeInterval();
		
		log = Logger.getLogger("FlowCountTask");
		
		cs = new ClientSend(cfd.getServerIP(),cfd.getServerPort());
	}
	
	/**
	 * 得到当前需要读取的文件的路径，及设置读取的起始行
	 * @param basePath 系统配置的基础路径，如/var/TcpDumpLog/...
	 * @param timePoint	系统设置的时间点
	 * @param timeInterval 系统读取文件的时间间隔
	 * @return
	 */
	private String getFullPath(String basePath,int timePoint,int timeInterval){
		Calendar c = Calendar.getInstance();
		int hour = c.get(Calendar.HOUR);
		if(hour<timePoint){		//如果当天时间小于设置的时间点，则使用昨天的时间点计算
			c.add(Calendar.DAY_OF_MONTH, -1);	
		}else if(hour==timePoint&&c.get(Calendar.MINUTE)==0){
			if(c.get(Calendar.SECOND)<=timeInterval)
				startPos = 0;		//新切换的一个文件，设置起始读取行 为 0
		}
		int year = c.get(Calendar.YEAR);
		int month = c.get(Calendar.MONTH)+1;
		int day = c.get(Calendar.DAY_OF_MONTH);
		if(month<10){
			if(day<10){
				return basePath+year+"/0"+month+"/tcp.0"+day;		
			}else{
				return basePath+year+"/0"+month+"/tcp."+day;
			}
		}else{
			if(day<10){
				return basePath+year+"/"+month+"/tcp.0"+day;
			}else{
				return basePath+year+"/"+month+"/tcp."+day;
			}
		}
//		if(day<10)
//			return basePath+year+"/"+month+"/tcp.0"+day;
//		return basePath+year+"/"+month+"/tcp."+day;
	}
	
	public void execTask() {
		log.info("执行流量任务...");
		if(null==cs){
			//log.Error("ss");
			return;
		}
		List<FlowCountBean> fcList=new ArrayList<FlowCountBean>();
		RandomAccessFile rf = null;
        try {
            rf = new RandomAccessFile(getFullPath(basePath,timePoint,timeInterval), "r");
            long fileLength;
			fileLength = rf.length();
            rf.seek(startPos);
            String ss="";
            String[] subA=null;
            String[] ipStr=null;
            String[] lenStr=null;
            while(rf.getFilePointer()<fileLength){
            	startPos=rf.getFilePointer();
            	ss=new String(rf.readLine().getBytes("ISO-8859-1"), "utf-8");
            	if(rf.getFilePointer()<fileLength){
            		//解析文档数据   parse text data in document.
            		subA=ss.split(": ");
            		if(subA.length!=2)
            			continue;
            		lenStr=subA[1].split("length ");
            		// 抓包不完整，或包长度为0，丢弃包
            		if(lenStr.length!=2||"0".equals(lenStr[1]))
            			continue;
            		
            		ipStr=subA[0].split(" ");
            		if(ipStr.length!=5)
            			continue;
            		
            		//分离端口和IP地址
            		int sIndex=ipStr[2].lastIndexOf(".");
            		int dIndex=ipStr[4].lastIndexOf(".");
            		
            		FlowCountBean fcb = new FlowCountBean(ipStr[0],ipStr[2].substring(0, sIndex),ipStr[4].substring(0, dIndex),Integer.parseInt(lenStr[1]));
            		//设置端口
            		fcb.setsPort(Integer.parseInt(ipStr[2].substring(sIndex+1)));
            		fcb.setdPort(Integer.parseInt(ipStr[4].substring(dIndex+1)));
            		fcList.add(fcb);
            	}else
            		break;
            }
            //startPos=rf.getFilePointer();
        } catch(FileNotFoundException e){
        	log.error(e.getMessage());
        	log.error(e.getStackTrace());
        } catch (IOException e) {
        	log.error(e.getMessage());
        	log.error(e.getStackTrace());
		} finally{
			if(rf!=null)
				try {
					rf.close();
				} catch (IOException e) {
					log.error("关闭文件失败。");
					log.error(e.getMessage());
		        	log.error(e.getStackTrace());
				}
		}
        if(fcList.size()<1){
        	//log.info("There is no data to send.")
        	log.info("本次没有数据发送；");
        	return;
        }
        
        //发送客户端流量信息    send the flow data in Client to Server
		//cs.sendFlowCount(sb.toString());
        cs.sendFlowCount(taskcode, fcList);
        log.info("流量任务执行结束。");
	}
}
