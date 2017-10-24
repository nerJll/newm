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
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<!--[if lt IE 9]>  	
    <script src="${ctx}/js/html5shiv.min.js"></script>
    <script src="${ctx}/js/respond.min.js"></script>
  	<![endif]-->
		<link rel="stylesheet" href="${ctx}/css/bootstrap/bootstrap.min.css" />
		<link rel="stylesheet" href="${ctx}/css/bootstrap/bootstrap-theme.css" />
		<link rel="stylesheet" href="${ctx}/css/meeting/common.css" />
		<link rel="stylesheet" href="${ctx}/css/meeting/style-mobile.css" />
		<link rel="stylesheet" href="${ctx}/mobile-date/LCalendar.css" />
		<link rel="stylesheet" href="${ctx}/mobile-date/zepto.mtimer.css" />
		<script type="text/javascript" src="${ctx}/mobile-date/zepto.js"></script>
		<script type="text/javascript" src="${ctx}/mobile-date/zepto.mtimer.js"></script>
		<script type="text/javascript" src="${ctx}/js/jquery/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="${ctx}/js/bootstrap/bootstrap.min.js"></script>
		<script type="text/javascript" src="${ctx}/js/meeting/common-mobile.js"></script>
		<script language="javascript" type="text/javascript" src="${ctx}/time/jquery-clock-timepicker.min.js"></script>
		<link rel="stylesheet" type="text/css" href="${ctx}/css/home/dcalendar.picker.css" />
		<script type="text/javascript" src="${ctx}/js/home/dcalendar.picker.js"></script>
		<script type="text/javascript" src="${ctx}/mobile-date/LCalendar.min.js"></script>
		<style type="text/css">
			.time {
				display: inline-block;
				font-size: 26px;
				padding: 5px;
				text-align: center;
				width: 81px;
				margin-top: 5px;
			}
		</style>
		<script type="text/javascript">
			$(document).ready(function () {
				$(".xbb").append('<option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="01:30">01:30</option><option value="02:00">02:00</option><option value="02:30">02:30</option><option value="03:00">03:00</option>'
								+'<option value="03:30">03:30</option><option value="04:00">04:00</option><option value="04:30">04:30</option><option value="05:00">05:00</option><option value="05:30">05:30</option><option value="06:00">06:00</option><option value="06:30">06:30</option>'
								+'<option value="07:00">07:00</option><option value="07:30">07:30</option><option value="08:00">08:00</option><option value="08:30">08:30</option><option value="09:00">09:00</option><option value="09:30">09:30</option><option value="10:00">10:00</option>'
								+'<option value="10:30">10:30</option><option value="11:00">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option>'
								+'<option value="14:00">14:00</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option>'
								+'<option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option>'
								+'<option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option>'
				)
			})
		</script>
	</head>

	<body>
		<div class="demo">
			<div class="container">
				<div class="row">
					<div class="col-md-offset-2 col-md-8">
						<div class="tab" role="tabpanel">
							<!-- Nav tabs -->
							<ul class="nav nav-tabs" role="tablist">
								<li role="presentation" class="active">
									<a href="#Section1" aria-controls="home" role="tab" data-toggle="tab"><i class="fa fa-user"></i>预订普通会议</a>
								</li>
								<li role="presentation">
									<a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab"><i class="fa fa-envelope"></i>预订视频会议</a>
								</li>
							</ul>
							<!-- Tab panes -->
							<div class="tab-content tabs">
								<div role="tabpanel" class="tab-pane fade in active" id="Section1">
									<!------------------------------------------------meetingOne---------------------------------------------->
									<form class="form-horizontal" role="form" name="testform" action="${ctx}/meeting/addMeet" method="post" onsubmit="return checkSubmit();">

										<div class="form-group">
											<label for="firstname" class="col-sm-2 control-label">申请人工号</label>
											<div class="col-sm-10">
												<input type="number" class="form-control" name="applyEmpId" required="required" id="applyEmpId" placeholder="申请人工号">
											</div>
										</div>
										<div class="form-group">
											<label for="firstname" class="col-sm-2 control-label">发起人工号</label>
											<div class="col-sm-10">
												<input type="number" class="form-control" name="lauEmpId" required="required" id="lauEmpId" placeholder="发起人工号">
											</div>
										</div>
										<div class="form-group">
											<label for="firstname" class="col-sm-2 control-label">会议主题</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" name="meetTheme" required="required" id="meetTheme" placeholder="会议主题">
											</div>
										</div>
										<div class="form-group">
											<label for="lastname" class="col-sm-2 control-label">参会人数</label>
											<div class="col-sm-10">
												<input type="number" class="form-control" name="meetEmpNum" required="required" id="meetEmpNum" placeholder="参会人数">
											</div>
										</div>
										<div class="row">
											<label for="lastname" class="col-sm-2 control-label">日期</label>
											<div class="col-sm-4">
												<!--<input id="mydate1" class="Wdate form-control" type="text" readonly="readonly" style="height: 30px;" onClick="WdatePicker({el:this,dateFmt:'yyyy-MM-dd'})">-->
												<input class="form-control" type="text" id="mydate1" readonly=""/>
												<script type="text/javascript">
													var calendar = new LCalendar();
													calendar.init({
        												'trigger': '#mydate1',
        												'type': 'date'
    												});
												</script>
											</div>
											<label for="lastname" class="col-sm-1 control-label">Start</label>
											<div class="col-sm-2">
												<!--<input type="text" class="form-control" name="staTime" id="staTime" readonly="true">-->
												<select class="form-control xbb" name="staTime" id="staTime">
												</select>
											</div>
											<script type="text/javascript">
													/*var calendar = new LCalendar();
													calendar.init({
        												'trigger': '#staTime',
        												'type': 'time'
    												});*/
											</script>
											<label for="lastname" class="col-sm-1 control-label">End</label>
											<div class="col-sm-2">
												<!--<input type="text" class="form-control" name="endTime" id="endTime" readonly="true">-->
												<select class="form-control xbb" name="endTime" id="endTime"></select>
											</div>
											<script type="text/javascript">
												/*var calendar = new LCalendar();
												calendar.init({
        											'trigger': '#endTime',
        											'type': 'time'
    											});*/
											</script>
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
												<div class="col-sm-2">
													<select class="form-control" id="select1" name="resTwo">
														<option value="爱康">爱康</option>
														<option value="爱旭">爱旭</option>
													</select>
												</div>
												<div class="col-sm-8">
													<select class="form-control input-sm" name="meetRoomId" id="meetRoomId">
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
											<label for="firstname" class="col-sm-2 control-label">参与人员</label>
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
									<!------------------------------------------------meetingOne---------------------------------------------->
								</div>
								<div role="tabpanel" class="tab-pane fade" id="Section2">
									<!------------------------------------------------meetingTwo---------------------------------------------->
									<form class="form-horizontal" id="myform" role="form" name="testform1" action="${ctx}/meeting/addVideoMeeting" method="post" onsubmit="return checkSubmit1();">

										<div class="form-group">
											<label for="firstname" class="col-sm-2 control-label">申请人工号</label>
											<div class="col-sm-10">
												<input type="number" class="form-control" name="applyEmpId" required="required" id="applyEmpId" placeholder="申请人工号">
											</div>
										</div>
										<div class="form-group">
											<label for="firstname" class="col-sm-2 control-label">发起人工号</label>
											<div class="col-sm-10">
												<input type="number" class="form-control" name="lauEmpId" required="required" id="lauEmpId" placeholder="发起人工号">
											</div>
			 							</div>
										<div class="form-group">
											<label for="firstname" class="col-sm-2 control-label">会议主题</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" name="meetTheme" required="required" id="meetTheme" placeholder="会议主题">
											</div>
										</div>
										<div class="form-group">
											<label for="lastname" class="col-sm-2 control-label">参会人数</label>
											<div class="col-sm-10">
												<input type="number" class="form-control" name="meetEmpNum" required="required" id="meetEmpNum1" placeholder="参会人数">
											</div>
										</div>
										<div class="row">
											<label for="lastname" class="col-sm-2 control-label">日期</label>
											<div class="col-sm-4">
												<input id="mydate" class="form-control" type="text" readonly="readonly" >
												<script type="text/javascript">
													var calendar = new LCalendar();
													calendar.init({
        												'trigger': '#mydate',
        												'type': 'date'
    												});
												</script>
											</div>
											<label for="lastname" class="col-sm-1 control-label">Start</label>
											<div class="col-sm-2">
												<!--<input type="text" class="form-control" name="staTime" id="staTime1" readonly="true" >-->
												<select class="form-control xbb" name="staTime" id="staTime1"></select>
											</div>
											<script type="text/javascript">
												/*var calendar = new LCalendar();
													calendar.init({
        												'trigger': '#staTime1',
        												'type': 'time'
    												});*/
											</script>
											<label for="lastname" class="col-sm-1 control-label">End</label>
											<div class="col-sm-2">
												<!--<input type="text" class="form-control" name="endTime" id="endTime1" readonly="true" >-->
												<select class="form-control xbb" name="endTime" id="endTime1"></select>
											</div>
											<script type="text/javascript">
												/*var calendar = new LCalendar();
													calendar.init({
        												'trigger': '#endTime1',
        												'type': 'time'
    												});*/
											</script>
										</div>
										<br>
										<div class="form-group">
											<label for="roomstate" class="col-sm-2 control-label">投影仪</label>
											<div class="col-sm-10">
												<select class="form-control input-sm" name="isNeedPro" id="pro1">
													<option value="0">不需要</option>
													<option value="1">需要</option>
												</select>
											</div>
										</div>
										<div class="form-group">
											<label for="roomstate" class="col-sm-2 control-label">会议地点</label>
											<div class="col-sm-10">
												<button id="addDom" type="button" class="btn btn-success">添加</button>
											</div>
											<script type="text/javascript">
												$("#addDom").click(function() {
													$("#local").before('<div><div class="form-group"><div class="col-sm-2"><select class="form-control" name="resTwo"><option value="爱康">爱康</option><option selected="selected" value="爱旭">爱旭</option></select></div><div class="col-sm-6"><select class="form-control input-sm" name="resThree" id="meetRoomId"></select></div><div class="col-sm-2"><button type="button" class="btn btn-success live" onclick="excuteQuery(this)">查询会议室</button></div><div class="col-sm-2"><button id="delete" type="button" class="btn btn-danger live" onclick="deleteDom(this)">删除</button></div></div><div class="form-group"><label for="firstname" class="col-sm-2 control-label">参与人员</label><div class="col-sm-10"><textarea class="form-control" name="meetEmpName" rows="3"></textarea></div></div></div>')
													$("#addDom").attr("disabled", true); 
												})

												function excuteQuery(dom) {
													var statime = testform1.staTime1.value;
													var endtime = testform1.endTime1.value;
													var t = judgeTime(statime, endtime);
													if(t > 0) {
														alert("开始时间不能在结束时间之后！");
														testform1.staTime1.focus();
														testform1.endTime1.focus();
														event.preventDefault();
													} else {
														if($("#meetEmpNum1").val() == "") {
															alert("参会人数不能为空！");
														} else {
															if($("#staTime1").val() == "" ||
																$("#endTime1").val() == "") {
																alert("会议时间不能为空！");
															} else {
																$(dom).parent().prev().children().empty();
																var meetEmpNum = $("#meetEmpNum1").val();
																var mydate = $("#mydate").val()
																var staTime = mydate+' '+$("#staTime1").val()+":00";
																var endTime = mydate+' '+$("#endTime1").val()+":00";
																var pro = $("#pro1").val();
																$.ajax({
																	type: "POST",
																	url: propath() + "/meeting/findfreeroom",
																	data: {
																		"meetRoomNum": meetEmpNum,
																		"staTime": staTime,
																		"endTime": endTime,
																		"isPro": pro
																	},
																	dataType: "json",
																	success: function(data) {
																		if(data.length == 0) {
																			alert("当前条件无可用会议室！");
																		} else {
																			var state;
																			var roompro;
																			var data1 = new Array();
																			for(var i = 0; i < data.length; i++) {
																				if(data[i].resTow === $(dom).parent().prev().prev().children().val() && data[i].resOne === '支持') {
																					data1.push(data[i])
																				}
																			}
																			if(data1.length === 0) {
													    						alert('不存在的')
													    					}
																			for(var i = 0; i < data1.length; i++) {
																				state = data1[i].meetRoomState == 0 ? "空闲" : "被占用";
																				$(dom).parent().prev().children().append(
																					"<option value='" +
																					data1[i].meetRoomId +
																					"'>" +
																					data1[i].meetRoomName +
																					"(状态：" +
																					state +
																					"，可容纳人数：" +
																					data1[i].meetRoomNum +
																					")" +
																					"</option>");
																			}
																		}
																	}
																});
															}
														}
													}
													// console.log(dom)
												}

												function deleteDom(obj) {
													$(obj).parent().parent().parent().remove();
													$("#addDom").attr("disabled", false);
												}
											</script>
										</div>
										<div class="form-group">
											<div class="col-sm-2">
												<select class="form-control" id="select" name="resTwo" style="{width: 50px;}">
													<option value="爱康">爱康</option>
													<option value="爱旭">爱旭</option>
												</select>
											</div>
											<div class="col-sm-8">
												<select class="form-control input-sm" name="resThree" id="meetRoomId1">
												</select>
											</div>
											<div class="col-sm-2">
												<button id="choseRoom1" type="button" class="btn btn-success">查询会议室</button>
											</div>
										</div>

										<div class="form-group">
											<label for="firstname" class="col-sm-2 control-label">参与人员</label>
											<div class="col-sm-10">
												<textarea class="form-control" name="meetEmpName" rows="3"></textarea>
											</div>
										</div>
										<div class="form-group" style="text-align: center" id="local">
											<div class="col-sm-offset-2 col-sm-10">
												<button type="submit" class="btn btn-default">确定</button>
												<button type="reset" class="btn btn-default">取消</button>
											</div>
										</div>
									</form>
									<!------------------------------------------------meetingTwo---------------------------------------------->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</body>

</html>