package main.process.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.process.domain.ProcessDao;
import main.process.service.ProcessService;

public class ProcessAction extends HttpServlet {

	private ProcessService service;
	/**
	 * Constructor of the object.
	 */
	public ProcessAction() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); 
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
		
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		
		String path = request.getContextPath();
		String username = request.getParameter("username");
		String pswd = request.getParameter("password");
		
		List<Object> params = new ArrayList<Object>();
		params.add(username);
		params.add(pswd);
		//boolean flag = service.login(params);
		boolean flag = false;
				
		if (flag) {
			
			request.getSession().setAttribute("username", username);
			//response.sendRedirect(path+"/demo/main.jsp");
			//TODO:ִ��main process��ķ���
		}else{
            response.setHeader("Cache-Control", "no-store");  
            response.setHeader("Pragma", "no-cache");  
            response.setDateHeader("Expires", 0);  
            response.getWriter().write("[{\"message\":\"�û������������!\"}]"); 
		}
		out.flush();
		out.close();
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
		service = new ProcessDao();
	}

}
