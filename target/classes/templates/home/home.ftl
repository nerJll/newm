<#assign ctx=request.contextPath> <!doctype html>
<html lang="en" class="no-js">
<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<title>爱康&爱旭会议系统</title>
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<link rel="stylesheet" href="${ctx}/css/home/bootstrap.min.css">
<link rel="stylesheet" href="${ctx}/css/home/animate.css">
<link rel="stylesheet" href="${ctx}/css/home/font-awesome.min.css">
<link rel="stylesheet" href="${ctx}/css/home/jquery.easy-pie-chart.css">
<link rel="stylesheet" href="${ctx}/css/home/styles.css"
	title="mainStyle">
<link rel="stylesheet" type="text/css"
	href="${ctx}/rs-plugin/css/settings.css" media="screen" />
<script src="${ctx}/js/home/modernizr.custom.32033.js"></script>
<script src="${ctx}/js/home/jquery.min.js"></script>
<script src="${ctx}/js/home/bootstrap.min.js"></script>
<script src="${ctx}/js/home/stellar.js"></script>
<script src="${ctx}/js/home/isotope.pkgd.min.js"></script>
<script src="${ctx}/js/home/jquery.easypiechart.min.js"></script>
<!-- jQuery REVOLUTION Slider  -->
<script type="text/javascript"
	src="${ctx}/rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
<script type="text/javascript"
	src="${ctx}/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
<script src="${ctx}/js/home/waypoints.min.js"></script>
<script src="${ctx}/js/home/script.js"></script>
<script>
	$(document).ready(function() {
		
		window.frames['myFrame'].location.href = '${ctx}/test/index3';
		
		appMaster.preLoader();
		appMaster.smoothScroll();
		appMaster.animateScript();
		appMaster.navSpy();
		appMaster.revSlider();
		appMaster.stellar();
		appMaster.skillsChart();

		appMaster.isoTop();
		appMaster.canvasHack();
	});
</script>
</head>

<body>
	<div class="navbar navbar-static-top" id="nav" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<span
					style="font-size: 23px; color: white; font-family: 'Times New Roman', Times, serif; font-weight: bold;"
					class="navbar-brand"> 爱康&爱旭·会议管理系统 </span>
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#bs-example-navbar-collapse-1">
					<span
						style="font-size: 20px; font-family: 'Times New Roman', Times, serif; font-weight: bold;">菜单</span>
				</button>
			</div>
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li class="active"><a target="myFrame"
						href="${ctx}/test/index3">首页</a></li>
					<li><a target="myFrame" href="${ctx}/test/index4">预定会议</a></li>
					<li><a target="myFrame"
						href="${ctx}/emp/listmeeting?empid=1016002">我的申请</a></li>
					<li><a href="${ctx}/test/index5">手机版</a></li>
				</ul>
			</div>
		</div>
		<iframe id="myFrame" name="myFrame"
			style="width: 100%; height: 1150px; border: 0; background-color: rgba(73, 74, 95);"></iframe>
	</div>
</body>

</html>