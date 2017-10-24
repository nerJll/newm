package com.aiko.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.aiko.domain.Meeting;
import com.aiko.service.MeetingService;
import com.github.pagehelper.PageInfo;

@Controller
@RequestMapping("/emp")
public class EmployeeMeetingController {

	@Autowired
	private MeetingService meetingService;

	@RequestMapping("/listmeeting")
	public String listAllMeeting(@RequestParam(name = "empid",required = true) Integer empId,
			@RequestParam(name = "status", required = false) String resOne,
			@RequestParam(name = "currentPage", defaultValue = "1", required = false) int currentPage,
			@RequestParam(name = "pageSize", defaultValue = "5", required = false) int pageSize, Model model) {
		Map<String, Object> queryMap = new HashMap<String, Object>(1);
		queryMap.put("applyEmpId", empId);
		queryMap.put("resOne", resOne);
		PageInfo<Meeting> list = meetingService.findMeetingList(currentPage, pageSize, queryMap);
		model.addAttribute("empmeet", list);
		return "employee/employeeMeeting";
	}
}
