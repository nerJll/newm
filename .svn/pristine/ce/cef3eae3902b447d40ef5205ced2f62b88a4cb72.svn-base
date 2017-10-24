<#assign ctx=request.contextPath> <!DOCTYPE html>
<html>
<head>
<base id="ctx" href="${ctx}">
<meta charset="UTF-8">
<title>广东爱康太阳能科技有限公司-会议管理</title>
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
	<script type="text/javascript" src="${ctx}/js/meeting/common.js"></script>
<script>
function initVal(stutas){
	$("#status").val(stutas);
}

</script>
</head>
<body>
<div class="panel panel-default">
		<div style="text-align: center;" class="panel-heading">
			<font size=5px><b>会议审核</b></font>
		</div>
		<div class="panel-body">
			<div class="head">
			<form action="${ctx}/admin/auditMeeting" method="post">
					 <input	type="hidden" id="status" name="status" />
					<button type="submit" onclick="initVal('待审核');" class="btn btn-danger">待审核</button>
					<button type="submit" onclick="initVal('未通过');" class="btn btn-warning">未通过</button>
					<button type="submit" onclick="initVal('已通过');" class="btn btn-info">已通过</button>
			</form>
				
				
			</div>
			<br>
			<form class="form-group">
				<table class="table table-bordered table-striped">
					<tr>
						<th style="text-align: center">会议主题</th>
						<th style="text-align: center">会议时间</th>
						<th style="text-align: center">申请时间</th>
 						<th style="text-align: center">申请人</th>
 						<th style="text-align: center">会议状态</th>
						<th style="text-align: center">详情</th>
					</tr>
					<#list empmeet.list as meeting>
					<tr>
						<td>${meeting.meetTheme!''}</td>
						<td>${meeting.staTime?string('MM月dd日 HH:mm')} ~ ${meeting.endTime?string('HH:mm')}</td>
						<td>${meeting.meetApplyTime?string('yyyy-MM-dd HH:mm:ss')}</td>
 						<td>${meeting.meetEmpName!''}</td>
 						<td>${meeting.resOne!''}</td>
						<td> 
						<#if meeting.resOne == "待审核">
							<a href="${ctx}/admin/showInfo/${meeting.meetId!''}"
							id="example" class="btn btn-success" rel="popover"
							data-original-title="Bootstrap弹出框">详情</a>	
						<#else >
							<a href="${ctx}/admin/showInfo1/${meeting.meetId!''}"
							id="example" class="btn btn-success" rel="popover"
							data-original-title="Bootstrap弹出框">详情</a>
						</#if> 
						</td>
					</tr>
					</#list>
				</table>
				<table style="font-size: 14px;">
					<tr>
						<td><#if empmeet.total !=0> <span>第${empmeet.pageNum}/${empmeet.pages}页</span></#if>
							<span>总记录数：${empmeet.total} <#if
									empmeet.total
								!=0>每页显示:${empmeet.pageSize} </#if> <#if
									empmeet.pageNum !=1> <a
									href="${ctx}/admin/auditMeeting?currentPage=1">[首页]</a> <a
									href="${ctx}/admin/auditMeeting?currentPage=${empmeet.pageNum-1}">[上一页]</a>
								</#if> <#if empmeet.pageNum !=empmeet.pages
									&& empmeet.pages
								!=0> <a
									href="${ctx}/admin/auditMeeting?currentPage=${empmeet.pageNum+1}">[下一页]</a>
								<a
									href="${ctx}/admin/auditMeeting?currentPage=${empmeet.pages}">[尾页]</a>
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