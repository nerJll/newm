<#assign ctx=request.contextPath><!DOCTYPE html>
<html>
<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>爱康&爱旭·会议管理系统</title>
<script src="${ctx}/js/home/jquery.min.js"></script>
<script type="text/javascript" src="${ctx}/js/home/jquery-1.11.0.min.js"></script>
<script>
	function browserRedirect() {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc
				|| bIsAndroid || bIsCE || bIsWM)) {
			window.location.href="${ctx}/test/home";
		} else {
			window.location.href = "${ctx}/test/index5";
		}
	}

	$(document).ready(function() {
		browserRedirect();

		/* if (confirm("是否选择进入手机版页面？")) {
			location.href = "${ctx}/test/index5";
		} else {
			window.frames['myFrame'].location.href = '${ctx}/test/index3';
		} */
	})
</script>
</head>
<body>
</body>
</html>