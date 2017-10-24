<#assign ctx=request.contextPath />
<!DOCTYPE html>
<html>
<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<title>广东爱康太阳能科技有限公司-会议管理</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<!--[if lt IE 9]>  	
    <script src="${ctx}/js/html5shiv.min.js"></script>
    <script src="${ctx}/js/respond.min.js"></script>
  	<![endif]-->

<link type="text/css" rel="stylesheet" media="all" href="${ctx}/css/error/global_color.css" />
<link type="text/css" rel="stylesheet" media="all" href="${ctx}/css/error/global.css" />

<head>
  	<script>
  	    var timer;
  	    //启动跳转定时器
  		function startTimes(){
  			timer = window.setInterval(showSecondes,1000);
  		}
  	    
  	    var i = 5;
  	    function showSecondes(){
  	    	if(i>0){
  	    		i--;
  	    		document.getElementById("secondes").innerHTML = i;
  	    	}else {
  	    		window.clearInterval(timer);
  	    		//history.back();
  	    		location.href="${ctx}/test/home";
  	    	}
  	    }
  	    
  	    //取消跳转
  	    function resetTimer(){
  	    	if(timer !=undefined|| timer !=null){
  	    		window.clearInterval(timer);
					location.href="${ctx}/test/home";
  	    	}
  	    }
  	    
  	    var status = ${status};
  	    console.log(status);
  	</script>
</head>


  <body class="error_page" onload="startTimes();">
        <h1 id="error">
	        遇到错误，&nbsp;<span id="secondes">5</span>&nbsp;秒后将自动跳转，立即跳转请点击&nbsp;
            <a  href="javascript:resetTimer();">返回</a>
        </h1>
   </body>  
        

</html>