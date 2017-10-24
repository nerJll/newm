<%@page pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />      
  		<title>错误页面</title>
  		<link type="text/css" rel="stylesheet" media="all" href="styles/global.css"></link>
  		<link type="text/css" rel="stylesheet" media="all" href="styles/global_color.css"></link>
  	<script language="javascript"  type="text/javascript">
  		var timer;
  		//启动跳转的定时器
  		function startTimes(){
			timer = window.setInterval(showSecondes,1000);
  		}
  		
  		var i = 5;
  		function showSecondes(){
  			if(i > 0){
  				i--;
  				document.getElementById("secondes").innerHTML = i;
  			}else {
  				window.clearInterval(timer);
  				history.back();
  			}
  		}
  		
  	function resetTimer(){
  		if(timer != null && timer != undefined ){
  			window.clearInterval(timer);
  			histroy.back();
  		}
  	}
  	
  	</script>
    </head>
        
		<body class="error_page" onload="startTimes();">
		
		</body>
</html>