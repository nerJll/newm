<#assign ctx=request.contextPath />
<!DOCTYPE html>
<html>

<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<title>会议详情</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<!--[if lt IE 9]>  	
    <script src="${ctx}/js/html5shiv.min.js"></script>
    <script src="${ctx}/js/respond.min.js"></script>
  	<![endif]-->
<link rel="stylesheet" href="${ctx}/css/bootstrap/bootstrap.min.css" />
<link rel="stylesheet" href="${ctx}/css/bootstrap/bootstrap-theme.css" />
<link rel="stylesheet" href="${ctx}/css/meeting/common.css" />
<script type="text/javascript"
	src="${ctx}/js/jquery/jquery-3.2.1.min.js"></script>
<script type="text/javascript"
	src="${ctx}/js/bootstrap/bootstrap.min.js"></script>

</head>
<body>
	<div class="panel panel-default">
		<div style="text-align: center;" class="panel-heading">会议审核</div>
		<div class="panel-body">
		
				<table class="table table-bordered table-striped">
					<tr>
						<td><b>申请人工号</b></td>
						<td name="applyEmpId">${meetInfo.applyEmpId}</td>
					</tr>
					<tr>
						<td><b>发起人工号</b></td>
						<td name="lauEmpId">${meetInfo.lauEmpId}</td>
					</tr>
					<tr>
						<td><b>会议主题</b></td>
						<td name="meetTheme">${meetInfo.meetTheme}</td>
					</tr>
					<tr>
						<td><b>参会人数</b></td>
						<td name="meetEmpNum">${meetInfo.meetEmpNum}</td>
					</tr>
					<tr>
						<td><b>时间段</b></td>
						<td>${meetInfo.staTime?string('yyyy年MM月dd日 HH:mm')} --
							${meetInfo.endTime?string('HH:mm')}</td>
					</tr>
					<tr>
						<td><b>是否需要投影 </b></td>
						<td name="isNeedPro"><#if meetInfo.isNeedPro==1>需要<#else>不需要</#if></td>
					</tr>
					<tr>
						<td><b>会议室名称</b></td>
						<td name="meetRoomName">${meetInfo.meetRoomName}</td>
					</tr>
					<tr>
						<td><b>会议类型</b></td>
						<td name="meetType">${meetInfo.meetType}</td>
					</tr>
					<tr>
						<td><b>参会人员姓名</b></td>
						<td name="meetEmpName">${meetInfo.meetEmpName}</td>
					</tr>
					<tr>
						<td><b>申请时间</b></td>
						<td name="meetApplyTime">${meetInfo.meetApplyTime?string('yyyy年MM月dd日  HH:mm:ss')}</td>
					</tr>
					<tr>
						<td><b>会议状态</b></td>
						<td name="resOne">${meetInfo.resOne}</td>
					</tr>
					
				</table>

			
		</div>
	</div>

</body>
</html>