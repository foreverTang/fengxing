package main.process.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import utils.jdbcHelper.JdbcUtils;

public class ProcessService {

	private JdbcUtils jdbcUtils;
	public ProcessService() {
		// TODO Auto-generated constructor stub
		jdbcUtils = new JdbcUtils();
	}
	
	public void changeJsonFile() throws IOException{
		String tempPath1 = Thread.currentThread().getContextClassLoader().getResource("").getPath();
		String tempPath2 = tempPath1.substring(1, tempPath1.lastIndexOf("webproject")); 
		final String tempPath3 = tempPath2+"webproject/main/process/treeAndGraph/testData.json";
		final String tempPath3_2 = tempPath2+"webproject/main/process/treeAndGraph/testData-2.json";
        Runnable runnable = new Runnable() {  
            public void run() {  
            	 // task to run goes here  
                System.out.println("Hello !!");  
            	File file=new File(tempPath3);
                if(!file.exists())
            	{
            		try {
						file.createNewFile();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
            	}
                FileOutputStream out = null;
				try {
					out = new FileOutputStream(file,false);
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} 
				/*
                for(int i=0;i<10;i++){
                    StringBuffer sb=new StringBuffer();
                    sb.append("这是第"+i+"句-- ");
                	//StringBuffer sb = getNewJsonDataFromDatabase();
                    try {
						out.write(sb.toString().getBytes("utf-8"));
					} catch (UnsupportedEncodingException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
                }   
                */  
				String sb = getNewJsonDataFromDatabase();
				try {
					out.write(sb.getBytes("utf-8"));
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
                try {
					out.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
                
               
            }  
        };  
        ScheduledExecutorService service = Executors  
                .newSingleThreadScheduledExecutor();  
        // 第二个参数为首次执行的延时时间，第三个参数为定时执行的间隔时间  
        service.scheduleAtFixedRate(runnable, 1, 5, TimeUnit.SECONDS);  
	}
	
	
	public String getNewJsonDataFromDatabase(){
		StringBuffer temp=new StringBuffer();
		try {
			jdbcUtils.getConnection();
			//String sql = "select count(distinct(hostname)) as hostnum from host ";
			//int hostnum = jdbcUtils.getCount(sql, null);
			String sql = "select DISTINCT(a.hostname) from host a order by a.hostname";
			List<Map<String, Object>> hostList = jdbcUtils.findSimpleResult(sql, null);
			if(hostList.size()==0){
				return "";
			}	
			String sql2 =  "SELECT e.hostnameFrom,e.hostnameTo,e.size from "+
					"( "+
						"select c.size,c.hostnameFrom,d.hostname as hostnameTo from "+
								"(select a.ipTo,a.size,b.hostname as hostnameFrom from hostlevel a LEFT JOIN  host b on a.ipFrom = b.ip) c  "+
						"inner join host d on c.ipTo = d.ip "+
					") e ORDER BY hostnameFrom,hostnameTo";
			List<Map<String, Object>> messageSizeList = jdbcUtils.findSimpleResult(sql2, null);
			if(messageSizeList.size()==0){
				return "";
			}
			List<Map<String, Object>> messageSizeList_processed = messageSizeListProcess(messageSizeList);
			temp.append("{");
			//拼接nodes
			temp.append("\"nodes\": ");
			temp.append("[");
			for(Map<String, Object> host : hostList){
				temp.append("{ ");
				temp.append("\"id\":"+"\""+host.get("hostname")+"\"");
				temp.append(", \"name\": "+"\""+host.get("hostname")+"\"");
				temp.append("},");
			}
			String temp_temp;
			temp_temp=temp.subSequence(0, temp.length()-1).toString();//去掉最后一个“,”
			temp=new StringBuffer(temp_temp);
			temp.append("]");
			//-----------------------------
			temp.append(",");
			//拼接relations
			temp.append("\"relations\": ");
			temp.append("[");
			/**
			for(int i=0;i<messageSizeList_processed.size();i++){
				temp.append("{ ");
				temp.append("\"from\":"+"\""+messageSizeList_processed.get(i).get("hostnameFrom")+"\"");
				temp.append(",\"to\":"+"\""+messageSizeList_processed.get(i).get("hostnameTo")+"\"");
				temp.append(",\"name\":"+"\""+messageSizeList_processed.get(i).get("size")+"\"");
				temp.append(",\"tooltip\":"+"\""+messageSizeList_processed.get(i).get("size")+"\"");
				temp.append("},");
			}
			**/
			for(int i=0;i<hostList.size();i++){
				for(int j=i+1;j<hostList.size();j++){
					Map<String, String> contain = messageSizeList_processed_contain(messageSizeList_processed,(String)hostList.get(i).get("hostname"),(String)hostList.get(j).get("hostname"));
					if(contain.get("iscontain").equals("true")){
						temp.append("{ ");
						temp.append("\"from\":"+"\""+(String)hostList.get(i).get("hostname")+"\"");
						temp.append(",\"to\":"+"\""+(String)hostList.get(j).get("hostname")+"\"");
						temp.append(",\"name\":"+"\""+contain.get("size")+"kb/5s"+"\"");
						temp.append(",\"tooltip\":"+"\""+contain.get("size")+"kb/5s"+"\"");
						temp.append("},");
					}	
					else{
						/**
						temp.append("{ ");
						temp.append("\"from\":"+"\""+(String)hostList.get(i).get("hostname")+"\"");
						temp.append(",\"to\":"+"\""+(String)hostList.get(j).get("hostname")+"\"");
						temp.append(",\"name\":"+"\""+0+"\"");
						temp.append(",\"tooltip\":"+"\""+0+"\"");
						temp.append("},");
						**/
					}
					contain = messageSizeList_processed_contain(messageSizeList_processed,(String)hostList.get(j).get("hostname"),(String)hostList.get(i).get("hostname"));
					if(contain.get("iscontain").equals("true")){
						temp.append("{ ");
						temp.append("\"from\":"+"\""+(String)hostList.get(j).get("hostname")+"\"");
						temp.append(",\"to\":"+"\""+(String)hostList.get(i).get("hostname")+"\"");
						temp.append(",\"name\":"+"\""+contain.get("size")+"kb/5s"+"\"");
						temp.append(",\"tooltip\":"+"\""+contain.get("size")+"kb/5s"+"\"");
						temp.append("},");
					}	
					else{
						/**
						temp.append("{ ");
						temp.append("\"from\":"+"\""+(String)hostList.get(j).get("hostname")+"\"");
						temp.append(",\"to\":"+"\""+(String)hostList.get(i).get("hostname")+"\"");
						temp.append(",\"name\":"+"\""+0+"\"");
						temp.append(",\"tooltip\":"+"\""+0+"\"");
						temp.append("},");
						**/
					}	
				}
			}
			temp_temp=temp.subSequence(0, temp.length()-1).toString();//去掉最后一个“,”
			temp=new StringBuffer(temp_temp);
			temp.append("]");
			//------------------------------
			temp.append("}");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{			
		//关闭数据库
		jdbcUtils.releaseConn();			
		}
		return temp.toString();
		//return "{\"nodes\": [{ \"id\": 1, \"name\": \"001\"}, { \"id\": 2, \"name\": \"R1\"  }],\"relations\": [{ \"from\": 1, \"to\": 2,\"name\":\"name\",\"tooltip\":\"tooltip\"}]}".toString();
	}
	/**
	 * 合并size*/
	public List<Map<String, Object>> messageSizeListProcess(List<Map<String, Object>> messageSizeList){
		List<Map<String, Object>> returnList = new ArrayList<Map<String,Object>>();
		Map<String, Object> paramMap = messageSizeList.get(0);
		int i=1;
		while(i<messageSizeList.size()){
			if(paramMap.get("hostnameFrom").equals(messageSizeList.get(i).get("hostnameFrom"))&&paramMap.get("hostnameTo").equals(messageSizeList.get(i).get("hostnameTo"))){
				paramMap.put("size", (float)paramMap.get("size")+(float)messageSizeList.get(i).get("size"));
			}
			else{
				returnList.add(paramMap);
				paramMap = messageSizeList.get(i);							
			}	
			i++;
		}
		returnList.add(paramMap);
		return returnList;
	}
	/**
	 * messageSizeList_processed是否含有from和to*/
	public Map<String, String> messageSizeList_processed_contain(List<Map<String, Object>> messageSizeList_processed,String from,String to){
		Map<String, String> paramMap = new HashMap<String,String>();
		paramMap.put("iscontain", "false");
		paramMap.put("size", "0");
		for(int i=0;i<messageSizeList_processed.size();i++){
			if(messageSizeList_processed.get(i).get("hostnameFrom").equals(from)&&messageSizeList_processed.get(i).get("hostnameTo").equals(to)){
				paramMap.put("iscontain", "true");
				paramMap.put("size", messageSizeList_processed.get(i).get("size").toString());
				return paramMap;
			}
		}
		return paramMap;
	}
	
	///////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public void changeJsonFile_2(final String computerName) throws IOException{
		String tempPath1 = Thread.currentThread().getContextClassLoader().getResource("").getPath();
		String tempPath2 = tempPath1.substring(1, tempPath1.lastIndexOf("webproject")); 
		final String tempPath3_2 = tempPath2+"webproject/main/process/treeAndGraph/testData-"+computerName+".json";
        Runnable runnable = new Runnable() {  
            public void run() {                
                // task to run goes here  
                System.out.println("Hello !!");  
            	File file_2=new File(tempPath3_2);
                if(!file_2.exists())
            	{
            		try {
						file_2.createNewFile();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
            	}
                FileOutputStream out_2 = null;
				try {
					out_2 = new FileOutputStream(file_2,false);
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} 
				/*
                for(int i=0;i<10;i++){
                    StringBuffer sb=new StringBuffer();
                    sb.append("这是第"+i+"句-- ");
                	//StringBuffer sb = getNewJsonDataFromDatabase();
                    try {
						out.write(sb.toString().getBytes("utf-8"));
					} catch (UnsupportedEncodingException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
                }   
                */  
				String sb_2 = getNewJsonDataFromDatabase_2(computerName);
				try {
					out_2.write(sb_2.getBytes("utf-8"));
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
                try {
					out_2.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

            }  
        };  
        ScheduledExecutorService service = Executors  
                .newSingleThreadScheduledExecutor();  
        // 第二个参数为首次执行的延时时间，第三个参数为定时执行的间隔时间  
        service.scheduleAtFixedRate(runnable, 1, 5, TimeUnit.SECONDS);  
	}
	
	public String getNewJsonDataFromDatabase_2(String computerName){
		StringBuffer temp=new StringBuffer();
		try {
			jdbcUtils.getConnection();
			//String sql = "select DISTINCT(a.component)  from component a where a.ip in (select b.ip from host b where b.hostname ='"+computerName+"')";
			String sql = "select c.hostname from (select DISTINCT(a.component) as hostname from component a where a.ip in (select b.ip from host b where b.hostname ='"+computerName+"')) c";
			List<Map<String, Object>> componentList = jdbcUtils.findSimpleResult(sql, null);
			if(componentList.size()==0){
				return "";
			}	
			/*
			String sql2 =  "SELECT e.hostnameFrom,e.hostnameTo,e.size from "+
					"( "+
						"select c.size,c.hostnameFrom,d.hostname as hostnameTo from "+
								"(select a.ipTo,a.size,b.hostname as hostnameFrom from hostlevel a LEFT JOIN  host b on a.ipFrom = b.ip) c  "+
						"inner join host d on c.ipTo = d.ip "+
					") e ORDER BY hostnameFrom,hostnameTo";
			
			String sql2 = "select d.componentFrom,d.componentTo,d.size from "+ 
					     "( "+
							"select c.componentFrom,d.component as componentTo,c.size from "+
							   "(select b.component as componentFrom,a.portNumTo,a.size from componentlevel a left JOIN component b on a.portNumFrom = b.portNum) c "+
							"inner join component d on c.portNumTo = d.portNum "+
							")d order by componentFrom,componentTo ";
		    */
			String sql2 = "select d.hostnameFrom,d.hostnameTo,d.size from "+ 
				     "( "+
						"select c.componentFrom as hostnameFrom,d.component as hostnameTo,c.size from "+
						   "(select b.component as componentFrom,a.portNumTo,a.size from (select * from componentlevel where ip in (select ip from host where hostname = '"+computerName+"' ) ) a left JOIN component b on a.portNumFrom = b.portNum) c "+
						"inner join (select * from component where ip in(select ip from host where hostname='"+computerName+"')) d on c.portNumTo = d.portNum "+
						")d order by hostnameFrom,hostnameTo ";
			List<Map<String, Object>> messageSizeList = jdbcUtils.findSimpleResult(sql2, null);
			if(messageSizeList.size()==0){
				return "";
			}
			List<Map<String, Object>> messageSizeList_processed = messageSizeListProcess_2(messageSizeList);
			temp.append("{");
			//拼接nodes
			temp.append("\"nodes\": ");
			temp.append("[");
			for(Map<String, Object> host : componentList){
				temp.append("{ ");
				temp.append("\"id\":"+"\""+host.get("hostname")+"\"");
				temp.append(", \"name\": "+"\""+host.get("hostname")+"\"");
				temp.append("},");
			}
			String temp_temp;
			temp_temp=temp.subSequence(0, temp.length()-1).toString();//去掉最后一个“,”
			temp=new StringBuffer(temp_temp);
			temp.append("]");
			//-----------------------------
			temp.append(",");
			//拼接relations
			temp.append("\"relations\": ");
			temp.append("[");
			/**
			for(int i=0;i<messageSizeList_processed.size();i++){
				temp.append("{ ");
				temp.append("\"from\":"+"\""+messageSizeList_processed.get(i).get("hostnameFrom")+"\"");
				temp.append(",\"to\":"+"\""+messageSizeList_processed.get(i).get("hostnameTo")+"\"");
				temp.append(",\"name\":"+"\""+messageSizeList_processed.get(i).get("size")+"\"");
				temp.append(",\"tooltip\":"+"\""+messageSizeList_processed.get(i).get("size")+"\"");
				temp.append("},");
			}
			**/
			for(int i=0;i<componentList.size();i++){
				for(int j=i+1;j<componentList.size();j++){
					Map<String, String> contain = messageSizeList_processed_contain_2(messageSizeList_processed,(String)componentList.get(i).get("hostname"),(String)componentList.get(j).get("hostname"));
					if(contain.get("iscontain").equals("true")){
						temp.append("{ ");
						temp.append("\"from\":"+"\""+(String)componentList.get(i).get("hostname")+"\"");
						temp.append(",\"to\":"+"\""+(String)componentList.get(j).get("hostname")+"\"");
						temp.append(",\"name\":"+"\""+contain.get("size")+"kb/5s"+"\"");
						temp.append(",\"tooltip\":"+"\""+contain.get("size")+"kb/5s"+"\"");
						temp.append("},");
					}	
					else{
						/**
						temp.append("{ ");
						temp.append("\"from\":"+"\""+(String)hostList.get(i).get("hostname")+"\"");
						temp.append(",\"to\":"+"\""+(String)hostList.get(j).get("hostname")+"\"");
						temp.append(",\"name\":"+"\""+0+"\"");
						temp.append(",\"tooltip\":"+"\""+0+"\"");
						temp.append("},");
						**/
					}
					contain = messageSizeList_processed_contain_2(messageSizeList_processed,(String)componentList.get(j).get("hostname"),(String)componentList.get(i).get("hostname"));
					if(contain.get("iscontain").equals("true")){
						temp.append("{ ");
						temp.append("\"from\":"+"\""+(String)componentList.get(j).get("hostname")+"\"");
						temp.append(",\"to\":"+"\""+(String)componentList.get(i).get("hostname")+"\"");
						temp.append(",\"name\":"+"\""+contain.get("size")+"kb/5s"+"\"");
						temp.append(",\"tooltip\":"+"\""+contain.get("size")+"kb/5s"+"\"");
						temp.append("},");
					}	
					else{
						/**
						temp.append("{ ");
						temp.append("\"from\":"+"\""+(String)hostList.get(j).get("hostname")+"\"");
						temp.append(",\"to\":"+"\""+(String)hostList.get(i).get("hostname")+"\"");
						temp.append(",\"name\":"+"\""+0+"\"");
						temp.append(",\"tooltip\":"+"\""+0+"\"");
						temp.append("},");
						**/
					}	
				}
			}
			temp_temp=temp.subSequence(0, temp.length()-1).toString();//去掉最后一个“,”
			temp=new StringBuffer(temp_temp);
			temp.append("]");
			//------------------------------
			temp.append("}");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{			
		//关闭数据库
		jdbcUtils.releaseConn();			
		}
		return temp.toString();
		//return "{\"nodes\": [{ \"id\": 1, \"name\": \"001\"}, { \"id\": 2, \"name\": \"R1\"  }],\"relations\": [{ \"from\": 1, \"to\": 2,\"name\":\"name\",\"tooltip\":\"tooltip\"}]}".toString();
	}
	/**
	 * 合并size*/
	public List<Map<String, Object>> messageSizeListProcess_2(List<Map<String, Object>> messageSizeList){
		List<Map<String, Object>> returnList = new ArrayList<Map<String,Object>>();
		Map<String, Object> paramMap = messageSizeList.get(0);
		int i=1;
		while(i<messageSizeList.size()){
			if(paramMap.get("hostnameFrom").equals(messageSizeList.get(i).get("hostnameFrom"))&&paramMap.get("hostnameTo").equals(messageSizeList.get(i).get("hostnameTo"))){
				paramMap.put("size", (float)paramMap.get("size")+(float)messageSizeList.get(i).get("size"));
			}
			else{
				returnList.add(paramMap);
				paramMap = messageSizeList.get(i);							
			}	
			i++;
		}
		returnList.add(paramMap);
		return returnList;
	}
	/**
	 * messageSizeList_processed是否含有from和to*/
	public Map<String, String> messageSizeList_processed_contain_2(List<Map<String, Object>> messageSizeList_processed,String from,String to){
		Map<String, String> paramMap = new HashMap<String,String>();
		paramMap.put("iscontain", "false");
		paramMap.put("size", "0");
		for(int i=0;i<messageSizeList_processed.size();i++){
			if(messageSizeList_processed.get(i).get("hostnameFrom").equals(from)&&messageSizeList_processed.get(i).get("hostnameTo").equals(to)){
				paramMap.put("iscontain", "true");
				paramMap.put("size", messageSizeList_processed.get(i).get("size").toString());
				return paramMap;
			}
		}
		return paramMap;
	}
}
