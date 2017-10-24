/* -- DO NOT REMOVE --
 * jQuery DCalendar 1.1 and DCalendar Picker 1.3 plugin
 * 
 * Author: Dionlee Uy
 * Email: dionleeuy@gmail.com
 *
 * Date: Sat Mar 2 2013
 *
 * @requires jQuery
 * -- DO NOT REMOVE --
 */
if (typeof jQuery === 'undefined') { throw new Error('DCalendar.Picker: This plugin requires jQuery'); }
 
+function ($) {

	Date.prototype.getDays = function() { return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate(); };
	var months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
		short_months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
		daysofweek = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],

		DCalendar = function(elem, options) {
		    this.calendar = $(elem);
			this.today = new Date();	// system date

			// current selected date, default is today if no value given
			if(this.calendar.prev().val() === '') {
				this.date = new Date();
			} else {
				var dateObj = this.reformatDate(this.calendar.prev().val());
				this.date = isNaN(parseInt(dateObj.m)) ? new Date(dateObj.m + " " + dateObj.d + ", " + dateObj.y) : new Date(dateObj.y, dateObj.m - 1, dateObj.d);
			}

			this.viewMode = 'days';
			this.options = options;
			this.selected = (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" + this.date.getFullYear();
			this.minDate = this.calendar.prev().data('mindate');
			this.maxDate = this.calendar.prev().data('maxdate');
			
			if(options.mode === 'calendar')
				this.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="5" id="currM"></th><th id="next">&rsaquo;</th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead>');
			else if (options.mode === 'datepicker')
				this.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="5" id="currM"></th><th id="next">&rsaquo;</th></tr><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr></thead>');
			this.tHead.find('#currM').text(months[this.today.getMonth()] +" " + this.today.getFullYear());
			this.calendar.prepend(this.tHead);
			var that = this;

			this.calendar.on('click', '#next', function() { initCreate('next'); })
				.on('click', '#prev', function() { initCreate('prev'); })
				.on('click', '#today', function() {
					that.viewMode = 'days';
					var curr = new Date(that.date),
						sys = new Date(that.today);
					if(curr.toString() != sys.toString()) { that.date = sys; }
					that.create('days');
				}).on('click', '.date, .pMDate, .nMDate', function() {
					var isPrev = $(this).hasClass('pMDate'),
						isNext = $(this).hasClass('nMDate'),
						sdate = $(this).text(),
						cmonth = that.date.getMonth(),
						cyear = that.date.getFullYear(),
						min = that.minDate === "today" ? new Date(that.today.getFullYear(), that.today.getMonth(), that.today.getDate()) : new Date(that.minDate),
                		max = that.maxDate === "today" ? new Date(that.today.getFullYear(), that.today.getMonth(), that.today.getDate()) : new Date(that.maxDate);

					/* Calculate year */
					if(isPrev) { cyear = (cmonth === 0 ? cyear - 1 : cyear); }
					else if(isNext) { cyear = (cmonth + 2 === 13 ? cyear + 1 : cyear); }
					/* Calculate month */
					if(isPrev) { cmonth = (cmonth === 0 ? '12' : cmonth); }
					else if (isNext) { cmonth = (cmonth + 2 === 13 ? '1' : cmonth + 2); }
					else { cmonth = cmonth + 1; }

					// Selected date
					var selected = new Date(cyear, cmonth - 1, sdate);

					// console.log(cmonth);
					// console.log(selected);
					if ((that.minDate && selected < min) || (that.maxDate && selected > max)) return;

					that.selected = cmonth + '/' + sdate + '/' + cyear;

					if(that.options.mode === 'datepicker') {
						that.calendar.find('td').removeClass('selected');
						$(this).addClass('selected');
					}

					that.selectDate();
					return true;
				}).on('click', '#currM', function(){
					that.viewMode = 'months';
					that.create(that.viewMode);
				}).on('click', '.month', function(e){
					that.viewMode = 'days';
					var curr = new Date(that.date), y = that.calendar.find('#currM').text();
					curr.setMonth($(e.currentTarget).attr('num'));
					that.date = curr;
					that.create(that.viewMode);
				});

			function initCreate(o){
				var curr = new Date(that.date),
					currMonth = curr.getMonth(),
					currYear = curr.getFullYear();
				curr.setDate(1);
				if(that.viewMode === 'days') {
					curr.setMonth(currMonth + (o === 'next' ? 1 : -1));
				} else {
					curr.setFullYear(currYear + (o === 'next' ? 1 : - 1));
				}
				that.date = curr;
				that.create(that.viewMode);
			}

			this.create(this.viewMode);
		}

	DCalendar.prototype = {

		constructor : DCalendar, 

		setDate : function() {
			var that = this,
				dateObj = that.reformatDate(that.calendar.prev().val()),
				value = isNaN(parseInt(dateObj.m)) ? new Date(dateObj.m + " " + dateObj.d + ", " + dateObj.y) : new Date(dateObj.y, dateObj.m - 1, dateObj.d);

			that.selected = (value.getMonth() + 1) + "/" + value.getDate() + "/" + value.getFullYear();
			that.selectDate();
			that.date = value;
			that.create(that.viewMode);
		},

		selectDate : function () {
			var that = this,
				newDate = that.formatDate(that.options.format),
				e = $.Event('selectdate', {date: newDate});

			that.calendar.trigger(e);
		},

		reformatDate : function (date) {
			var that = this,
				format = that.options.format;

			return {
					m: date.substring(format.indexOf('m'), format.lastIndexOf('m') + 1),
					d: date.substring(format.indexOf('d'), format.lastIndexOf('d') + 1),
					y: date.substring(format.indexOf('y'), format.lastIndexOf('y') + 1)
				};
		},

		formatDate : function (format) {
			var that = this;
			var d = new Date(that.selected), day = d.getDate(), m = d.getMonth(), y = d.getFullYear();
			
			return format.replace(/(yyyy|yy|mmmm|mmm|mm|m|dd|d)/gi, function (e) {
				switch(e.toLowerCase()){
					case 'd': return day;
					case 'dd': return (day < 10 ? "0"+day: day);
					case 'm': return m+1;
					case 'mm': return (m+1 < 10 ? "0"+(m+1): (m+1));
					case 'mmm': return short_months[m];
					case 'mmmm': return months[m];
					case 'yy': return y.toString().substr(2,2);
					case 'yyyy': return y;
				}
			});
		},

		create : function(mode){
			var that = this, cal = [], 
				tBody = $('<tbody></tbody>'), 
				d = new Date(that.date.getFullYear(), that.date.getMonth(), that.date.getDate()),
				days = that.date.getDays(),
				day = 1, nStartDate = 1,
				selDate = that.selected.split('/'),
				selected = new Date(selDate[2], selDate[0] -1, selDate[1]),
				today = new Date(that.today.getFullYear(), that.today.getMonth(), that.today.getDate()),
				min = that.minDate === "today" ? today : new Date(that.minDate),
                max = that.maxDate === "today" ? today : new Date(that.maxDate);

			that.calendar.empty();
			if(mode === "days") {
				if(that.options.mode === 'calendar') {
					that.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="5" id="currM"></th><th id="next">&rsaquo;</th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead>');
				} else if (that.options.mode === 'datepicker') {
					that.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="5" id="currM"></th><th id="next">&rsaquo;</th></tr><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr></thead>');
				}
				that.tHead.find('#currM').text(that.date.getFullYear()+" " +months[that.date.getMonth()]);
				that.calendar.append(that.tHead);

				for(var i = 1; i <= 6; i++){
					var temp = [$('<td></td>'),$('<td></td>'),$('<td></td>'),$('<td></td>'),$('<td></td>'),$('<td></td>'),$('<td></td>')];

					while(day <= days){
						d.setDate(day);
						var dayOfWeek = d.getDay();

						if(d.getTime() == today.getTime()) temp[dayOfWeek].attr('id', 'currDay');

						if ((that.minDate && d < min) || (that.maxDate && d > max)) temp[dayOfWeek].addClass('disabled');

						if(that.options.mode === 'datepicker' && d.getTime() == selected.getTime()) temp[dayOfWeek].addClass('selected');

						if(i === 1 && dayOfWeek === 0) break; 
						else if(dayOfWeek < 6) temp[dayOfWeek].html('<span>'+(day++)+'</span>').addClass('date');
						else {
							temp[dayOfWeek].html('<span>'+(day++)+'</span>').addClass('date');
							break;
						}
					}
					/* For days of previous and next month */
					if (i === 1 || i > 4) {
						// First week
						if (i === 1) {
							var p = new Date(that.date.getFullYear(), that.date.getMonth() - 1, 1),
								pMonth = p.getMonth(), pDays = p.getDays();

							for (var a = 6; a >= 0; a--) {
								if (temp[a].text() === ''){
									
									p.setDate(pDays);

									temp[a].html('<span>' + (pDays--) + '</span>').addClass('pMDate');
									
									if ((that.minDate && p < min) || (that.maxDate && p > max)) temp[a].addClass('disabled');
									if (that.options.mode === 'datepicker' && p.getTime() == selected.getTime()) temp[a].addClass('selected');
								}
							}
						} 
						// Last week
						else if (i > 4) {
							var nextMonth = new Date(that.date.getFullYear(), that.date.getMonth() + 1, 1);
							for (var a = 0; a <= 6; a++) {
								if (temp[a].text() === ''){

									nextMonth.setDate(nStartDate);

									temp[a].html('<span>' + (nStartDate++) + '</span>').addClass('nMDate');
									
									if ((that.minDate && nextMonth < min) || (that.maxDate && nextMonth > max)) temp[a].addClass('disabled');
									if (that.options.mode === 'datepicker' && nextMonth.getTime() == selected.getTime()) temp[a].addClass('selected');
								}
							}
						}
					}
					cal.push(temp);
				}

				$.each(cal, function(i, v){
					var row = $('<tr></tr>'), l = v.length;
					for(var i = 0; i < l; i++) { row.append(v[i]); }
					tBody.append(row);
				});

				var sysDate = "今天: "+that.today.getFullYear() +"年"+ months[that.today.getMonth()] + that.today.getDate() + "日, " + daysofweek[that.today.getDay()];
				tBody.append('<tr><td colspan="7" id="today">' + sysDate + '</td></tr>').appendTo(that.calendar);
			} else {
				this.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="2" id="currM"></th><th id="next">&rsaquo;</th></tr>');
				that.tHead.find('#currM').text(that.date.getFullYear());
				that.tHead.appendTo(that.calendar);
				var currI = 0;
				for (var i = 0; i < 3; i++) {
					var row = $('<tr></tr>');
					for (var x = 0; x < 4; x++) {
						var col = $('<td align="center"></td>');
						var m = $('<span class="month" num="' + currI + '">' + short_months[currI] + '</span>');
						col.append(m).appendTo(row);
						currI++;
					}
					tBody.append(row);
				}
				var sysDate = "Today: " + daysofweek[that.today.getDay()] + ", "+ months[that.today.getMonth()] + " " + that.today.getDate() + ", " + that.today.getFullYear();
				tBody.append('<tr><td colspan="4" id="today">' + sysDate + '</td></tr>').appendTo(that.calendar);
			}
		}
	}

	/* DEFINITION FOR DCALENDAR */
	$.fn.dcalendar = function(opts){
		return $(this).each(function(index, elem){
			var that = this;
 			var $this = $(that),
 				data = $(that).data('dcalendar'),
 				options = $.extend({}, $.fn.dcalendar.defaults, $this.data(), typeof opts === 'object' && opts);
 			if(!data){
 				$this.data('dcalendar', (data = new DCalendar(this, options)));
 			}
 			if(typeof opts === 'string') data[opts]();
		});
	}

	$.fn.dcalendar.defaults = {
		mode : 'calendar',
		format: 'yyyy-mm-dd',
	};

	$.fn.dcalendar.Constructor = DCalendar;

	/* DEFINITION FOR DCALENDAR PICKER */
	$.fn.dcalendarpicker = function(opts){
		return $(this).each(function(){
			var that = $(this),
				hovered = false, selectedDate = false,
				cal = null;

			if(typeof opts === 'string') {
				var data = that.next('.calendar').data('dcalendar');
				data[opts]();
			} else {
				cal = $('<table class="calendar"></table>');
				that.wrap($('<div class="datepicker" style="display:inline-block;position:relative;"></div>'));
				cal.css({
					position:'absolute',
					left:0, display:'none',
					'box-shadow':'0 4px 6px 1px rgba(0, 0, 0, 0.14)',
					width:'230px',
				}).appendTo(that.parent());
				if(opts){
					opts.mode = 'datepicker';
					cal.dcalendar(opts);
				} else{
					cal.dcalendar({mode: 'datepicker'});
				}
				cal.hover(function(){
					hovered = true;
				}, function(){
					hovered = false;
				}).on('click', function(){
					if(!selectedDate)
						that.focus();
					else {
						selectedDate = false;
//修改
						$(this).hide();
						initBackColor();
						var staTime = $('#mydatepicker').val()+" 00:00:00";
						var endTime = $('#mydatepicker').val()+" 23:59:59";
						findMeet(staTime,endTime);
						//alert(staTime + "--" + endTime);
					}
				}).on('selectdate', function(e){
					that.val(e.date).trigger('onchange');
				    that.trigger($.Event('dateselected', {date: e.date, elem: that}));
					selectedDate = true;
				});
				that.on('keydown', function(e){ if(e.which) return false; })
					.on('focus', function(){
						$('.datepicker').find('.calendar').not(cal).hide();
						cal.show();
					})
					.on('blur', function(){ if(!hovered) cal.hide(); });
			}
		});
	}

}(jQuery);

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

//封装ajax
function findMeet(staTime,endTime){
	$.ajax({
		 type : "POST",
		 url : propath()+ "/meeting/findMeetByTimeByAli",
		 cache: true,
		 data : {
			 		"staTime" : staTime,
			 		"endTime" : endTime
			 	},
		 dataType : "json",
		 success : function(data) {
			 for(var i = 0; i < data.length; i++){
				 var roomId = data[i].meetRoomId;
				 var roomTy = findRoom(roomId);
				 var sta = new Date(data[i].staTime);
				 var end = new Date(data[i].endTime);
				 var shour = sta.getHours();
				 var sminutes = sta.getMinutes();
				 var ehour = end.getHours();
				 var eminutes = end.getMinutes();
				 if(roomTy == "爱康"){
					 fillStaColAndTil(shour,ehour,sminutes,"tb1",roomId,data[i].meetTheme,data[i].meetId);
					 fillEndColAndTil(ehour,eminutes,"tb1",roomId,data[i].meetTheme,data[i].meetId,shour);
				 }else if(roomTy == "爱旭"){
					 //alert(2);
					 fillStaColAndTil(shour,ehour,sminutes,"tb2",roomId,data[i].meetTheme,data[i].meetId);
					 fillEndColAndTil(ehour,eminutes,"tb2",roomId,data[i].meetTheme,data[i].meetId,shour);
				 }
			 }
			}
		});
}

//方法：填充大于1的表格颜色
function fillFollowTd(shour,ehour,tbid,roomId,meetTheme,k,meetId){
	 if((ehour-shour)>1 && shour>7 && ehour<18){
		 for(var i=1; i<ehour-shour;i++){
			 remClickDiv(tbid,roomId,k+i,0);
			 remClickDiv(tbid,roomId,k+i,1);
			 fillColorAndSetTitle(tbid,roomId,k+i,meetTheme);
			 initClickDiv(tbid,roomId,k+i,0,meetId);
			 initClickDiv(tbid,roomId,k+i,1,meetId);
		 }
	 }else if((ehour-shour)>1 && shour>=18 && shour<=20 && ehour>=22){
		 remClickDiv(tbid,roomId,13,1);
		 fillHerfColor(tbid,roomId,13,1,meetTheme);
		 initClickDiv(tbid,roomId,13,1,meetId);
	 }else if((ehour-shour)>1 && shour<8 && shour>=0 && ehour<8){
		 if(shour<=2 && ehour>=4){
			 remClickDiv(tbid,roomId,2,0);
			 fillHerfColor(tbid,roomId,2,0,meetTheme);
			 initClickDiv(tbid,roomId,2,0,meetId);
		 }
		 remClickDiv(tbid,roomId,1,1);
		 fillHerfColor(tbid,roomId,1,1,meetTheme);
		 initClickDiv(tbid,roomId,1,1,meetId);
	 }else if((ehour-shour)>1 && shour>7 && shour<18 && ehour>=18){
		 if(ehour>=22){
			 remClickDiv(tbid,roomId,13,0);
			 remClickDiv(tbid,roomId,13,1);
			 fillColorAndSetTitle(tbid,roomId,13,meetTheme);
			 initClickDiv(tbid,roomId,13,0,meetId);
			 initClickDiv(tbid,roomId,13,1,meetId);
			 remClickDiv(tbid,roomId,14,0);
			 fillHerfColor(tbid,roomId,14,0,meetTheme);
			 initClickDiv(tbid,roomId,14,0,meetId);
		 }
		 for(var i=1; i<18-shour;i++){
			 remClickDiv(tbid,roomId,k+i,0);
			 remClickDiv(tbid,roomId,k+i,1);
			 fillColorAndSetTitle(tbid,roomId,k+i,meetTheme);
			 initClickDiv(tbid,roomId,k+i,0,meetId);
			 initClickDiv(tbid,roomId,k+i,1,meetId);
		 }
	 }else if((ehour-shour)>1 && shour<=7 && ehour>7 && ehour<18){
		 if(shour<4){
			 remClickDiv(tbid,roomId,2,0);
			 remClickDiv(tbid,roomId,2,1);
			 fillColorAndSetTitle(tbid,roomId,2,meetTheme);
			 initClickDiv(tbid,roomId,2,0,meetId);
			 initClickDiv(tbid,roomId,2,1,meetId);
		 }
		 if(shour<2){
			 remClickDiv(tbid,roomId,1,1);
			 fillHerfColor(tbid,roomId,1,1,meetTheme);
			 initClickDiv(tbid,roomId,1,1,meetId);
		 }
		 if(shour>=4 && shour<6){
			 remClickDiv(tbid,roomId,2,1);
			 fillHerfColor(tbid,roomId,2,1,meetTheme);
			 initClickDiv(tbid,roomId,2,1,meetId);
		 }
		 for(var i=0; i<ehour-8;i++){
			 remClickDiv(tbid,roomId,3+i,0);
			 remClickDiv(tbid,roomId,3+i,1);
			 fillColorAndSetTitle(tbid,roomId,3+i,meetTheme);
			 initClickDiv(tbid,roomId,3+i,0,meetId);
			 initClickDiv(tbid,roomId,3+i,1,meetId);
		 }
	 }else if((ehour-shour)>1 && shour<=7 && ehour>=18){
		 if(ehour>=22){
			 remClickDiv(tbid,roomId,13,0);
			 remClickDiv(tbid,roomId,13,1);
			 fillColorAndSetTitle(tbid,roomId,13,meetTheme);
			 initClickDiv(tbid,roomId,13,0,meetId);
			 initClickDiv(tbid,roomId,13,1,meetId);
			 remClickDiv(tbid,roomId,14,0);
			 fillHerfColor(tbid,roomId,14,0,meetTheme);
			 initClickDiv(tbid,roomId,14,0,meetId);
		 }
		 if(shour<4){
			 remClickDiv(tbid,roomId,2,0);
			 remClickDiv(tbid,roomId,2,1);
			 fillColorAndSetTitle(tbid,roomId,2,meetTheme);
			 initClickDiv(tbid,roomId,2,0,meetId);
			 initClickDiv(tbid,roomId,2,1,meetId);
		 }
		 if(shour<2){
			 remClickDiv(tbid,roomId,1,1);
			 fillHerfColor(tbid,roomId,1,1,meetTheme);
			 initClickDiv(tbid,roomId,1,1,meetId);
		 }
		 if(shour>=4 && shour<6){
			 remClickDiv(tbid,roomId,2,1);
			 fillHerfColor(tbid,roomId,2,1,meetTheme);
			 initClickDiv(tbid,roomId,2,1,meetId);
		 }
		 for(var i=0; i<=12-k;i++){
			 remClickDiv(tbid,roomId,k+i,0);
			 remClickDiv(tbid,roomId,k+i,1);
			 fillColorAndSetTitle(tbid,roomId,k+i,meetTheme);
			 initClickDiv(tbid,roomId,k+i,0,meetId);
			 initClickDiv(tbid,roomId,k+i,1,meetId);
		 }
	 }
}

//方法：移除-填充开始时间颜色标题
function fillStaColAndTil(shour,ehour,sminutes,tbid,roomId,meetTheme,meetId){
	switch(shour)
	 {
	 case 0:case 1:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,1,meetId);
		 remClickDiv(tbid,roomId,1,0);
		 fillHerfColor(tbid,roomId,1,0,meetTheme);
		 initClickDiv(tbid,roomId,1,0,meetId);
		 break;
	 case 2:case 3:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,1,meetId);
		 remClickDiv(tbid,roomId,1,1);
		 fillHerfColor(tbid,roomId,1,1,meetTheme);
		 initClickDiv(tbid,roomId,1,1,meetId);
		 break;
	 case 4:case 5:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,2,meetId);
		 remClickDiv(tbid,roomId,2,0);
		 fillHerfColor(tbid,roomId,2,0,meetTheme);
		 initClickDiv(tbid,roomId,2,0,meetId);
		 break;
	 case 6:case 7:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,2,meetId);
		 remClickDiv(tbid,roomId,2,1);
		 fillHerfColor(tbid,roomId,2,1,meetTheme);
		 initClickDiv(tbid,roomId,2,1,meetId);
		 break;
	 case 8:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,3,meetId);
		 if(sminutes < 30){
			 remClickDiv(tbid,roomId,3,0);
			 remClickDiv(tbid,roomId,3,1);
			 fillColorAndSetTitle(tbid,roomId,3,meetTheme);
			 initClickDiv(tbid,roomId,3,0,meetId);
			 initClickDiv(tbid,roomId,3,1,meetId);
		 }else{
			 remClickDiv(tbid,roomId,3,1);
			 fillHerfColor(tbid,roomId,3,1,meetTheme);
			 initClickDiv(tbid,roomId,3,1,meetId);
		 }
		 break;
	 case 9:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,4,meetId);
		 if(sminutes < 30){
			 remClickDiv(tbid,roomId,4,0);
			 remClickDiv(tbid,roomId,4,1);
			 fillColorAndSetTitle(tbid,roomId,4,meetTheme);
			 initClickDiv(tbid,roomId,4,0,meetId);
			 initClickDiv(tbid,roomId,4,1,meetId);
		 }else{
			 remClickDiv(tbid,roomId,4,1);
			 fillHerfColor(tbid,roomId,4,1,meetTheme);
			 initClickDiv(tbid,roomId,4,1,meetId);
		 }
		 break;
	 case 10:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,5,meetId);
		 if(sminutes < 30){
			 remClickDiv(tbid,roomId,5,0);
			 remClickDiv(tbid,roomId,5,1);
			 fillColorAndSetTitle(tbid,roomId,5,meetTheme);
			 initClickDiv(tbid,roomId,5,0,meetId);
			 initClickDiv(tbid,roomId,5,1,meetId);
		 }else{
			 remClickDiv(tbid,roomId,5,1);
			 fillHerfColor(tbid,roomId,5,1,meetTheme);
			 initClickDiv(tbid,roomId,5,1,meetId);
		 }
		 break;
	 case 11:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,5,meetId);
		 if(sminutes < 30){
			 remClickDiv(tbid,roomId,6,0);
			 remClickDiv(tbid,roomId,6,1);
			 fillColorAndSetTitle(tbid,roomId,6,meetTheme);
			 initClickDiv(tbid,roomId,6,0,meetId);
			 initClickDiv(tbid,roomId,6,1,meetId);
		 }else{
			 remClickDiv(tbid,roomId,6,1);
			 fillHerfColor(tbid,roomId,6,1,meetTheme);
			 initClickDiv(tbid,roomId,6,1,meetId);
		 }
		 break;
	 case 12:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,7,meetId);
		 if(sminutes < 30){
			 remClickDiv(tbid,roomId,7,0);
			 remClickDiv(tbid,roomId,7,1);
			 fillColorAndSetTitle(tbid,roomId,7,meetTheme);
			 initClickDiv(tbid,roomId,7,0,meetId);
			 initClickDiv(tbid,roomId,7,1,meetId);
		 }else{
			 remClickDiv(tbid,roomId,7,1);
			 fillHerfColor(tbid,roomId,7,1,meetTheme);
			 initClickDiv(tbid,roomId,7,1,meetId);
		 }
		 break;
	 case 13:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,8,meetId);
		 if(sminutes < 30){
			 remClickDiv(tbid,roomId,8,0);
			 remClickDiv(tbid,roomId,8,1);
			 fillColorAndSetTitle(tbid,roomId,8,meetTheme);
			 initClickDiv(tbid,roomId,8,0,meetId);
			 initClickDiv(tbid,roomId,8,1,meetId);
		 }else{
			 remClickDiv(tbid,roomId,8,1);
			 fillHerfColor(tbid,roomId,8,1,meetTheme);
			 initClickDiv(tbid,roomId,8,1,meetId);
		 }
		 break;
	 case 14:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,9,meetId);
		 if(sminutes < 30){
			 remClickDiv(tbid,roomId,9,0);
			 remClickDiv(tbid,roomId,9,1);
			 fillColorAndSetTitle(tbid,roomId,9,meetTheme);
			 initClickDiv(tbid,roomId,9,0,meetId);
			 initClickDiv(tbid,roomId,9,1,meetId);
		 }else{
			 remClickDiv(tbid,roomId,9,1);
			 fillHerfColor(tbid,roomId,9,1,meetTheme);
			 initClickDiv(tbid,roomId,9,1,meetId);
		 }
		 break;
	 case 15:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,10,meetId);
		 if(sminutes < 30){
			 remClickDiv(tbid,roomId,10,0);
			 remClickDiv(tbid,roomId,10,1);
			 fillColorAndSetTitle(tbid,roomId,10,meetTheme);
			 initClickDiv(tbid,roomId,10,0,meetId);
			 initClickDiv(tbid,roomId,10,1,meetId);
		 }else{
			 remClickDiv(tbid,roomId,10,1);
			 fillHerfColor(tbid,roomId,10,1,meetTheme);
			 initClickDiv(tbid,roomId,10,1,meetId);
		 }
		 break;
	 case 16:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,11,meetId);
		 if(sminutes < 30){
			 remClickDiv(tbid,roomId,11,0);
			 remClickDiv(tbid,roomId,11,1);
			 fillColorAndSetTitle(tbid,roomId,11,meetTheme);
			 initClickDiv(tbid,roomId,11,0,meetId);
			 initClickDiv(tbid,roomId,11,1,meetId);
		 }else{
			 remClickDiv(tbid,roomId,11,1);
			 fillHerfColor(tbid,roomId,11,1,meetTheme);
			 initClickDiv(tbid,roomId,11,1,meetId);
		 }
		 break;
	 case 17:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,12,meetId);
		 if(sminutes < 30){
			 remClickDiv(tbid,roomId,12,0);
			 remClickDiv(tbid,roomId,12,1);
			 fillColorAndSetTitle(tbid,roomId,12,meetTheme);
			 initClickDiv(tbid,roomId,12,0,meetId);
			 initClickDiv(tbid,roomId,12,1,meetId);
		 }else{
			 remClickDiv(tbid,roomId,12,1);
			 fillHerfColor(tbid,roomId,12,1,meetTheme);
			 initClickDiv(tbid,roomId,12,1,meetId);
		 }
		 break;
	 case 18:case 19:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,13,meetId);
			 remClickDiv(tbid,roomId,13,0);
			 fillHerfColor(tbid,roomId,13,0,meetTheme);
			 initClickDiv(tbid,roomId,13,0,meetId);
		 break;
	 case 20:case 21:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,13,meetId);
		 remClickDiv(tbid,roomId,13,1);
		 fillHerfColor(tbid,roomId,13,1,meetTheme);
		 initClickDiv(tbid,roomId,13,1,meetId);
		 break;
	 case 22:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,14,meetId);
		 remClickDiv(tbid,roomId,14,0);
		 fillHerfColor(tbid,roomId,14,0,meetTheme);
		 initClickDiv(tbid,roomId,14,0,meetId);
		 break;
	 case 23:
		 fillFollowTd(shour,ehour,tbid,roomId,meetTheme,14,meetId);
		 remClickDiv(tbid,roomId,14,1);
		 fillHerfColor(tbid,roomId,14,1,meetTheme);
		 initClickDiv(tbid,roomId,14,1,meetId);
		 break;
	 default:
		 break;
	 }
}
//移除设置结束时间属性
function fillEndColAndTil(ehour,eminutes,tbid,roomId,meetTheme,meetId,shour){
	switch(ehour)
	{
	case 0:
		if(eminutes==30){
			remClickDiv(tbid,roomId,1,0);
			fillHerfColor(tbid,roomId,1,0,meetTheme);
			initClickDiv(tbid,roomId,1,0,meetId);
		}
		break;
	case 1:
		remClickDiv(tbid,roomId,1,0);
		fillHerfColor(tbid,roomId,1,0,meetTheme);
		initClickDiv(tbid,roomId,1,0,meetId);
		break;
	case 2:
		if(eminutes==30){
			remClickDiv(tbid,roomId,1,1);
			fillHerfColor(tbid,roomId,1,1,meetTheme);
			initClickDiv(tbid,roomId,1,1,meetId);
		}else{
			remClickDiv(tbid,roomId,1,0);
			fillHerfColor(tbid,roomId,1,0,meetTheme);
			initClickDiv(tbid,roomId,1,0,meetId);
		}
		break;
	case 3:
		remClickDiv(tbid,roomId,1,1);
		fillHerfColor(tbid,roomId,1,1,meetTheme);
		initClickDiv(tbid,roomId,1,1,meetId);
		break;
	case 4:
		if(eminutes==30){
			remClickDiv(tbid,roomId,2,0);
			fillHerfColor(tbid,roomId,2,0,meetTheme);
			initClickDiv(tbid,roomId,2,0,meetId);
		}
		break;
	case 5:
		remClickDiv(tbid,roomId,2,0);
		fillHerfColor(tbid,roomId,2,0,meetTheme);
		initClickDiv(tbid,roomId,2,0,meetId);
		break;
	case 6:
		if(eminutes==30){
			remClickDiv(tbid,roomId,2,1);
			fillHerfColor(tbid,roomId,2,1,meetTheme);
			initClickDiv(tbid,roomId,2,1,meetId);
		}else{
			remClickDiv(tbid,roomId,2,0);
			fillHerfColor(tbid,roomId,2,0,meetTheme);
			initClickDiv(tbid,roomId,2,0,meetId);
		}
		break;
	case 7:
		remClickDiv(tbid,roomId,2,1);
		fillHerfColor(tbid,roomId,2,1,meetTheme);
		initClickDiv(tbid,roomId,2,1,meetId);
		break;
	case 8:
		if(eminutes==30){
			remClickDiv(tbid,roomId,3,0);
			fillHerfColor(tbid,roomId,3,0,meetTheme);
			initClickDiv(tbid,roomId,3,0,meetId);
		}
		break;
	case 9:
		if(eminutes==30){
			remClickDiv(tbid,roomId,4,0);
			fillHerfColor(tbid,roomId,4,0,meetTheme);
			initClickDiv(tbid,roomId,4,0,meetId);
		}
		break;
	case 10:
		if(eminutes==30){
			remClickDiv(tbid,roomId,5,0);
			fillHerfColor(tbid,roomId,5,0,meetTheme);
			initClickDiv(tbid,roomId,5,0,meetId);
		}
		break;
	case 11:
		if(eminutes==30){
			remClickDiv(tbid,roomId,6,0);
			fillHerfColor(tbid,roomId,6,0,meetTheme);
			initClickDiv(tbid,roomId,6,0,meetId);
		}
		break;
	case 12:
		if(eminutes==30){
			remClickDiv(tbid,roomId,7,0);
			fillHerfColor(tbid,roomId,7,0,meetTheme);
			initClickDiv(tbid,roomId,7,0,meetId);
		}
		break;
	case 13:
		if(eminutes==30){
			remClickDiv(tbid,roomId,8,0);
			fillHerfColor(tbid,roomId,8,0,meetTheme);
			initClickDiv(tbid,roomId,8,0,meetId);
		}
		break;
	case 14:
		if(eminutes==30){
			remClickDiv(tbid,roomId,9,0);
			fillHerfColor(tbid,roomId,9,0,meetTheme);
			initClickDiv(tbid,roomId,9,0,meetId);
		}
		break;
	case 15:
		if(eminutes==30){
			remClickDiv(tbid,roomId,10,0);
			fillHerfColor(tbid,roomId,10,0,meetTheme);
			initClickDiv(tbid,roomId,10,0,meetId);
		}
		break;
	case 16:
		if(eminutes==30){
			remClickDiv(tbid,roomId,11,0);
			fillHerfColor(tbid,roomId,11,0,meetTheme);
			initClickDiv(tbid,roomId,11,0,meetId);
		}
		break;
	case 17:
		if(eminutes==30){
			remClickDiv(tbid,roomId,12,0);
			fillHerfColor(tbid,roomId,12,0,meetTheme);
			initClickDiv(tbid,roomId,12,0,meetId);
		}
		break;
	case 18:
		if(eminutes==30){
			remClickDiv(tbid,roomId,13,0);
			fillHerfColor(tbid,roomId,13,0,meetTheme);
			initClickDiv(tbid,roomId,13,0,meetId);
		}
		break;
	case 19:
			remClickDiv(tbid,roomId,13,0);
			fillHerfColor(tbid,roomId,13,0,meetTheme);
			initClickDiv(tbid,roomId,13,0,meetId);
		break;
	case 20:
		remClickDiv(tbid,roomId,13,0);
		fillHerfColor(tbid,roomId,13,0,meetTheme);
		initClickDiv(tbid,roomId,13,0,meetId);
		break;
	case 21:
		remClickDiv(tbid,roomId,13,1);
		fillHerfColor(tbid,roomId,13,1,meetTheme);
		initClickDiv(tbid,roomId,13,1,meetId);
		break;
	case 22:
		if(eminutes==30){
			remClickDiv(tbid,roomId,14,0);
			fillHerfColor(tbid,roomId,14,0,meetTheme);
			initClickDiv(tbid,roomId,14,0,meetId);
		}
		break;
	case 23:
		if(eminutes==30){
			remClickDiv(tbid,roomId,14,1);
			fillHerfColor(tbid,roomId,14,1,meetTheme);
			initClickDiv(tbid,roomId,14,1,meetId);
		}else{
			remClickDiv(tbid,roomId,14,0);
			fillHerfColor(tbid,roomId,14,0,meetTheme);
			initClickDiv(tbid,roomId,14,0,meetId);
		}
		break;
	default:
		break;
	}
}

//方法：移除点击事件
function remClickDiv(tbid,trid,tdid,divId){
	$("#"+tbid).find("#"+trid).find("td:eq("+tdid+")").find("div:eq("+divId+")").unbind("click");
}
function remClickTd(tbid,trid,tdid){
	$("#"+tbid).find("#"+trid).find("td:eq("+tdid+")").unbind("click");
}

//方法：设置点击事件
function initClickDiv(tbid,trid,tdid,divId,meetId){
	$("#"+tbid).find("#"+trid).find("td:eq("+tdid+")").find("div:eq("+divId+")").click(function(){
		//判断当前登录信息
		
		//mizhu.open(400, 460, '会 议 详 情', propath()+'/meeting/showInfo/'+meetId);
		openwindow(propath()+'/meeting/showInfo/'+meetId,"",700,500);
	});
}
function initClickTd(tbid,trid,tdid){
	$("#"+tbid).find("#"+trid).find("td:eq("+tdid+")").click(function(){
		alert(3);
	});
}

//方法：填充一半
function fillHerfColor(tbid,trid,tdid,divId,meetTheme){
	$("#"+tbid).find("#"+trid).find("td:eq("+tdid+")").find("div:eq("+divId+")").css('background-color','#FF4500');
	$("#"+tbid).find("#"+trid).find("td:eq("+tdid+")").find("div:eq("+divId+")").attr("title", meetTheme);
}

//方法：填充背景色+设置标题，三个参数：表id，行id，列id
function fillColorAndSetTitle(tbid,trid,tdid,meetTheme){
	$("#"+tbid).find("#"+trid).find("td:eq("+tdid+")").css('background-color','#FF4500');
	$("#"+tbid).find("#"+trid).find("td:eq("+tdid+")").attr("title", meetTheme);
}

//根据id查询会议室所属爱康/爱旭
function findRoom(roomId){
	var romTy;
	$.ajax({
		async:false, //转换成同步
		type : "get",
		url : propath() + "/meetingRoom/findRoomById/" + roomId,
		cache : true,
		dataType : "json",
		success : function(data){
			romTy = data.resTow;
		}
	});
	return romTy;
}

//鼠标悬停显示信息
function showInfo(roomId,tId){
	var showInfo = document.getElementById(tId);
	$.ajax({
		type : "get",
		url : propath() + "/meetingRoom/findRoomById/" + roomId,
		cache: true,
		dataType : "json",
		success : function(data){
			var meetRoomNum = data.meetRoomNum;
			var isRoomPro = data.isRoomPro == 1? "有":"无";
			var info = "可容纳人数：" + meetRoomNum + "," + isRoomPro + "投影仪";
			showInfo.setAttribute("title", info); 
		}
	});
}

//初始化页面背景色
function initBackColor(){
	for(var i = 1; i < 11; i++){
		for(var j = 1; j < 15; j++){
			$("#tb1").find("tr:eq("+i+")").find("td:eq("+j+")").css('background-color','rgba(73,74,95,0)');
			for(var k = 0; k<2; k++){
				$("#tb1").find("tr:eq("+i+")").find("td:eq("+j+")").find("div:eq("+k+")").css('background-color','rgba(73,74,95,0)');
			}
		}
	}
	for(var i = 1; i < 8; i++){
		for(var j = 1; j < 15; j++){
			$("#tb2").find("tr:eq("+i+")").find("td:eq("+j+")").css('background-color','rgba(73,74,95,0)');
			for(var k = 0; k<2; k++){
				$("#tb2").find("tr:eq("+i+")").find("td:eq("+j+")").find("div:eq("+k+")").css('background-color','rgba(73,74,95,0)');
			}
		}
	}
}

//初始化点击事件
function initClick(){
	for(var i = 1; i < 11; i++){
		for(var j = 1; j < 15; j++){
			for(var k = 0; k<2; k++){
				$("#tb1").find("tr:eq("+i+")").find("td:eq("+j+")").find("div:eq("+k+")").click(function(){
					location.href=propath()+"/test/index4";
				});
			}
		}
	}
	for(var i = 1; i < 8; i++){
		for(var j = 1; j < 15; j++){
			for(var k = 0; k<2; k++){
				$("#tb2").find("tr:eq("+i+")").find("td:eq("+j+")").find("div:eq("+k+")").click(function(){
					location.href=propath()+"/test/index4";
				});
			}
		}
	}
}

//显示当前日期
function showLeftTime(){
	var now=new Date();
	var year=now.getFullYear();
	var month=now.getMonth()+1;
	var day=now.getDate();
	var week=now.getDay();
	 switch(week)
	  {
	    case 1:week="星期一 ";break;
	    case 2:week="星期二 ";break;
	    case 3:week="星期三 ";break;
	    case 4:week="星期四 ";break;
	    case 5:week="星期五 ";break;
	    case 6:week="星期六 ";break;
	    case 0:week="星期日 ";break;
	    default:week="";break;
	  }
	 var lefime = year+"年"+month+"月"+day+"日"+" "+week;
	 $("#mydatepicker").val(lefime);
}

//弹窗
function openwindow(url,name,iWidth,iHeight){
	var url; //转向网页的地址;
	var name; //网页名称，可为空;
	var iWidth; //弹出窗口的宽度;
	var iHeight; //弹出窗口的高度;
	//window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
	var iTop = (window.screen.height-30-iHeight)/2; //获得窗口的垂直位置;
	var iLeft = (window.screen.width-10-iWidth)/2; //获得窗口的水平位置;
	window.open(url,name,'height='+iHeight+',,innerHeight='+iHeight
			+',width='+iWidth+',innerWidth='+iWidth
			+',top='+iTop+',left='+iLeft
			+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}

//页面加载完自启动方法
$(document).ready(function() {
	showLeftTime();
	initBackColor();
	initClick();
	var d = new Date();
	var year = d.getFullYear();
	var month = (d.getMonth()+1)<10?("-0"+(d.getMonth()+1)):("-"+d.getMonth()+1);
	var date = (d.getDate()+1)<10?("-0"+d.getDate()):("-"+d.getDate());
	var todays = year + month + date +" 00:00:00";
	var todaye = year + month + date +" 23:59:59";
	findMeet(todays,todaye);
});