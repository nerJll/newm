package com.aiko.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.aiko.domain.Meeting;
import com.aiko.service.MeetingService;
import com.github.pagehelper.PageInfo;

@Controller
@RequestMapping("/admin")
public class AdminMeetingController {

	@Autowired
	private MeetingService meetingService;

	
	@RequestMapping("/auditMeeting")
	public String listAllMeeting(@RequestParam(name = "status", required = false) String resOne,
			@RequestParam(name = "currentPage", defaultValue = "1", required = false) int currentPage,
			@RequestParam(name = "pageSize", defaultValue = "5", required = false) int pageSize, Model model) {
		Map<String,Object> map = new HashMap<String,Object>(1);
		map.put("resOne", resOne);
		PageInfo<Meeting> list = meetingService.findMeetingList(currentPage, pageSize,map);
		model.addAttribute("empmeet", list);
		return "admin/auditMeeting";
	}
	
	
	@GetMapping(value = "/showInfo/{meetId}")
	public String showInfo(@PathVariable("meetId") Integer meetId, ModelMap map) {
		map.put("meetId", meetId);
		Meeting meeting = meetingService.findMeetingList(map);
		map.put("meetInfo", meeting);
		return "admin/showMeetingInfo";
	}
	
	@GetMapping(value = "/showInfo1/{meetId}")
	public String showInfo1(@PathVariable("meetId") Integer meetId, ModelMap map) {
		map.put("meetId", meetId);
		Meeting meeting = meetingService.findMeetingList(map);
		map.put("meetInfo", meeting);
		return "admin/haveChecked";
	}
	
	
	
	@GetMapping(value = "/chagStatu1/{meetId}")
	public ModelAndView chgStatus(@PathVariable("meetId") Integer meetId){
		Map<String,Object> map = new HashMap<>(1);
		map.put("meetId", meetId);
		Meeting meeting = meetingService.findMeetingList(map);
		meeting.setResOne("已通过");
		meetingService.updateMeeting(meeting);
		return new ModelAndView("redirect:/admin/auditMeeting");
	}
	
	@GetMapping(value = "/chagStatu2/{meetId}")
	public ModelAndView chgStatus2(@PathVariable("meetId") Integer meetId){
		Map<String,Object> map = new HashMap<>(1);
		map.put("meetId", meetId);
		Meeting meeting = meetingService.findMeetingList(map);
		meeting.setResOne("未通过");
		meetingService.updateMeeting(meeting);
		return new ModelAndView("redirect:/admin/auditMeeting");
	}
}
