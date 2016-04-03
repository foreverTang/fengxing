package zju.cst.cloud.cpserver;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;

import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;

/**
*Declaration: 
*
*@author Benjy
*@date 2015骞�12鏈�20鏃�
*/
public class Server_UDP {
	public static void main(String[] args){
		DOMConfigurator.configure(System.getProperty("user.dir").replace('\\', '/')+"/log4j.xml");
		final Logger log = Logger.getLogger("Server_UDP");
		DatagramSocket socket = null;
		try {
			socket=new DatagramSocket(26669);
			System.out.println("客户端接受数据......");
			byte[] buf = new byte[10000];
			while(true){
				DatagramPacket packet = new DatagramPacket(buf,buf.length);
				socket.receive(packet);
				String s = new String(packet.getData());
				System.out.println(s);
				log.info(s.toString());
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
