package zju.cst.cloud.cpc;

import java.util.Calendar;
import java.util.List;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.SocketException;
import java.net.UnknownHostException;


import zju.cst.cloud.bean.FlowCountBean;

public class ClientSend {
	private String serverIP;//服务端IP地址
	private int serverPort;//服务端端口
	
	private byte[] ipAddr=null;
	
	public ClientSend(){
	}
	public ClientSend(String serverIP,int serverPort){
		this.serverIP=serverIP;
		this.serverPort=serverPort;
		covertIpStrToIpAddr();
	}
	
	private void covertIpStrToIpAddr(){
		if(null==serverIP||serverIP.equals(""))
			return;
		String[] ip = serverIP.split("\\.");
		if(ip.length!=4)
			return;
		
		ipAddr = new byte[4];
		for(int i=0;i<4;i++){
			ipAddr[i]=(byte)Integer.parseInt(ip[i]);
		}
	}
	
	public String getServerIP() {
		return serverIP;
	}
	
	public void setServerIP(String serverIP) {
		this.serverIP = serverIP;
		covertIpStrToIpAddr();
	}
	
	public int getServerPort() {
		return serverPort;
	}

	public void setServerPort(int serverPort) {
		this.serverPort = serverPort;
	}
	
	/**
	 * 得到当前系统时间
	 * @return
	 */
	String getCurrentTime(){
		Calendar cl = Calendar.getInstance();
		StringBuilder sb=new StringBuilder();
		sb.append(cl.get(Calendar.YEAR));
		sb.append(":");
		if(cl.get(Calendar.MONTH)+1<10)
			sb.append("0");
		sb.append(cl.get(Calendar.MONTH)+1);
		sb.append(":");
		if(cl.get(Calendar.DAY_OF_MONTH)<10)
			sb.append("0");
		sb.append(cl.get(Calendar.DAY_OF_MONTH));
		sb.append(" ");
		if(cl.get(Calendar.HOUR_OF_DAY)<10)
			sb.append("0");
		sb.append(cl.get(Calendar.HOUR_OF_DAY));
		sb.append(":");
		if(cl.get(Calendar.MINUTE)<10)
			sb.append("0");
		sb.append(cl.get(Calendar.MINUTE));
		sb.append(":");
		if(cl.get(Calendar.SECOND)<10)
			sb.append("0");
		sb.append(cl.get(Calendar.SECOND));
		return sb.toString();
	}
	
	/**
	 * send the data of FlowCount
	 * @param sendCode	流量信息编码
	 * @param fcList			流量信息列表
	 */
	boolean sendFlowCount(int sendCode,List<FlowCountBean> fcList){
		if(null==fcList||fcList.size()<1)
			return false;
		//将fcList转为String.
		StringBuilder sb = new StringBuilder();
		sb.append(sendCode);
		sb.append(getCurrentTime());
		sb.append(FlowCountBean.getStringTitle());
		for(FlowCountBean fcb:fcList){
			sb.append(","+fcb.getString());
		}
		byte[] msg = sb.toString().getBytes();
		InetAddress server = null;
		try {
			server = InetAddress.getByAddress(ipAddr);
		} catch (UnknownHostException e) {			
			e.printStackTrace();
			return false;
		}
		DatagramSocket sendSocket = null;
		try {
			sendSocket=new DatagramSocket();
			DatagramPacket packet = new DatagramPacket(msg, msg.length, server, serverPort);
			sendSocket.send(packet);
		} catch (SocketException e) {
			e.printStackTrace();
			return false;
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}finally{
			if(null!=sendSocket)
				sendSocket.close();
		}
		return true;
	}
	
	/**
	 * 发送字符串
	 * @param sendString
	 * @return
	 */
	boolean sendFlowCount(String sendString){
		byte[] msg = sendString.getBytes();
		InetAddress server = null;
		try {
			server = InetAddress.getByAddress(ipAddr);
		} catch (UnknownHostException e) {			
			e.printStackTrace();
			return false;
		}
		DatagramSocket sendSocket = null;
		try {
			sendSocket=new DatagramSocket();
			DatagramPacket packet = new DatagramPacket(msg, msg.length, server, serverPort);
			sendSocket.send(packet);
		} catch (SocketException e) {
			e.printStackTrace();
			return false;
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}finally{
			if(null!=sendSocket)
				sendSocket.close();
		}
		return true;
	}
}
