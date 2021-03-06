<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Qunee + EasyUI</title>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js?v=1.3"></script>
    <script type="text/javascript" src="js/jquery.easyui.min.js"></script>
    <script src="js/qunee-min.js"></script>
    <!--<script src="../../qunee.js" ></script>-->
    <script src="js/common.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/easyui.css">
    <link rel="stylesheet" type="text/css" href="css/icon.css">
    <style>
        #graph_panel {
            height: 100%;
        }
        .tabs-panels .panel-body{
            border-left: solid 1px #DDD;
            border-right: solid 1px #DDD;
        }
        .tree-node {
            height: 20px;
        }
        .q-panel {
            padding-top: 40px;
            position: relative;
        }
        .q-toolbar {
            padding: 5px;
        }
        .q-panel .q-toolbar {
            position: absolute;
            top: 0px;
            height: 40px;
            width: 100%;
            z-index: 1;
        }
        .q-panel .q-content {
            height: 100%;
            background-color: #FFF;
            overflow: hidden;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            position: relative;
        }
        .q-canvas {
            height: 100%;
        }
        #canvas_panel {
            position: relative;
            overflow: hidden;
        }
        #canvas {
            width: 100%;
            background-color: #FFF;
            outline: none;
            overflow: hidden;
        }
        #toolbar {
            background-color: #F8F8F8;
            border-bottom: solid 1px #DDD;
            padding: 5px;
        }
        #toolbar .btn, #toolbar .btn-group {
            margin-right: 5px;
        }
        #toolbar .btn-group .btn {
            margin-right: 0px;
        }
        #toolbox {
            position: absolute;
            top: 0px;
            background-color: #F8F8F8;
            padding: 5px;
        }
        #toolbox > img, #toolbox > button {
            display: block;
            padding: 8px 7px 0 7px;
            border-radius: 0px;
        }
        .layout-split-west {
            border-right: 5px solid rgba(255, 255, 255, 0);
        }
        #center_panel {
            border: none;
        }
        .panel {
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        #footer {
            text-align: center;
            padding: 8px;
            border-top: solid 1px #DDD;
            background-color: #EEE;
        }
        .node_icon{
            background: url('images/node_icon.png') no-repeat;
            background-size: 18px;
            background-position:center;
        }
        .edge_icon{
            background: url('images/edge_icon.png') no-repeat;
            background-size: 18px;
            background-position:center;
        }
    </style>
    <script type="text/javascript">	
    $(function(){
    	var query = location.search.substring(1);
    	var values= query.split("%27");
    	var computerName = values[1];
    	var targetForm = document.forms[ "form1" ];
    	
    	
    	
    	
    	$.ajax({
            type: "POST",
            url: "<%=path%>/main/process/Action?computerName="+computerName,
            data: $("#form1").serialize(),
            dataType: "json",
            success: function(data){
           	 if(data[0].message=="success"){
           		 
           	 }
           	 show_err_msg(data[0].message);		            
            },
            error: function() {
       	    
            }
        });
    })
    </script>
    <script src="framework-2.js"></script>
</head>
<body class="easyui-layout">
<form name="form1" method="post" action="" enctype="multipart/form-data">
<div data-options="region:'west',split:true" border="false" style="width:0px;padding-left: 10px;">
    <h3 style="border-bottom:1px solid #ddd;padding:0 0 3px 5px;margin-top: 0px;">拓扑视图</h3>
    <ul id="tree" class="easyui-tree"></ul>
</div>
<div data-options="region:'north'" border="false" style="height:60px;"><h3 style="text-align: center;">主机内组件流量拓扑图</h3></div>
<!--<div data-options="region:'east',split:true,collapsed:true,title:'East'" style="width:100px;padding:10px;">east region</div>-->
<div id="center_panel" data-options="region:'center'" style="padding-right: 10px;">
    <div class="easyui-tabs" data-options="fit:true,border:false,plain:true">
        <div title="拓扑视图" id="graph_panel" class="q-panel">
           
            <div id="canvas_panel" class="q-content">
                <div id="canvas" class="q-canvas"></div>
                <div id="toolbox"></div>
            </div>
        </div>
        
    </div>
</div>
<div id="footer" data-options="region:'south',border:false">2016 </div>
</body>
</html>