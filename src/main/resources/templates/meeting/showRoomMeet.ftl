<#assign ctx=request.contextPath><!DOCTYPE html>
<html>
<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<title>会议室占用情况</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="stylesheet" type="text/css"
	href="${ctx}/css/home/bootstrap.min.css" />
<link rel="stylesheet" href="${ctx}/css/bootstrap/bootstrap-theme.css" />
<script type="text/javascript" src="${ctx}/js/home/jquery-1.11.0.min.js"></script>
</head>
<body>
	<table class="table">
		<tr class="info">
			<td>会议室名称：<font color=blue>${room.meetRoomName!''}</font></td>
		</tr>
		<tr class="success">
			<td>视频会议：${room.resOne!''} &nbsp;&nbsp;
			<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />：${room.meetRoomNum!''}
			&nbsp;&nbsp;<img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" />：<font color=orange><#if room.isRoomPro==1>有<#else>无</#if></font>
			</td>
		</tr>
	</table>
	<button onclick="location.href='${ctx}/test/index6'"
						class="btn btn-warning">预定会议</button>
	<button onclick="location.href='${ctx}/test/index5'"
						class="btn ">返回</button>
	<br><br>
	<form action="${ctx}/meeting/showRoomInfo" method="post">
		<input type="hidden" name="roomId" value="${room.meetRoomId!''}" /> <b>日期选择：</b><input
			id="staTime" style="width: 220px; height: 40px" type="date"
			name="staTime" id="staTime" />
		<button type="submit" class="btn btn-info">查询</button>
	</form>
	<br>
	<span style="align:center;font-size:20px;color:#7D26CD;">${errorInfo!''}</span>
	<table style="text-align: center;" class="table table-bordered">
		<tr style="height: 40px; background-color: #EEEEE0;">
			<th style="text-align: center;">序号</th>
			<th style="text-align: center;">会议主题</th>
			<th style="text-align: center;">主持人</th>
			<th style="text-align: center;">时间段</th>
		</tr>
		<#if meetList??>
		<#list meetList as meet>
		<tr>
			<td>${meet_index+1!''}</td>
			<td>${meet.meetTheme!''}</td>
			<td>${meet.lauEmpId!''}</td>
			<td>${meet.staTime?string('yyyy-MM-dd HH:mm:ss')} <br>~<br>
				${meet.endTime?string('yyyy-MM-dd HH:mm:ss')}
			</td>
		</tr>
		</#list>
		<#else>
		</#if>
	</table>
</body>
</html>