package main.login.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.login.domain.LoginDao;
import main.login.service.LoginService;
import main.process.action.ProcessAction;

public class LoginAction extends HttpServlet {

	private LoginService service;
	/**
	 * Constructor of the object.
	 */
	public LoginAction() {
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
		boolean flag = true;
				
		if (flag) {
			
			request.getSession().setAttribute("username", username);
			//response.sendRedirect(path+"/demo/main.jsp");
			//TODO:执行main process里的方法
			//response.sendRedirect(path+"/main/process/index.jsp");
			
			 response.setHeader("Cache-Control", "no-store");  
	         response.setHeader("Pragma", "no-cache");  
	         response.setDateHeader("Expires", 0);  
	         response.getWriter().write("[{\"message\":\"success\"}]"); 
			 new ProcessAction().doPost(request, response);
		}else{
            response.setHeader("Cache-Control", "no-store");  
            response.setHeader("Pragma", "no-cache");  
            response.setDateHeader("Expires", 0);  
            response.getWriter().write("[{\"message\":\"用户名或密码错误!\"}]"); 
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
		service = new LoginDao();
	}

}
