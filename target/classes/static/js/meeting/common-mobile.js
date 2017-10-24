//通用函数：获取当前项目路径
function propath() {
	// 获取项目路径信息
	var curWwwPath = window.document.location.href;
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	var localhostPath = curWwwPath.substring(0, pos);
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);

	return localhostPath + projectName;
}

// 复选框全选全不选
function allSelect() {
	if ($(":checkbox").attr("checked") != "checked") {
		$(":checkbox").attr("checked", "checked");
	} else {
		$(":checkbox").removeAttr("checked");
	}
}

// 添加操作
function addMeet() {
	location.href = propath() + "/meeting/toAddMeet";
}

// 删除操作
function deleteMeet() {
	// 将复选框值赋给数组
	var arr = document.getElementsByName("meetId");
	var checkval = new Array();
	var newlength = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].checked) {
			checkval[newlength] = arr[i].value;
			newlength++;
		}
	}
	if (newlength != 0) {
		var r = window.confirm("确定要删除吗？");
		if (r) {
			location.href = propath() + "/meeting/deleteMeet/" + checkval;
		}
	}else{
		alert("请选择要删除的会议！");
	}
}

// 刷新操作
function refresh() {
	location.href = propath() + "/meeting/index";
}

// 编辑操作
function editMeet() {
	// 将复选框值赋给数组
	var arr = document.getElementsByName("meetId");
	var checkval = new Array();
	var newlength = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].checked) {
			checkval[newlength] = arr[i].value;
			newlength++;
		}
	}
	if (newlength > 1) {
		alert("只能编辑一个会议信息！");
	} else if (newlength == 0) {
		alert("请选择要编辑的会议！");
	} else if (newlength == 1) {
		location.href = propath() + "/meeting/toUpdate/" + checkval[0];
	}
}

// 获取会议室信息
$(function() {
	$("#choseRoom1").click(
		function() {
			var date = testform1.mydate.value
			var statime = date+' '+testform1.staTime1.value+':00';
			var endtime = date+' '+testform1.endTime1.value+':00';
			var t = judgeTime(statime, endtime);
			if (t > 0) {
				alert("开始时间不能在结束时间之后！");
				testform1.staTime1.focus();
				testform1.endTime1.focus();
				event.preventDefault();
			}else{
				if ($("#meetEmpNum1").val() == "") {
					alert("参会人数不能为空！");
				} else {
					if ($("#staTime1").val() == ""
							|| $("#endTime1").val() == "") {
						alert("会议时间不能为空！");
					} else {
							 $("#meetRoomId1").empty();
							 var meetEmpNum = $("#meetEmpNum1").val();
							 var staTime = date+' '+$("#staTime1").val()+':00';
							 var endTime = date+' '+$("#endTime1").val()+':00';
							 var pro = $("#pro1").val();
							 $.ajax({
									 type : "POST",
									 url : propath()+ "/meeting/findfreeroom",
									 data : {
										 		"meetRoomNum" : meetEmpNum,
										 		"staTime" : staTime,
										 		"endTime" : endTime,
										 		"isPro" : pro
										 	},
									 dataType : "json",
									 success : function(data) {
										 			if(data.length == 0){
										 				alert("当前条件无可用会议室！");
										 			}else{
										 				var state;
														var roompro;
														var data1 = new Array()
														for(var i = 0; i < data.length; i++) {
																				if(data[i].resTow === $("#select").val() && data[i].resOne === '支持') {
																					data1.push(data[i])
																				}
																			}
														if(data1.length === 0) {
													    		alert('不存在的')
													    	}
													    for (var i = 0; i < data1.length; i++) {
															state = data1[i].meetRoomState == 0 ? "空闲": "被占用";
															$("#meetRoomId1").append(
																"<option value='"
																+ data1[i].meetRoomId
																+ "'>"
																+ data1[i].meetRoomName
																+ "(状态："
																+ state
																+ "，可容纳人数："
																+ data1[i].meetRoomNum
																+ ")"
															    + "</option>");
														}
										 			}
												}
									});
							}

				  	}
			}
			
		});
});

$(function() {
	$("#choseRoom").click(
		function() {
			var date = testform.mydate1.value
			var statime = date+' '+testform.staTime.value+':00';
			var endtime = date+' '+testform.endTime.value+':00';
			var t = judgeTime(statime, endtime);
			if (t > 0) {
				alert("开始时间不能在结束时间之后！");
				testform.staTime.focus();
				testform.endTime.focus();
				event.preventDefault();
			}else{
				if ($("#meetEmpNum").val() == "") {
					alert("参会人数不能为空！");
				} else {
					if ($("#staTime").val() == ""
							|| $("#endTime").val() == "") {
						alert("会议时间不能为空！");
					} else {
							 $("#meetRoomId").empty();
							 var meetEmpNum = $("#meetEmpNum").val();
							 var staTime = date+' '+$("#staTime").val()+':00';
							 var endTime = date+' '+$("#endTime").val()+':00';
							 var pro = $("#pro").val();
							 $.ajax({
									 type : "POST",
									 url : propath()+ "/meeting/findfreeroom",
									 data : {
										 		"meetRoomNum" : meetEmpNum,
										 		"staTime" : staTime,
										 		"endTime" : endTime,
										 		"isPro" : pro
										 	},
									 dataType : "json",
									 success : function(data) {
										 			if(data.length == 0){
										 				alert("当前条件无可用会议室！");
										 			}else{
										 				var state;
														var roompro;
														var data1 = new Array()
														for(var i = 0; i < data.length; i++) {
																				if(data[i].resTow === $("#select1").val()) {
																					data1.push(data[i])
																				}
																			}
													    for (var i = 0; i < data1.length; i++) {
															state = data1[i].meetRoomState == 0 ? "空闲": "被占用";
															$("#meetRoomId").append(
																"<option value='"
																+ data1[i].meetRoomId
																+ "'>"
																+ data1[i].meetRoomName
																+ "(状态："
																+ state
																+ "，可容纳人数："
																+ data1[i].meetRoomNum
																+ ")"
															    + "</option>");
														}
										 			}
												}
									});
							}

				  	}
			}
			
		});
});

// 函数：验证开始时间是否在结束时间之前
function judgeTime(statime, endtime) {
	var s1 = statime.replace(/T/, " ");
	var e1 = endtime.replace(/T/, " ");
	s1 = s1.replace(/-/g, "/");
	e1 = e1.replace(/-/g, "/");
	var date1 = new Date(s1);
	var date2 = new Date(e1);
	return date1.getTime() - date2.getTime();
}

// 提交表单前认
function checkSubmit() {
	if ($("#staTime").val() == "" || $("#endTime").val() == "") {
		alert("会议时间不能为空！");
		event.preventDefault();
	} else {
		if ($("#meetRoomId").val() == null) {
			alert("会议室不能为空！");
			event.preventDefault();
		} else {
			var date = testform.mydate1.value
			var statime = date+' '+testform.staTime.value+':00';
			var endtime = date+' '+testform.endTime.value+':00';
			$("#staTime").append('<option selected="selected" value="'+statime+'"></option>')
			$("#endTime").append('<option selected="selected" value="'+endtime+'"></option>')
			var t = judgeTime(statime, endtime);
			if (t > 0) {
				alert("开始时间不能在结束时间之后！");
				testform.staTime.focus();
				testform.endTime.focus();
				event.preventDefault();
			} else {
				if (confirm("确认提交表单吗？")) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
}

function checkSubmit1() {
	if ($("#staTime1").val() == "" || $("#endTime1").val() == "") {
		alert("会议时间不能为空！");
		event.preventDefault();
	} else {
		if ($("#meetRoomId1").val() == null) {
			alert("会议室不能为空！");
			event.preventDefault();
		} else {
			var date = testform1.mydate.value
			var statime = date+' '+testform1.staTime1.value+':00';
			var endtime = date+' '+testform1.endTime1.value+':00';
			$("#staTime1").append('<option selected="selected" value="'+statime+'"></option>')
			$("#endTime1").append('<option selected="selected" value="'+endtime+'"></option>')
			var t = judgeTime(statime, endtime);
			if (t > 0) {
				alert("开始时间不能在结束时间之后！");
				testform1.staTime1.focus();
				testform1.endTime1.focus();
				event.preventDefault();
			} else {
				if (confirm("确认提交表单吗？")) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
}

//将数字中的逗号去掉
$(function() {
	var applyEmpId = testform.applyEmpId.value;
	var app = applyEmpId.replace(/,/g, "");
	document.getElementById("applyEmpId").value = app;
	var lauEmpId = testform.lauEmpId.value;
	var lau = lauEmpId.replace(/,/g, "");
	document.getElementById("lauEmpId").value = lau;
});

// 查询会议室
function excuteQuery(dom) {
	var statime = testform.staTime.value;
	var endtime = testform.endTime.value;
	var t = judgeTime(statime, endtime);
	if(t > 0) {
		alert("开始时间不能在结束时间之后！");
		testform.staTime.focus();
		testform.endTime.focus();
		event.preventDefault();
	} else {
		if($("#meetEmpNum").val() == "") {
			alert("参会人数不能为空！");
		} else {
			if($("#staTime").val() == "" ||
				$("#endTime").val() == "") {
				alert("会议时间不能为空！");
			} else {
				$(dom).parent().prev().children().empty();
				var meetEmpNum = $("#meetEmpNum").val();
				var staTime = $("#staTime").val();
				var endTime = $("#endTime").val();
				var pro = $("#pro").val();
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
							for (var i = 0;i<data.length;i++) {
								if (data[i].resTow === $(dom).parent().prev().prev().children().val()) {
									data1.push(data[i])
								}
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
// 删除节点dom
function deleteDom(obj) {
	$(obj).parent().parent().parent().remove()
}