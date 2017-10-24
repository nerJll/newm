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
<script>
function tuis(){
	alert("信息发送，账号："+$("#account").val()+"密码："+$("#password").val())
}
function add(){
	$("#tb").append("<tr>"+"<td><b>账号密码</b></td>"+
			"<td>账号：<input type='text' id='account'>"+
			"密码：<input type='text' id='password'>"+
			"<input type='button' value='选择推送人' onclick='tuis()'>"+
			"<input type='button' value='删除' style='background-color:red;border-radius:5px' onclick='det(this)'>"+
			"</td></tr>")
}
function det(t){
	$(t).parent().parent().remove();
}
</script>
</head>
<body>
	<div class="panel panel-default">
		<div style="text-align: center;" class="panel-heading">会议审核</div>
		<div class="panel-body">
			<form role="form">
				<table id="tb" class="table table-bordered table-striped">
					<tr>
						<td><b>申请人工号</b></td>
						<td>${meetInfo.applyEmpId}</td>
					</tr>
					<tr>
						<td><b>发起人工号</b></td>
						<td>${meetInfo.lauEmpId}</td>
					</tr>
					<tr>
						<td><b>会议主题</b></td>
						<td>${meetInfo.meetTheme}</td>
					</tr>
					<tr>
						<td><b>参会人数</b></td>
						<td>${meetInfo.meetEmpNum}</td>
					</tr>
					<tr>
						<td><b>时间段</b></td>
						<td>${meetInfo.staTime?string('yyyy年MM月dd日 HH:mm')} --
							${meetInfo.endTime?string('HH:mm')}</td>
					</tr>
					<tr>
						<td><b>是否需要投影 </b></td>
						<td><#if meetInfo.isNeedPro==1>需要<#else>不需要</#if></td>
					</tr>
					<tr>
						<td><b>会议室名称</b></td>
						<td>${meetInfo.meetRoomName}</td>
					</tr>
					<tr>
						<td><b>会议类型</b></td>
						<td>${meetInfo.meetType}</td>
					</tr>
					<tr>
						<td><b>参会人员姓名</b></td>
						<td>${meetInfo.meetEmpName}</td>
					</tr>
					<tr>
						<td><b>申请时间</b></td>
						<td>${meetInfo.meetApplyTime?string('yyyy年MM月dd日  HH:mm:ss')}</td>
					</tr>
					<tr>
						<td><b>会议状态</b></td>
						<td>${meetInfo.resOne}</td>
					</tr>
					<#if meetInfo.meetType=='视频会议'>
						<tr>
							<td><b>账号密码</b></td>
							<td>
								账号：<input type="text" id="account">
								密码：<input type="text" id="password">
								<input type="button" value="选择推送人" onclick="tuis()">
								<input type='button' value='继续添加' style='background-color:yellow;border-radius:5px' onclick='add()'>
							</td>
						</tr>
					</#if>
				</table>
					
			</form>
			<div class="row">
			<div class="col-lg-5"></div>
				<div class="col-lg-6">
					<a href="${ctx}/admin/chagStatu1/${meetInfo.meetId}"><button  onclick="return confirm('您确定同意吗？');"  class="btn btn-success">同意</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a href="${ctx}/admin/chagStatu2/${meetInfo.meetId}"><button  onclick="return confirm('您确定不同意吗？');" class="btn btn-danger">不同意</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a href="${ctx}/admin/auditMeeting"><button  class="btn btn-info">取消</button></a>&nbsp;&nbsp;&nbsp;&nbsp;		
				</div>
			</div>
	</div>

</body>
</html>