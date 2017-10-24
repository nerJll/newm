<#assign ctx=request.contextPath> <!DOCTYPE html>
<html lang="zh">
<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>爱康&爱旭会议管理系统</title>

<link rel="stylesheet" type="text/css"
	href="${ctx}/css/home/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="${ctx}/css/bootstrap/bootstrap-theme.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/css/home/zzsc.css">
<link rel="stylesheet" type="text/css" href="${ctx}/css/home/dcalendar.picker.css" />
<script type="text/javascript" src="${ctx}/js/home/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="${ctx}/js/home/dcalendar.picker.js"></script>
<link href="${ctx}/css/home/style.css" rel="stylesheet" />
<script src="${ctx}/js/home/ui.js"></script>
<style>
.tc {
	text-align: center;
}

.divleft {
	width: 50%;
	height: 45px;
	float: left;
}

.divright {
	width: 50%;
	height: 45px;
	float: right;
}
</style>
</head>
<body>
	<div class="panel-body">
		<div class="form-group">
			<div class="row">
				<div class="col-md-2">
					<img alt="支持视频会议" style="width:50px;height:30px;" src="${ctx}/img/grown.png"> : <b>支持视频会议</b>
				</div>
				<div class="col-md-3">
					<span style="float:right;font-weight:bold;">选择日期:</span>
				</div>
				<div class="col-md-5">
					<input id='mydatepicker' style="color: blue; font-weight: bold;"
						 type='text' readonly="readonly" />
					<script type="text/javascript">
						$('#mydatepicker').dcalendarpicker();
					</script>
				</div>
				<div class="col-md-2">
					<img alt="被占用" style="width:50px;height:30px;" src="${ctx}/img/red.jpg"> : <b>被占用</b>&nbsp;&nbsp;	
				</div>
			</div>
			<br>
			<div class="row">
				<div class="col-sm-12">
					<table id="tb1" style="width: 100%; text-align: center;"
						class="table-bordered">
						<tr>
							<th style="width: 12%; text-align: center;" id="dd">爱康·会议室</th>
							<th class="tc">0:00<br>~<br>4:00
							</th>
							<th class="tc">4:00<br>~<br>8:00
							</th>
							<th class="tc">8:00<br>~<br>9:00
							</th>
							<th class="tc">9:00<br>~<br>10:00
							</th>
							<th class="tc">10:00<br>~<br>11:00
							</th>
							<th class="tc">11:00<br>~<br>12:00
							</th>
							<th class="tc">12:00<br>~<br>13:00
							</th>
							<th class="tc">13:00<br>~<br>14:00
							</th>
							<th class="tc">14:00<br>~<br>15:00
							</th>
							<th class="tc">15:00<br>~<br>16:00
							</th>
							<th class="tc">16:00<br>~<br>17:00
							</th>
							<th class="tc">17:00<br>~<br>18:00
							</th>
							<th class="tc">18:00<br>~<br>22:00
							</th>
							<th class="tc">22:00<br>~<br>0:00
							</th>
						</tr>
						<tr id="6">
							<td style="background-color:#8B5742;" id="m1">一期二楼4号会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>20</font>人 <img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" /></td>
							<script>
								showInfo("6", "m1");
							</script>
							<#list 1..14 as t>
							<td>
								<div class="divleft"></div>
								<div class="divright"></div>
							</td>
							</#list>
						</tr>
						<tr id="7">
							<td id="m2">二期二楼2号会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>50</font>人 <img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" /></td>
							<script>
								showInfo("7", "m2");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="9">
							<td id="m3">一期二楼1号会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>100</font>人</td>
							<script>
								showInfo("9", "m3");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="10">
							<td style="background-color:#8B5742;" id="m4">一期二楼9号会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>25</font>人 </td>
							<script>
								showInfo("10", "m4");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="16">
							<td id="m5">一期二楼A1会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>15</font>人 <img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" /></td>
							<script>
								showInfo("16", "m5");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="17">
							<td id="m6">一期二楼A2会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>15</font>人 </td>
							<script>
								showInfo("17", "m6");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="23">
							<td id="m7">一期二楼A3会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>10</font>人 <img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" /></td>
							<script>
								showInfo("23", "m7");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="24">
							<td id="m8">一期二楼A4会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>20</font>人 </td>
							<script>
								showInfo("24", "m8");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="25">
							<td style="background-color:#8B5742;" id="m9">一期二楼A5会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>20</font>人 <img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" /> </td>
							<script>
								showInfo("25", "m9");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="26">
							<td id="m10">一期二楼A6会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>30</font>人 </td>
							<script>
								showInfo("26", "m10");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
					</table>
				</div>
			</div>
			<br>
			<br>
			<div class="row">
				<div class="col-sm-12">
					<table id="tb2" style="width: 100%;text-align:center;" class="table-bordered">
						<tr>
							<th style="width: 12%; text-align: center;" id="dd">爱旭·会议室</th>
							<th class="tc">0:00<br>~<br>4:00
							</th>
							<th class="tc">4:00<br>~<br>8:00
							</th>
							<th class="tc">8:00<br>~<br>9:00
							</th>
							<th class="tc">9:00<br>~<br>10:00
							</th>
							<th class="tc">10:00<br>~<br>11:00
							</th>
							<th class="tc">11:00<br>~<br>12:00
							</th>
							<th class="tc">12:00<br>~<br>13:00
							</th>
							<th class="tc">13:00<br>~<br>14:00
							</th>
							<th class="tc">14:00<br>~<br>15:00
							</th>
							<th class="tc">15:00<br>~<br>16:00
							</th>
							<th class="tc">16:00<br>~<br>17:00
							</th>
							<th class="tc">17:00<br>~<br>18:00
							</th>
							<th class="tc">18:00<br>~<br>22:00
							</th>
							<th class="tc">22:00<br>~<br>0:00
							</th>
						</tr>
						<tr id="27">
							<td id="m1">一期二楼A5会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>30</font>人 <img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" /></td>
							<script>
								showInfo("27", "m1");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="28">
							<td style="background-color:#8B5742;" id="m2">二期1楼G1会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>30</font>人 <img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" /></td>
							<script>
								showInfo("28", "m2");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="29">
							<td id="m3">二期1楼G2会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>30</font>人 </td>
							<script>
								showInfo("29", "m3");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="30">
							<td style="background-color:#8B5742;" id="m4">二期1楼G3会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>30</font>人 </td>
							<script>
								showInfo("30", "m4");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="31">
							<td id="m5">二期2楼G4会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px" />: <font
								color=yellow>30</font>人 <img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" /></td>
							<script>
								showInfo("31", "m5");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="32">
							<td id="m6">二期2楼G5会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>35</font>人 <img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" /></td>
							<script>
								showInfo("32", "m6");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
						<tr id="33">
							<td id="m7">二期2楼G5会议室<br>
								<img src="${ctx}/img/people.png"
								style="width: 20px; height: 20px;" />: <font
								color=yellow>45</font>人 <img src="${ctx}/img/camera.png"
								style="width: 20px; height: 20px;" /></td>
							<script>
								showInfo("33", "m7");
							</script>
							<#list 1..14 as t>
							<td><div class="divleft"></div>
								<div class="divright"></div></td>
							</#list>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</body>
</html>