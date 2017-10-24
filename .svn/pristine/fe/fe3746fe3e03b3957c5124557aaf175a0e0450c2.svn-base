<#assign ctx=request.contextPath />
<!DOCTYPE html>
<html>

<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<title>会议室管理</title>
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
<link rel="stylesheet" href="${ctx}/css/meetingroom/common.css" />
<script type="text/javascript"
	src="${ctx}/js/jquery/jquery-3.2.1.min.js"></script>
<script type="text/javascript">
			window.onload = function(){
				var var1 = ${room.isRoomPro};
				var value = document.getElementById("myv").getAttribute("value");
				var options = document.getElementById("my").getElementsByTagName("option");
				for(var i = 0;i<options.length;i++){
					if(value == options[i].getAttribute("value")){
						options[i].setAttribute("selected","selected");
					}
				}
</script>
</head>

<body>
	<div class="panel panel-default">
		<div style="text-align: center;" class="panel-heading">编辑会议室</div>
		<div class="panel-body">
			<div class="container-fluid">
				<form class="form-horizontal" role="form"
					action="${ctx}/meetingRoom/update" method="post">
					<input type="hidden" name="meetRoomId" value="${room.meetRoomId}" />
					<div class="form-group">
						<label for="roomname" class="col-sm-2 control-label">会议室名字</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" name="meetRoomName"
								placeholder="请输入会议室名字" value="${room.meetRoomName}">
						</div>
					</div>
					<div class="form-group">
						<label for="roomnumber" class="col-sm-2 control-label">会议室人数</label>
						<div class="col-sm-10">
							<input type="number" class="form-control" name="meetRoomNum"
								placeholder="请输会议室人数" value="${room.meetRoomNum}">
						</div>
					</div>
					<div class="form-group">
						<label for="roomstate" class="col-sm-2 control-label">会议室状态</label>
						<div class="col-sm-10">
							<input type="hidden" name="" id="myv"
								value="${room.meetRoomState}" /> <select
								class="form-control input-sm" id="my" name="meetRoomState">
								<option value="0">空闲</option>
								<option value="1">被占用</option>
								<option value="2">被预订</option>
							</select>
						</div>

					</div>
					<div class="form-group">
						<label for="ispro" class="col-sm-2 control-label">是否有投影</label>
						<div class="switch col-sm-10" data-on="info" data-off="success">
							<#if room.isRoomPro==1> <input type="checkbox"
								name="isRoomPro" value="1" checked /> <#else> <input
								type="checkbox" name="isRoomPro" value="1" /></#if>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<button type="submit" class="btn btn-default">确定</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>

</html>