package zju.cst.cloud.bean;

public class FlowCountBean {
	private String pTime=null;//抓包时间
	private String srcIp=null;//源IP地址端口
	private String dstIp=null;//目标地址端口
	private int len=0;//包长度
	private int sPort=0;
	private int dPort=0;
	
	
	public FlowCountBean(){
	}
	
	public FlowCountBean(String pTime,String srcIp,String dstIp,int len) {
		this.pTime=pTime;
		this.srcIp=srcIp;
		this.dstIp=dstIp;
		this.len=len;
	}
	
	public FlowCountBean(String pTime,String srcIp,int sPort,String dstIp,int dPort,int len) {
		this.pTime=pTime;
		this.srcIp=srcIp;
		this.sPort=sPort;
		this.dstIp=dstIp;
		this.dPort=dPort;
		this.len=len;
	}
	
	public String getpTime() {
		return pTime;
	}
	public void setpTime(String pTime) {
		this.pTime = pTime;
	}
	public String getSrcIp() {
		return srcIp;
	}
	public void setSrcIp(String srcIp) {
		this.srcIp = srcIp;
	}
	
	public int getsPort() {
		return sPort;
	}

	public void setsPort(int sPort) {
		this.sPort = sPort;
	}

	public int getdPort() {
		return dPort;
	}

	public void setdPort(int dPort) {
		this.dPort = dPort;
	}

	public String getDstIp() {
		return dstIp;
	}
	public void setDstIp(String dstIp) {
		this.dstIp = dstIp;
	}
	public int getLen() {
		return len;
	}
	public void setLen(int len) {
		this.len = len;
	}
	
	public String getString(){
		return "{"+pTime+","+srcIp+","+sPort+","+dstIp+","+dPort+","+len+"}";
	}
	public static String getStringTitle(){
		return "{pTime,srcIp,sPort,dstIp,dPort,len}";
	}
//	public Byte[] getBytes(){
//		Byte[] b=null;
//		
//		//=pTime.getBytes("ASCII");
//		
//		return b;
//	}
//	public static FlowCountBean getObjectByBytes(Byte[] bytes,int bytes_length){
//		FlowCountBean fcb=new FlowCountBean();
//		
//		//解析bytes
//		
//		return fcb;
//	}
}
