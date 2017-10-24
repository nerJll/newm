<#assign ctx=request.contextPath />
<!DOCTYPE html>
<html>

<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<title>增加会议室</title>
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
<script type="text/javascript" src="${ctx}/js/meetingroom/common.js"></script>
</head>
<body>
	<div class="panel panel-default">
		<div style="text-align: center;" class="panel-heading">增加会议室</div>
		<div class="panel-body">
			<form class="form-horizontal" role="form"
				action="${ctx}/meetingRoom/addRoom" method="post">
				<div class="form-group">
					<label for="firstname" class="col-sm-2 control-label">会议室名称</label>
					<div class="col-sm-10">
						<input type="text" required="required" class="form-control"
							name="meetRoomName" placeholder="会议室名称">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-sm-2 control-label">可容纳人数</label>
					<div class="col-sm-10">
						<input type="number" required="required" class="form-control"
							name="meetRoomNum" placeholder="可容纳人数">
					</div>
				</div>
				<div class="form-group">
					<label for="roomstate" class="col-sm-2 control-label">投影仪</label>
					<div class="col-sm-10">
						<select class="form-control input-sm" name="isRoomPro">
							<option value="0">没有</option>
							<option value="1">有</option>
						</select>
					</div>
				</div>
				<div class="form-group" style="text-align: center">
					<div class="col-sm-offset-2 col-sm-10">
						<button type="submit" class="btn btn-default">确定</button>
						<button type="reset" class="btn btn-default">重置</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</body>
</html>