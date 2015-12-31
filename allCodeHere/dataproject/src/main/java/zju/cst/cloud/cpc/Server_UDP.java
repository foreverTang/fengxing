package zju.cst.cloud.cpc;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;

/**
*Declaration: 
*
*@author Benjy
*@date 2015骞�12鏈�20鏃�
*/
public class Server_UDP {
	public static void main(String[] args){
		DatagramSocket socket = null;
		try {
			socket=new DatagramSocket(26262);
			System.out.println("客户端接受数据......");
			byte[] buf = new byte[65536];
			while(true){
				DatagramPacket packet = new DatagramPacket(buf,buf.length);
				socket.receive(packet);
				String s = new String(packet.getData());
				System.out.println(s);
			}
		} catch (SocketException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			socket.close();
		}
	}
}
