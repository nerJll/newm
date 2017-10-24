<#assign ctx=request.contextPath />
<!DOCTYPE html>
<html>
<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<title>广东爱康太阳能科技有限公司-会议管理</title>
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
<script type="text/javascript" src="${ctx}/js/jquery/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="${ctx}/js/meeting/common.js"></script>
</head>
<body>
	<div class="panel panel-default">
		<div style="text-align: center;" class="panel-heading"><font size=5px><b>会议管理</b></font></div>
		<div class="panel-body">
			<div class="head">
				<button onclick="addMeet();" class="btn btn-info">添加会议</button>
				<button onclick="deleteMeet();" class="btn btn-danger">删除会议</button>
				<button onclick="editMeet();" class="btn btn-warning">编辑会议</button>
				<button onclick="refresh();" class="btn">刷新</button>
				<br> <br>
				<form action="${ctx}/meeting/index">
					<span><b>名称：</b></span> <input name="meetTheme" class="ipt"
						type="text" placeHolder="请输入会议主题" /> <input type="submit"
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
						<th style="text-align: center">会议主题</th>
						<th style="text-align: center">开始时间</th>
						<th style="text-align: center">参会人数</th>
						<th style="text-align: center">会议状态</th>
						<th style="text-align: center">查看</th>
					</tr>
					<#list pageInfo.list as meeting>
					<tr>
						<td><input type="checkbox" name="meetId"
							value="${meeting.meetId!''}" /></td>
						<td>${meeting_index+1!''}</td>
						<td>${meeting.meetTheme!''}</td>
						<td>${meeting.staTime?string('yyyy-MM-dd HH:mm:ss')}</td>
						<td>${meeting.meetEmpNum!''}</td>
						<td>${meeting.resOne!''}</td>
						<td><a href="${ctx}/meeting/showInfo/${meeting.meetId!''}"
							id="example" class="btn btn-success" rel="popover"
							data-original-title="Bootstrap弹出框">详情</a></td>
					</tr>
					</#list>
				</table>
				<table style="font-size: 14px;">
					<tr>
						<td><#if pageInfo.total !=0> <span>第${pageInfo.pageNum}/${pageInfo.pages}页</span></#if>
							<span>总记录数：${pageInfo.total} <#if pageInfo.total
								!=0>每页显示:${pageInfo.pageSize} </#if> <#if pageInfo.pageNum !=1>
								<a href="${ctx}/meeting/index?currentPage=1">[首页]</a> <a
								href="${ctx}/meeting/index?currentPage=${pageInfo.pageNum-1}">[上一页]</a>
								</#if> <#if pageInfo.pageNum !=pageInfo.pages && pageInfo.pages
								!=0> <a
								href="${ctx}/meeting/index?currentPage=${pageInfo.pageNum+1}">[下一页]</a>
								<a href="${ctx}/meeting/index?currentPage=${pageInfo.pages}">[尾页]</a>
								</#if>
						</span></td>
					</tr>
				</table>
			</form>
		</div>
	</div>
	<footer class="footer">爱康会议管理系统 2017</footer>
</body>
</html>