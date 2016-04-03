package zju.cst.cloud.cpserver;

import org.apache.log4j.Logger;

/**
*Declaration: 
*
*@author Benjy
*@date 2016年3月6日
*/
public interface ServerParse {
	/**
	 * 解析文本
	 * @param txt
	 */
	public void parse(String txt,Logger log);
}
