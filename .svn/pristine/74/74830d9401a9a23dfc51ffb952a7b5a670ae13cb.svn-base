<#assign ctx=request.contextPath>
<!DOCTYPE html>
<html lang="zh">
<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="X-UA-Compatible" content="IE=9" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>爱康会议管理系统</title>
<link rel="stylesheet" type="text/css"
	href="${ctx}/css/bootstrap/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="${ctx}/css/bootstrap/bootstrap-theme.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/css/home/zzsc.css">
<link rel="stylesheet" type="text/css"
	href="${ctx}/css/home/dcalendar.picker.css" />
<script type="text/javascript"
	src="${ctx}/js/testhome/jquery-1.11.0.min.js"></script>
<script type="text/javascript"
	src="${ctx}/js/testhome/dcalendar.picker.js"></script>

<style>
* {
	margin: 0;
	padding: 0;
	list-style: none;
}

html {
	background-color: #E3E3E3;
	font-size: 14px;
	color: #000;
	font-family: '微软雅黑'
}

h2 {
	line-height: 30px;
	font-size: 20px;
}

a, a:hover {
	text-decoration: none;
}

pre {
	font-family: '微软雅黑'
}

.box {
	width: 970px;
	padding: 10px 20px;
	background-color: #fff;
	margin: 10px auto;
}

.box a {
	padding-right: 20px;
}

.demo1, .demo2, .demo3, .demo4, .demo5, .demo6 {
	margin: 25px 0;
}

h3 {
	margin: 10px 0;
}

.layinput {
	height: 22px;
	line-height: 22px;
	width: 150px;
	margin: 0;
}
</style>
<script src="${ctx}/laydate/laydate.js"></script>
<script type="text/javascript">
	!function() {
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({
			elem : '#demo'
		});//绑定元素
	}();
	//通用函数：获取当前项目路径   获取网站根目录

	console.log(window.document.location);

	// 获取项目路径信息
	var curWwwPath = window.document.location.href; //当前页面打开curWwwPath页面
	console.log(curWwwPath); //  http://localhost:8080/aiko-meetingnew/home/testIndex
	var pathName = window.document.location.pathname; //   pathname:"/aiko-meetingnew/home/testIndex"
	console.log(pathName); // /aiko-meetingnew/home/testIndex
	var pos = curWwwPath.indexOf(pathName);
	console.log(pos); //21  从0开始到pathName.length-1
	var localhostPath = curWwwPath.substring(0, pos);
	console.log(localhostPath); //  http://localhost:8080
	console.log(pathName.substr(1)); //    aiko-meetingnew/home/testIndex 去掉了第一个“/”
	console.log(pathName.substr(1).indexOf("/")); //15
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf("/") + 1);
	console.log(projectName); //    /aiko-meetingnew
	var basePath = localhostPath + projectName;
	console.log(basePath); //   http://localhost:8080/aiko-meetingnew
</script>
</head>
<body>

	<div class="panel-body">
		<div class="form-group">
			<div class="row">
				

				<div class="col-sm-4">
					
					
					<div class="demo1">
					<h3>演示二（普通模式）</h3>
					<input class="laydate-icon" id="mydatepicker" value="2017-09-25">
				</div>
				<div class="demo6">
					<h3>演示六（按钮触发日期）</h3>
					<input readonly class="layinput" id="hello1">
					<div class="laydate-icon " onClick="laydate({elem: '#hello1'});"
						style="width: 10px; display: inline-block; border: none;"></div>
				</div>
				</div>
				<div class="col-sm-8">
					<div class="table-responsive">
						<table class="table table-striped">
							<thead style="color:olive;">
								<tr >
									<th>名称</th>
									<th>城市</th>
									<th>邮编</th>
								</tr>
							</thead>
							<tbody >
								<tr>
									<td>Tanmay</td>
									<td>Bangalore</td>
									<td>560001</td>
								</tr>
								<tr>
									<td>Sachin</td>
									<td>Mumbai</td>
									<td>400003</td>
								</tr>
								<tr>
									<td>Uma</td>
									<td>Pune</td>
									<td>411027</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script>
		!function() {
			laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
			laydate({
				elem : '#mydatepicker'
			});//绑定元素
		}();
		//日期范围限定在昨天到明天
		laydate({
		    elem: '#hello3',
		    //min: laydate.now(-1), //-1代表昨天，-2代表前天，以此类推
		    max: laydate.now(+20) //+1代表明天，+2代表后天，以此类推
		});
	</script>
</body>
</html>