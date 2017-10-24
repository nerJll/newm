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
<script language="javascript" type="text/javascript"
	src="${ctx}/My97DatePicker/WdatePicker.js"></script>
<script>
$(function(){
	$("#applyEmpId").val(tih('${meet.applyEmpId}'))
	$("#lauEmpId").val(tih('${meet.lauEmpId}'))
})
function check(){
	if ($("#staTime").val() == "" || $("#endTime").val() == "") {
		alert("会议时间不能为空！")
		event.preventDefault()
	}	
}
function tih(hh){
	var j = hh.replace(/,/g,"")
	return j
}
</script>
</head>
<body>
	<div class="panel panel-default">
		<div style="text-align: center;" class="panel-heading">会议详情</div>
		<div class="panel-body">
			<form action="${ctx}/meeting/addMeet" method="post" onsubmit="return check();">
				<input type="hidden" id="applyEmpId" name="applyEmpId"/>
				<input type="hidden" id="lauEmpId" name="lauEmpId"/>
				<input type="hidden" name="meetEmpNum" value="${meet.meetEmpNum}"/>
				<input type="hidden" name="isNeedPro" value="${meet.isNeedPro}"/>
				<input type="hidden" name="meetRoomName" value="${meet.meetRoomName}"/>
				<input type="hidden" name="meetType" value="${meet.meetType}"/>
				<input type="hidden" name="meetEmpName" value="${meet.meetEmpName}"/>
				<input type="hidden" name="meetRoomId" value="${meet.meetRoomId}"/>
				<table class="table table-bordered table-striped">
					<tr>
						<td><b>申请人工号</b></td>
						<td>${meet.applyEmpId!''}</td>
					</tr>
					<tr>
						<td><b>发起人工号</b></td>
						<td>${meet.lauEmpId!''}</td>
					</tr>
					<tr>
						<td><b>会议主题</b></td>
						<td><input type="text" class="form-control" name="meetTheme"
							required="required" id="meetTheme" placeholder="会议主题"></td>
					</tr>
					<tr>
						<td><b>参会人数</b></td>
						<td>${meet.meetEmpNum!''}</td>
					</tr>
					<tr>
						<td><b>时间段</b></td>
						<td><input id="staTime" name="staTime"
							class="Wdate form-control" type="text" readonly="readonly"
							style="height: 30px;"
							onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd HH:mm:ss'})">
							&nbsp;至&nbsp; <input id="endTime" name="endTime"
							class="Wdate form-control" type="text" readonly="readonly"
							style="height: 30px;"
							onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd HH:mm:ss'})"></td>
					</tr>
					<tr>
						<td><b>是否需要投影 </b></td>
						<td><#if meet.isNeedPro==1>需要<#else>不需要</#if></td>
					</tr>
					<tr>
						<td><b>会议室名称</b></td>
						<td>${meet.meetRoomName!''}</td>
					</tr>
					<tr>
						<td><b>会议类型</b></td>
						<td>${meet.meetType!''}</td>
					</tr>
					<tr>
						<td><b>参会人员姓名</b></td>
						<td>${meet.meetEmpName!''}</td>
					</tr>
					<tr>
						<td><b>提交</b></td>
						<td><input type="submit" style="width: 80px; height: 35px"
							 value="提交" /></td>
					</tr>
				</table>
			</form>
		</div>
	</div>

</body>
</html>