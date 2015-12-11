-<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OpenStack-Monitoring</title>
    
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
    
    
    
    
    
    	<!-- Javascript -->
	<script src="../../static/js/login/supersized.3.2.7.min.js"></script>
	<script src="../../static/js/login/supersized-init.js"></script>
	<script src="../../static/js/login/scripts.js"></script>
	
	<!-- CSS -->
	<link rel="stylesheet" href="../../static/css/login/supersized.css">
	<link rel="stylesheet" href="../../static/css/login/login.css">
	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
		<script src="js/html5.js"></script>
	<![endif]-->
	<script type="text/javascript" src="../../static/js/login/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="../../static/js/login/jquery.form.js"></script>
	<script type="text/javascript" src="../../static/js/login/tooltips.js"></script>
	<script type="text/javascript" src="../../static/js/login/login.js"></script>
	
	
	
	
	
	
	<script type="text/javascript">
	$(function(){
		$("#after").hide();//
		//$('.home-section').delay(3000).fadeTo('slow',.25);
		$('#before').delay(3000).fadeTo('slow',.25);
		//$('#before').delay(3000).fadeOut(4000);
		$("#after").delay(3000).fadeIn(2000);
	});  
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
							<h1>Flow Monitoring System on OpenStack</h1>	
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
					<img src="../../static/img/login/logo.png" >
				</div>
			
				<div class="login_form">
					<form action="index.html" id="login_form" method="post">
						<div class="form-group">
							<label for="j_username" class="t">邮　箱：</label> 
							<input id="email" value="" name="email" type="text" class="form-control x319 in" 
							autocomplete="off">
						</div>
						<div class="form-group">
							<label for="j_password" class="t">密　码：</label> 
							<input id="password" value="" name="password" type="password" 
							class="password form-control x319 in">
						</div>
						<div class="form-group">
							<label for="j_captcha" class="t">验证码：</label>
							 <input id="j_captcha" name="j_captcha" type="text" class="form-control x164 in">
							<img id="captcha_img" alt="点击更换" title="点击更换" src="../../static/img/login/captcha.jpeg" class="m">
						</div>
						<div class="form-group">
							<label class="t"></label>
							<label for="j_remember" class="m">
							<input id="j_remember" type="checkbox" value="true">&nbsp;记住登陆账号!</label>
						</div>
						<div class="form-group space">
							<label class="t"></label>　　　
							<button type="button"  id="submit_btn" 
							class="btn btn-primary btn-lg">&nbsp;登&nbsp;录&nbsp </button>
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
