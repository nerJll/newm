function excuteQuery(dom) {
	var staTime = myform.staTime.value
	var endTime = myform.endTime.value
	var t = judgeTime(staTime, endTime)
	if (t > 0) {
		alert("开始时间不能在结束时间之后！");
		myform.staTime.focus()
		myform.endTime.focus()
		event.preventDefault()
	} else {
		if ($('#meetEmpNum').val() === '') {
			alert('参会人数不能为空')
		} else {
			if ($('#staTime').val() === '' || $('#endTime').val() === '') {
				alert("会议时间不能为空！")
			} else {
				$(dom).parent().prev().children().empty()
				var meetEmpNum = $('#meetEmpNum').val()
				var mydate = $('#mydate').val()
				var staTime = mydate+' '+$('#staTime').val()+':00'
				var endTime = mydate+' '+$('#endTime').val()+':00'
				var pro = $('#isPro').val()
				$.ajax({
					type: 'POST',
					url: "",
					data: {
						'meetRoomNum': meetEmpNum,
						'staTime': staTime,
						'endTime': endTime,
						'isPro': pro
					},
					dataType: "json",
					success: function (data) {
						
					}
				});
			}
		}
		
	}
}

function judgeTime(statime, endtime) {
	var s1 = statime.replace(/T/, " ");
	var e1 = endtime.replace(/T/, " ");
	s1 = s1.replace(/-/g, "/");
	e1 = e1.replace(/-/g, "/");
	var date1 = new Date(s1);
	var date2 = new Date(e1);
	return date1.getTime() - date2.getTime();
}