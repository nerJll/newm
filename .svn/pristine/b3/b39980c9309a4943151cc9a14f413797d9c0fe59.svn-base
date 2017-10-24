package com.aiko.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aiko.dao.MeetingDao;
import com.aiko.dao.MeetingRoomDao;
import com.aiko.domain.Meeting;
import com.aiko.domain.MeetingRoom;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class MeetingService {
	@Autowired
	private MeetingDao meetingDao;
	@Autowired
	private MeetingRoomDao meetingRoomDao;

	/*
	 * 添加会议
	 * 
	 * @param meeting
	 */
	@Transactional
	public void addMeeting(Meeting meeting) {
		meeting.setMeetApplyTime(new Date());
		Map<String, Object> map = new HashMap<>(1);
		StringBuilder sb = new StringBuilder();
		if (meeting.getMeetType().equals("视频会议")) {
			String[] ids = meeting.getResThree().split(",");
			for(int i = 0;i < ids.length; i++) {
				map.put("meetRoomId", new Integer(ids[i]));
				List<MeetingRoom> meetroom = meetingRoomDao.findMeetingRoomList(map);
				sb.append(meetroom.get(0).getMeetRoomName()).append(" ");
			}
			meeting.setMeetRoomName(sb.toString().trim());
			meetingDao.addMeeting(meeting);
		} else {
			map.put("meetRoomId", meeting.getMeetRoomId());
			List<MeetingRoom> meetroom = meetingRoomDao.findMeetingRoomList(map);
			meeting.setMeetRoomName(meetroom.get(0).getMeetRoomName());
			meetingDao.addMeeting(meeting);
		}
	}

	/**
	 * 根据客户端的查询条件分页查询相关的路由信息
	 * 
	 * @param params
	 *            查询条件
	 * @param currentPage
	 *            当前页码
	 * @param pageSize
	 *            每页记录数
	 * @return
	 */
	public PageInfo<Meeting> findMeetingList(int currentPage, int pageSize, Map<String, Object> params) {
		PageHelper.startPage(currentPage, pageSize);
		List<Meeting> meeting = meetingDao.findMeetingList(params);
		return new PageInfo<Meeting>(meeting);
	}

	public Meeting findMeetingList(Map<String, Object> params) {
		if(meetingDao.findMeetingList(params).size()>0){
			return meetingDao.findMeetingList(params).get(0);
		}else{
			return null;
		}
	}

	public List<Meeting> findMeetingByTime(Map<String, Object> params) {
		return meetingDao.findMeetingList(params);
	}

	/**
	 * 更新会议信息
	 * 
	 * @param meeting
	 */
	@Transactional
	public void updateMeeting(Meeting meeting) {
		Map<String, Object> map = new HashMap<>(1);
		map.put("meetRoomId", meeting.getMeetRoomId());
		List<MeetingRoom> room = meetingRoomDao.findMeetingRoomList(map);
		if(room.size()>0){
			meeting.setMeetRoomName(room.get(0).getMeetRoomName());
		}
		meetingDao.updateMeeting(meeting);
	}

	/**
	 * 根据ID删除会议
	 * 
	 * @param id
	 */
	@Transactional
	public void deleteMeeting(Integer meetId) {
		meetingDao.deleteMeeting(meetId);
	}

	/**
	 * 根据ID数组删除会议
	 * 
	 * @param ids
	 */
	@Transactional
	public void deleteMeeting(Integer[] meetIds) {
		for (int i = 0, len = (meetIds == null ? 0 : meetIds.length); i < len; i++)
			if (meetIds[i] != null)
				deleteMeeting(meetIds[i]);
	}

	/*
	 * 根据时间段查询会议
	 */
	public List<Meeting> findMeetByTime(Date staTime, Date endTime) {
		Map<String, Object> map = new HashMap<>(2);
		map.put("staTime", staTime);
		map.put("endTime", endTime);
		return meetingDao.findMeetingList(map);
	}
}
