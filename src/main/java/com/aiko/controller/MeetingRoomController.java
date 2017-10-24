package com.aiko.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aiko.domain.MeetingRoom;
import com.aiko.service.MeetingRoomService;
import com.github.pagehelper.PageInfo;

@Controller
@RequestMapping("/meetingRoom")
public class MeetingRoomController {
	@Autowired
	private MeetingRoomService meetingRoomService;

	@RequestMapping("/index")
	public String roomIndex(@RequestParam(name = "meetRoomName", required = false) String meetRoomName,
			@RequestParam(name = "meetRoomNum", required = false) Integer meetRoomNum,
			@RequestParam(name = "isRoomPro", required = false) Integer isRoomPro, ModelMap map,
			@RequestParam(name = "currentPage", defaultValue = "1") Integer currentPage,
			@RequestParam(name = "pageSize", defaultValue = "5") Integer pageSize) {
		Map<String, Object> params = new HashMap<>(3);
		params.put("meetRoomName", meetRoomName);
		params.put("meetRoomNum", meetRoomNum);
		params.put("isRoomPro", isRoomPro);
		PageInfo<MeetingRoom> roomList = meetingRoomService.findMeetingRoomList(currentPage, pageSize, params);
		map.addAttribute("pageInfo", roomList);
		return "meetingroom/index";
	}

	@RequestMapping("/toUpdate/{id}")
	public String toUpdateView(@PathVariable("id") Integer id, Model model) {
		Map<String, Object> map = new HashMap<String, Object>(1);
		map.put("meetRoomId", id);
		MeetingRoom meetingRoom = meetingRoomService.findMeetingRoomList(map);
		model.addAttribute("room", meetingRoom);
		return "meetingroom/update-view";
	}

	@RequestMapping(value = "/toAddRoom")
	public String toAddRoom() {
		return "meetingroom/addRoom";
	}

	@PostMapping("/addRoom")
	public String addRoom(MeetingRoom meetingRoom) {
		meetingRoomService.addMeetingRoom(meetingRoom);
		return "redirect:/meetingRoom/index";
	}

	@GetMapping(value = "/deleteRoom/{meetRoomIds}")
	public String deleteRoom(@PathVariable("meetRoomIds") Integer[] meetRoomIds) {
		meetingRoomService.deleteMeetingRoom(meetRoomIds);
		return "redirect:/meetingRoom/index";
	}

	@RequestMapping("/update")
	public String updateRoom(MeetingRoom meetingRoom) {
		meetingRoomService.updateMeetingRoom(meetingRoom);
		return "redirect:/meetingRoom/index";
	}

	@GetMapping("/findRoomById/{roomId}")
	@ResponseBody
	public MeetingRoom findRoomById(@PathVariable("roomId") Integer roomId) {
		Map<String, Object> map = new HashMap<>(1);
		map.put("meetRoomId", roomId);
		return meetingRoomService.findMeetingRoomList(map);
	}
}
