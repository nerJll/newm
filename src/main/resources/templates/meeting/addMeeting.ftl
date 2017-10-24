<#assign ctx=request.contextPath />
<!DOCTYPE html>
<html>

<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<title>增加会议</title>
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
<script type="text/javascript" src="${ctx}/js/meeting/common.js"></script>
<script language="javascript" type="text/javascript"
	src="${ctx}/My97DatePicker/WdatePicker.js"></script>
</head>
<body>
	<div class="panel panel-default">
		<div style="text-align: center;" class="panel-heading">
			<font size=5px><b>预定会议</b></font>
		</div>
		<div class="panel-body">

			<form class="form-horizontal" role="form" name="testform"
				action="${ctx}/meeting/addMeet" method="post"
				onsubmit="return checkSubmit();">

				<div class="form-group">
					<label for="firstname" class="col-sm-2 control-label">申请人工号</label>
					<div class="col-sm-10">
						<input type="number" class="form-control" name="applyEmpId"
							required="required" id="applyEmpId" placeholder="申请人工号">
					</div>
				</div>
				<div class="form-group">
					<label for="firstname" class="col-sm-2 control-label">发起人工号</label>
					<div class="col-sm-10">
						<input type="number" class="form-control" name="lauEmpId"
							required="required" id="lauEmpId" placeholder="发起人工号">
					</div>
				</div>
				<div class="form-group">
					<label for="firstname" class="col-sm-2 control-label">会议主题</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" name="meetTheme"
							required="required" id="meetTheme" placeholder="会议主题">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-sm-2 control-label">参会人数</label>
					<div class="col-sm-10">
						<input type="number" class="form-control" name="meetEmpNum"
							required="required" id="meetEmpNum" placeholder="参会人数">
					</div>
				</div>
				<div class="row">
					<label for="lastname" class="col-sm-2 control-label">开始时间</label>
					<div class="col-lg-3">
						<input id="staTime" name="staTime" class="Wdate form-control"
							type="text" readonly="readonly" style="height: 30px;"
							onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd HH:mm:ss'})">
					</div>
					<label for="lastname" class="col-sm-2 control-label">结束时间</label>
					<div class="col-lg-4">
						<input id="endTime" name="endTime" class="Wdate form-control"
							type="text" readonly="readonly" style="height: 30px;"
							onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd HH:mm:ss'})">
					</div>
				</div>
				<br>
				<div class="form-group">
					<label for="roomstate" class="col-sm-2 control-label">投影仪</label>
					<div class="col-sm-10">
						<select class="form-control input-sm" name="isNeedPro" id="pro">
							<option value="0">不需要</option>
							<option value="1">需要</option>
						</select>
					</div>

				</div>

				<div class="form-group">

					<div class="row">
						<label for="roomstate" class="col-sm-2 control-label">会议室</label>
						<div class="col-sm-8">
							<select class="form-control input-sm" name="meetRoomId"
								id="meetRoomId">
							</select>
						</div>
						<div class="col-sm-2">
							<button id="choseRoom" type="button" class="btn btn-success">查询会议室</button>
						</div>
					</div>
				</div>

				<div class="form-group">
					<label for="lastname" class="col-sm-2 control-label">会议类型</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<label class="radio-inline"> <input type="radio"
						name="meetType" id="meetType" value="月会" checked> 月会
					</label> <label class="radio-inline"> <input type="radio"
						name="meetType" id="meetType" value="例会"> 例会
					</label> <label class="radio-inline"> <input type="radio"
						name="meetType" id="meetType" value="周会"> 周会
					</label>
				</div>
				<div class="form-group">
					<label for="firstname" class="col-sm-2 control-label">参会人员姓名</label>
					<div class="col-sm-10">
						<textarea class="form-control" name="meetEmpName" rows="3"></textarea>
					</div>
				</div>
				<div class="form-group" style="text-align: center">
					<div class="col-sm-offset-2 col-sm-10">
						<button type="submit" class="btn btn-default">确定</button>
						<button type="reset" class="btn btn-default">取消</button>
					</div>
				</div>
			</form>

		</div>
	</div>
</body>
</html>