<#assign ctx=request.contextPath />
<!DOCTYPE html>
<html>
<head>
<!-- <base id="ctx" href="${ctx}"> -->
<meta charset="UTF-8">
<title>广东爱康太阳能科技有限公司-会议室管理</title>
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
		<div style="text-align: center;" class="panel-heading">
			<font size=5px><b>会议室管理</b></font>
		</div>
		<div class="panel-body">
			<div class="head">
				<button onclick="addRoom();" class="btn btn-info">添加会议室</button>
				<button onclick="deleteRoom();" class="btn btn-danger">删除会议室</button>
				<button onclick="editRoom();" class="btn btn-warning">编辑会议室</button>
				<button onclick="refresh();" class="btn">刷新</button>
				<br> <br>

				<form action="${ctx}/meetingRoom/index">
					<span><b>名称：</b></span> <input name="meetRoomName" class="ipt"
						type="text" placeHolder="请输入会议室名称" /> <input type="submit"
						class="btn" value="搜索">
				</form>
			</div>
			<br>
			<form class="form-group">
				<table class="table table-bordered table-striped">
					<tr>
						<th style="text-align: center"><input type="checkbox"
							onclick="allSelect();" /></th>
						<th style="text-align: center">序号</th>
						<th style="text-align: center">会议室名称</th>
						<th style="text-align: center">容纳人数</th>
						<th style="text-align: center">是否有投影</th>
						<th style="text-align: center">操作</th>
					</tr>
					<#list pageInfo.list as room>
					<tr>
						<td><input type="checkbox" name="meetRoomId"
							value="${room.meetRoomId!''}" /></td>
						<td>${room_index+1!''}</td>
						<td>${room.meetRoomName!''}</td>
						<td>${room.meetRoomNum!''}</td>
						<td><#if room.isRoomPro==1>有投影<#else>没投影</#if></td>
						<td><a href="${ctx}/meetingRoom/toUpdate/${room.meetRoomId}"
							id="example" class="btn btn-success" rel="popover"
							data-content="为我的网站创建一个提示框如此简单！"
							data-original-title="Bootstrap弹出框">编辑</a></td>
					</tr>
					</#list>
				</table>
				<table style="font-size: 14px;">
					<tr>
						<td><#if pageInfo.total !=0> <span>第${pageInfo.pageNum}/${pageInfo.pages}页</span></#if>
							<span>总记录数:${pageInfo.total} <#if
									pageInfo.total
								!=0>每页显示:${pageInfo.pageSize} </#if> <#if
									pageInfo.pageNum !=1> <a
									href="${ctx}/meetingRoom/index?currentPage=1">[首页]</a> <a
									href="${ctx}/meetingRoom/index?currentPage=${pageInfo.pageNum-1}">[上一页]</a>
								</#if> <#if pageInfo.pageNum !=pageInfo.pages
									&& pageInfo.pages
								!=0> <a
									href="${ctx}/meetingRoom/index?currentPage=${pageInfo.pageNum+1}">[下一页]</a>
								<a href="${ctx}/meetingRoom/index?currentPage=${pageInfo.pages}">[尾页]</a>
								</#if>
						</span></td>
					</tr>
				</table>
			</form>
		</div>
	</div>
</body>
</html>