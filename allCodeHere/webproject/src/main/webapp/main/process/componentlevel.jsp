-<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OpenStack-checking</title>
    
    
    
    
    
    <!-- Favicon -->
    <link rel="shortcut icon" href="../static/img/favicon.ico" />
    
    <!-- CSS -->
    <link href="../../static/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../../static/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../../static/css/style.css" rel="stylesheet" />
    


</head>

<body>

    <!-- Start: Preloader -->
    <div id="preloader">
        <div id="loader"></div>
    </div>
    <!-- End: Preloader -->

    <!-- Start: Main Content -->
    <div class="main-container">
        

        
        
        <div id="graph">
			<Iframe src="treeAndGraph/treeAndGraph-2.jsp" id="test" width="80%" height="80%" scrolling="no" frameborder="10" style="display:block;margin:0 auto;"></iframe>
		</div>
		
		<!-- Start: Content -->
        <section class="content-section">
            <div class="container">
			
				
			
				
	
	
				
				
			
				
				
				
				
				
			
				
				
				
				<div class="row">
					<div class="col-md-12">					
						<h2 class="page-header"><span>Resource Use</span></h2>
					</div>
					<div class="lt-knobs">
						<div class="col-md-4">
							<div class="centeredcontainer">
								<p class="lead text-muted">实例数量</p>
								<input type="text" class="dial" data-linecap="round" value="50" data-width="180" data-fgColor="#72D9F7"  data-thickness=".15">
							</div>
						</div>
						<div class="col-md-4">
							<div class="centeredcontainer">
								<p class="lead text-muted">CUP使用情况</p>
								<input type="text" class="dial" data-linecap="round" value="75" data-width="180" data-fgColor="#F9BD06" data-thickness=".15">
							</div>
						</div>
						<div class="col-md-4">
							<div class="centeredcontainer">
								<p class="lead text-muted">内存使用情况</p>
								<input type="text" class="dial" data-linecap="round" value="15" data-width="180" data-fgColor="#F53B36" data-thickness=".15">
							</div>
						</div>
						<div class="col-md-4">
							<div class="centeredcontainer">
								<p class="lead text-muted">流量情况</p>
								<input type="text" class="dial" value="10" data-angleOffset="-125" data-angleArc="250" data-width="180" data-fgColor="#4EA8F5" data-thickness=".15">
							</div>
						</div>
						<div class="col-md-4">
							<div class="centeredcontainer">
								<p class="lead text-muted">接收包数量</p>
								<input type="text" class="dial" value="5" data-width="180" data-fgColor="#B5B4B4" data-displayPrevious="true" data-thickness=".15">
							</div>
						</div>
						<div class="col-md-4">
							<div class="centeredcontainer">
								<p class="lead text-muted">发送包数量</p>
								<input type="text" class="dial" value="2015" data-width="180" data-fgColor="#15F574" data-step="1000" data-min="-15000" data-max="15000" data-thickness=".15">
							</div>
						</div>
					</div>					
				</div>
				
				<div class="row">
					<div class="col-md-12">					
						
					</div>
					<div class="col-md-6">
						<div class="lt-gallery">
							
							
						</div>
					</div>
					<div class="col-md-6">
						<div class="lt-gallery">
							<div class="col-md-12">
								
							</div>
						</div>
					</div>	
					<div class="col-md-12">
						<div class="lt-gallery">
							
                                </div>
                            </div>
                            <div class="col-md-4">
                               
                            </div>
							<div class="col-md-4">
                                
                            </div>
						</div>
					</div>
				</div>
            </div>
        </section>
        <!-- End: Content -->
        
        <!-- Start: Footer-->
        <footer class="footer">
            <p>Lite <i class="fa fa-coffee"></i>最终解释权属于浙江大学软件学院2015级云计算风行小组</a></p>
        </footer>
        <!-- End: Footer -->
        
    </div>
    <!-- End: Main Content -->
    
    <!-- Javascript Files -->
    <script type="text/javascript" src="../../static/js/jquery-1.10.2.js"></script>
    <script type="text/javascript" src="../../static/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../../static/js/jquery.pagination.js"></script>
	<script type="text/javascript" src="../../static/js/jquery.knob.min.js"></script>
    <script type="text/javascript" src="../../static/js/main.js"></script>
</body>
</html>
