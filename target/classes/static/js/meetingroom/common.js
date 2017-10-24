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
function addRoom() {
	location.href = propath() + "/meetingRoom/toAddRoom";
}

// 删除操作
function deleteRoom() {
	// 将复选框值赋给数组
	var arr = document.getElementsByName("meetRoomId");
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
			location.href = propath() + "/meetingRoom/deleteRoom/" + checkval;
		}
	}
}

// 刷新操作
function refresh() {
	location.href = propath() + "/meetingRoom/index";
}

// 编辑操作
function editRoom() {
	// 将复选框值赋给数组
	var arr = document.getElementsByName("meetRoomId");
	var checkval = new Array();
	var newlength = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].checked) {
			checkval[newlength] = arr[i].value;
			newlength++;
		}
	}
	if (newlength > 1) {
		alert("只能编辑一个会议室信息！");
	} else if(newlength == 1){
		location.href = propath() + "/meetingRoom/toUpdate/" + checkval;
	}
}