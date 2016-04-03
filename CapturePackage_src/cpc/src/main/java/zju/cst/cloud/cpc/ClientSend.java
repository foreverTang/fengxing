package zju.cst.cloud.cpc;

import java.util.Calendar;
import java.util.List;

import org.apache.log4j.Logger;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.SocketException;
import java.net.UnknownHostException;

import zju.cst.cloud.bean.FlowCountBean;

public class ClientSend {
	private String serverIP;// 服务端IP地址
	private int serverPort;// 服务端端口

	private byte[] ipAddr = null;

	private Logger log = null;

	public ClientSend() {
		log = Logger.getLogger("ClientSend");
	}

	public ClientSend(String serverIP, int serverPort) {
		this.serverIP = serverIP;
		this.serverPort = serverPort;
		covertIpStrToIpAddr();
		log = Logger.getLogger("ClientSend");
	}

	private void covertIpStrToIpAddr() {
		if (null == serverIP || serverIP.equals(""))
			return;
		String[] ip = serverIP.split("\\.");
		if (ip.length != 4)
			return;

		ipAddr = new byte[4];
		for (int i = 0; i < 4; i++) {
			ipAddr[i] = (byte) Integer.parseInt(ip[i]);
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

	private String getSendTitle(int taskcode) {
		return taskcode + getCurrentTime();
	}

	/**
	 * 得到当前系统时间
	 * 
	 * @return
	 */
	String getCurrentTime() {
		Calendar cl = Calendar.getInstance();
		StringBuilder sb = new StringBuilder();
		sb.append(cl.get(Calendar.YEAR));
		sb.append("-");
		if (cl.get(Calendar.MONTH) + 1 < 10)
			sb.append("0");
		sb.append(cl.get(Calendar.MONTH) + 1);
		sb.append("-");
		if (cl.get(Calendar.DAY_OF_MONTH) < 10)
			sb.append("0");
		sb.append(cl.get(Calendar.DAY_OF_MONTH));
		sb.append(" ");
		if (cl.get(Calendar.HOUR_OF_DAY) < 10)
			sb.append("0");
		sb.append(cl.get(Calendar.HOUR_OF_DAY));
		sb.append(":");
		if (cl.get(Calendar.MINUTE) < 10)
			sb.append("0");
		sb.append(cl.get(Calendar.MINUTE));
		sb.append(":");
		if (cl.get(Calendar.SECOND) < 10)
			sb.append("0");
		sb.append(cl.get(Calendar.SECOND));
		return sb.toString();
	}

	/**
	 * send the data of FlowCount
	 * 
	 * @param sendCode
	 *            流量信息编码
	 * @param fcList
	 *            流量信息列表
	 */
	boolean sendFlowCount(int sendCode, List<FlowCountBean> fcList) {
		log.info("发送流量数据...");
		if (null == fcList || fcList.size() < 1)
			return false;
		// 将fcList转为String.
		StringBuilder sb = new StringBuilder();
		// sb.append(sendCode);
		// sb.append(getCurrentTime());
		sb.append(getSendTitle(sendCode));
		sb.append(FlowCountBean.getStringTitle());
		for (FlowCountBean fcb : fcList) {
			sb.append("|");
			sb.append(fcb.getString());
		}
		byte[] msg = sb.toString().getBytes();
		InetAddress server = null;
		try {
			server = InetAddress.getByAddress(ipAddr);
		} catch (UnknownHostException e) {
			// e.printStackTrace();
			log.error("未知的远程主机 : " + e.getMessage());
			log.error(e.getStackTrace());
			return false;
		}
		DatagramSocket sendSocket = null;
		try {
			sendSocket = new DatagramSocket();
			DatagramPacket packet = new DatagramPacket(msg, msg.length, server, serverPort);
			sendSocket.send(packet);
		} catch (SocketException e) {
			log.error(e.getMessage());
			log.error(e.getStackTrace());
			return false;
		} catch (IOException e) {
			log.error(e.getMessage());
			log.error(e.getStackTrace());
			return false;
		} finally {
			if (null != sendSocket)
				sendSocket.close();
		}
		log.info("向" + serverIP + "发送：" + fcList.size() + "条数据");
		return true;
	}

	/**
	 * 发送字符串
	 * 
	 * @param sendString
	 * @return
	 */
	boolean sendCpuMem(int taskcode, String sendString) {
		log.info("向" + serverIP + "发送消息：" + sendString);
		StringBuilder sb = new StringBuilder();
		sb.append(getSendTitle(taskcode));
		sb.append("|");
		sb.append(sendString);
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
			sendSocket = new DatagramSocket();
			DatagramPacket packet = new DatagramPacket(msg, msg.length, server, serverPort);
			sendSocket.send(packet);
		} catch (SocketException e) {
			e.printStackTrace();
			return false;
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		} finally {
			if (null != sendSocket)
				sendSocket.close();
		}
		log.info(sb.toString());
		log.info("发送成功。");
		return true;
	}
}
