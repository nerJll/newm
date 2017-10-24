package com.aiko.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

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

import com.aiko.domain.Meeting;
import com.aiko.domain.MeetingRoom;
import com.aiko.service.MeetingRoomService;
import com.aiko.service.MeetingService;
import com.aiko.util.DateUtil;
import com.alibaba.fastjson.JSON;
import com.github.pagehelper.PageInfo;

@Controller
@RequestMapping(value = "meeting")
public class MeetingController {
	private final static String PATTERN = "yyyy-MM-dd HH:mm:ss";
	@Autowired
	private MeetingService meetingService;
	@Autowired
	private MeetingRoomService meetingRoomService;

	@GetMapping(value = "/toAddMeet")
	public String toAddMeet() {
		return "meeting/addMeeting";
	}

	@PostMapping(value = "/addMeet")
	public String addMeet(Meeting meeting) {
		meeting.setResOne("待审核");
		meetingService.addMeeting(meeting);
		return "redirect:/emp/listmeeting?empid=1016002";
	}

	@RequestMapping("/index")
	public String getMeetingList(@RequestParam(name = "lauEmpId", required = false) Integer lauEmpId,
			@RequestParam(name = "staTime", required = false) Date staTime,
			@RequestParam(name = "endTime", required = false) Date endTime,
			@RequestParam(name = "meetTheme", required = false) String meetTheme,
			@RequestParam(name = "currentPage", defaultValue = "1", required = false) int currentPage,
			@RequestParam(name = "pageSize", defaultValue = "5", required = false) int pageSize, ModelMap map) {
		Map<String, Object> params = new HashMap<>(4);
		params.put("lauEmpId", lauEmpId);
		params.put("staTime", staTime);
		params.put("endTime", endTime);
		params.put("meetTheme", meetTheme);
		PageInfo<Meeting> meetList = meetingService.findMeetingList(currentPage, pageSize, params);
		map.addAttribute("pageInfo", meetList);
		return "meeting/index";
	}

	@GetMapping(value = "/deleteMeet/{meetIds}")
	public String deleteRoom(@PathVariable("meetIds") Integer[] meetIds) {
		meetingService.deleteMeeting(meetIds);
		return "redirect:/meeting/index";
	}

	@GetMapping(value = "/showInfo/{meetId}")
	public String showInfo(@PathVariable("meetId") Integer meetId, ModelMap map) {
		map.put("meetId", meetId);
		Meeting meeting = meetingService.findMeetingList(map);
		map.put("meetInfo", meeting);
		return "meeting/showMeetingInfo";
	}

	@PostMapping("/findfreeroom")
	@ResponseBody
	public List<MeetingRoom> findFreeRoom(@RequestParam(name = "isPro", required = true) String isPro,
			@RequestParam(name = "meetRoomNum", required = true) String meetRoomNum,
			@RequestParam(name = "staTime", required = true) String staTime,
			@RequestParam(name = "endTime", required = true) String endTime) {
		Map<String, Object> mapMeet = new HashMap<String, Object>(2);
		Map<String, Object> mapRoom = new HashMap<String, Object>(2);
		mapMeet.put("staTime", DateUtil.formatDate(staTime, PATTERN));
		mapMeet.put("endTime", DateUtil.formatDate(endTime, PATTERN));
		mapRoom.put("meetRoomNum", meetRoomNum);
		mapRoom.put("isRoomPro", isPro);
		// 查询所有时间段内的会议集合
		List<Meeting> meetList = meetingService.findMeetingByTime(mapMeet);
		// 查询所有投影与人数条件的会议室集合
		List<MeetingRoom> roomList = meetingRoomService.findMeetingRoomByisProAndNum(mapRoom);
		// 遍历以上两个集合
		for (int i = 0; i < meetList.size(); i++)
			for (int j = 0; j < roomList.size(); j++) {
				// 如果会议集合内的元素meetRoomId与会议室集合的元素id相等
				if (meetList.get(i).getMeetType().equals("视频会议")) {
					String[] ids = meetList.get(i).getResThree().split(",");
					for (int k = 0; k < ids.length; k++)
						if (roomList.get(j).getMeetRoomId().equals(new Integer(ids[k])))
							roomList.get(j).setMeetRoomState(1);
				} else if (meetList.get(i).getMeetRoomId().equals(roomList.get(j).getMeetRoomId())) {
					roomList.get(j).setMeetRoomState(1);
				}
			}
		return roomList;
	}

	@RequestMapping("/toUpdate/{meetId}")
	public String toUpdateView(@PathVariable("meetId") Integer id, Model model) {
		Map<String, Object> map = new HashMap<String, Object>(1);
		map.put("meetId", id);
		Meeting meeting = meetingService.findMeetingList(map);
		model.addAttribute("meeting", meeting);
		return "meeting/updateMeeting";
	}

	@RequestMapping("/update")
	public String updateMeeting(Meeting meeting) {
		meetingService.updateMeeting(meeting);
		return "redirect:/meeting/index";
	}

	@PostMapping("/findMeetByTime")
	@ResponseBody
	public List<Meeting> findMeetByTime(@RequestParam("staTime") String staTime,
			@RequestParam("endTime") String endTime) {
		Date staTime1 = DateUtil.formatDate(staTime, PATTERN);
		Date endTime1 = DateUtil.formatDate(endTime, PATTERN);
		return meetingService.findMeetByTime(staTime1, endTime1);
	}

	/**
	 * 使用Alibaba-FastJson获取Unix时间戳
	 * 
	 * @param staTime
	 * @param endTime
	 * @param resp
	 * @throws IOException
	 * @throws CloneNotSupportedException
	 */
	@PostMapping("/findMeetByTimeByAli")
	public void findMeetByTime(@RequestParam("staTime") String staTime, @RequestParam("endTime") String endTime,
			HttpServletResponse resp) throws IOException, CloneNotSupportedException {
		resp.setContentType("application/json;charset=UTF-8");
		Date staTime1 = DateUtil.formatDate(staTime, PATTERN);
		Date endTime1 = DateUtil.formatDate(endTime, PATTERN);
		List<Meeting> list = meetingService.findMeetByTime(staTime1, endTime1);
		List<Meeting> listOne = new ArrayList<Meeting>();
		Meeting meetSon = null;
		if (list.size() > 0) {
			for (Meeting meeting : list) {
				if (meeting.getMeetType().equals("视频会议")) {
					String[] roomIds = meeting.getResThree().split(",");
					for (int i = 0; i < roomIds.length; i++) {
						meeting.setMeetRoomId(new Integer(roomIds[i]));
						meetSon = (Meeting) meeting.clone();
						listOne.add(meetSon);
					}
				} else {
					listOne.add(meeting);
				}
			}
		}
		PrintWriter out = resp.getWriter();
		String json = JSON.toJSONString(listOne);
		out.print(json);
		out.flush();
		out.close();
	}

	/**
	 * 添加视频会议，设置其默认类型为‘视频会议’
	 * 
	 * @param meeting
	 *            对象实体
	 * @return 前台预定主界面
	 */
	@PostMapping("/addVideoMeeting")
	public String addVideoMeeting(Meeting meeting) {
		meeting.setResOne("待审核");
		meeting.setMeetType("视频会议");
		meeting.setMeetRoomId(100001);
		meetingService.addMeeting(meeting);
		return "redirect:/emp/listmeeting?empid=1016002";
	}

	@RequestMapping(value = "showRoomInfo")
	public String showRoomInfo(@RequestParam(name = "roomId", required = true) Integer roomId,
			@RequestParam(name = "staTime", required = false) String staTime, ModelMap map) throws ParseException {
		// 查询今天的会议
		Date staTime2 = null;
		Date endTime2 = null;
		if (staTime != null && !staTime.equals("")) {
			staTime2 = DateUtil.formatDate(staTime + " 00:00:00", PATTERN);
			endTime2 = DateUtil.formatDate(staTime + " 23:59:59", PATTERN);
		} else {
			String staTime1 = new SimpleDateFormat("yyyy-MM-dd").format(new Date()) + " 00:00:00";
			String endTime1 = new SimpleDateFormat("yyyy-MM-dd").format(new Date()) + " 23:59:59";

			staTime2 = DateUtil.formatDate(staTime1, PATTERN);
			endTime2 = DateUtil.formatDate(endTime1, PATTERN);
		}
		List<Meeting> meetList = meetingService.findMeetByTime(staTime2, endTime2);
		List<Meeting> reMeetList = new ArrayList<>();
		for (int i = 0; i < meetList.size(); i++) {
			if (meetList.get(i).getMeetType().equals("视频会议")) {
				String[] roomIds = meetList.get(i).getResThree().split(",");
				for (int j = 0; j < roomIds.length; j++) {
					if (roomId.equals(new Integer(roomIds[j]))) {
						reMeetList.add(meetList.get(i));
					}
				}
			} else {
				if (roomId.equals(meetList.get(i).getMeetRoomId())) {
					reMeetList.add(meetList.get(i));
				}
			}
		}
		if (reMeetList.size() == 0) {
			map.addAttribute("errorInfo", new SimpleDateFormat("yyyy年MM月dd日").format(staTime2) + "当前会议室无占用情况");
		}
		Map<String, Object> params = new HashMap<>(1);
		params.put("meetRoomId", roomId);
		map.addAttribute("room", meetingRoomService.findMeetingRoomList(params));
		map.addAttribute("meetList", reMeetList);
		return "meeting/showRoomMeet";
	}
	
	@GetMapping(value = "/transhome")
	public String transHome(){
		return "home/transHome";
	}
	
	@GetMapping(value = "/appAgain/{meetId}")
	public String appAgain(@PathVariable("meetId") Integer meetId,
			Model model) {
		Map<String,Object> map = new HashMap<>(1);
		map.put("meetId", meetId);
		Meeting meet = meetingService.findMeetingList(map);
		model.addAttribute("meet", meet);
		return "meeting/addAgain";
	}
}