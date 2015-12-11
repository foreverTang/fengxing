<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OpenStack-Monitoring</title>
    
    
    <!-- before -->
    <!-- Favicon -->
    <link rel="shortcut icon" href="../../static/img/favicon.ico" />
    <!-- CSS -->
    <link href="../../static/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../../static/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../../static/css/style.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href='http://fonts.useso.com/css?family=Titillium+Web' rel='stylesheet' type='text/css'>
    <!-- Javascript Files -->
    <script type="text/javascript" src="../../static/js/jquery-1.10.2.js"></script>
    <script type="text/javascript" src="../../static/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../../static/js/jquery.pagination.js"></script>
	<script type="text/javascript" src="../../static/js/jquery.knob.min.js"></script>
    <script type="text/javascript" src="../../static/js/main.js"></script>
    
    
    
    
	<!-- after -->
	<link rel="stylesheet" href="css/supersized.css">
	<link rel="stylesheet" href="css/login.css">
	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
		<script src="js/html5.js"></script>
	<![endif]-->
	<script src="js/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="js/jquery.form.js"></script>
	<script type="text/javascript" src="js/tooltips.js"></script>
	<script type="text/javascript" src="js/login.js"></script>
	<script src="js/supersized.3.2.7.min.js"></script>
	<script src="js/supersized-init.js"></script>
	<script src="js/scripts.js"></script>
	
	
	
	
	
	
	<script type="text/javascript">	
	$(function(){
		$('#submit_button').click(function(){
			if($('#password').val() == ''){
				show_err_msg('密码不能为空！');
				$('#password').focus();
			}
			if($('#username').val() == ''){
				show_err_msg('用户名不能为空！');	
				$('#username').focus();
			}else{
				$.ajax({
		             type: "POST",
		             url: "<%=path%>/main/LoginAction",
		             data: $("#login_form").serialize(),
		             dataType: "json",
		             success: function(data){
		            	 show_err_msg(data[0].message);		            
		             },
	                 error: function() {
	            	    show_err_msg("提示:操作失败(可能网络问题)!");
	                 }
		         });
			}
		});
		
		$("#after").hide();
		$('#before').delay(3000).fadeTo(4000,.25);
		//$('#before').delay(3000).fadeOut(4000);
		$("#after").delay(7000).fadeIn(3000);

		window.setTimeout(function(){ 
			//changeCss(); 
			},7000); 
        
	});  
	function changeCss(){
		style.cssText = '';
		var fileref = document.createElement('link');
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        
        fileref.setAttribute("href", "css/bootstrap.min.css");
        document.getElementsByTagName("head")[0].appendChild(fileref);
        
        fileref.setAttribute("href", "css/supersized.css");
        document.getElementsByTagName("head")[0].appendChild(fileref);
        
        fileref.setAttribute("href", "css/login.css");
        document.getElementsByTagName("head")[0].appendChild(fileref);
	}
	</script>
</head>


<body>
	<div id= "before">
	    <!-- Start: Preloader -->
	    <div id="preloader">
	        <div id="loader"></div>
	    </div>
	    <!-- End: Preloader -->
	    <!-- Start: Main Content -->
	    <div class="main-container">
	        <!-- Start: Home -->
	        <section class="home-section">
	            <div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12 col-xs-12">
							<span style="float:left;margin-top:-20px;"><h1>Flow Monitoring System on OpenStack</h1></span>	
							<br/><br/><br/><br/>			
							<p>
								By FengXing GROUP<br />
							</p>
						</div>
					</div>
	            </div>
	        </section>
	        <!-- End: Home -->    
	        <!-- Start: Footer-->
	        <footer class="footer">
	            <p><i class="fa fa-coffee"></i>最终解释权属于浙江大学软件学院2015级云计算风行小组</p>
	        </footer>
	        <!-- End: Footer -->        
	    </div>
	    <!-- End: Main Content -->
	</div>
	
	

	
	<div id= "after">
	<div class="page-container">
		<div class="main_box">
			<div class="login_box">
				<div class="login_logo">
					<font size="6"><em><strong>openstack平台流量监控系统</strong></em></font>
				</div>
				<br/>
				<div class="login_form">
					<form action="index.html" id="login_form" method="post">
						<div class="form-group">
							<label for="j_username" class="t">用户名：</label> 
							<input id="username" value="" name="username" type="text" class="form-control x319 in" 
							autocomplete="off">
						</div>
						<div class="form-group">
							<label for="j_password" class="t">密　码：</label> 
							<input id="password" value="" name="password" type="password" 
							class="password form-control x319 in">
						</div>
					<br/><br/><br/>
						<div class="form-group space">
							<label class="t"></label>　　　
							<button type="button"  id="submit_button" 
							class="btn btn-primary btn-lg" >&nbsp;登&nbsp;录&nbsp </button>
							<input type="reset" value="&nbsp;重&nbsp;置&nbsp;" class="btn btn-default btn-lg">
						</div>
					</form>
				</div>
			</div>
			<div class="bottom">Copyright &copy; 2014 - 2015 最终解释权属于浙江大学软件学院2015级云计算风行小组</div>
		</div>
	</div>
	</div>

	
	

	
	
</body>
</html>
