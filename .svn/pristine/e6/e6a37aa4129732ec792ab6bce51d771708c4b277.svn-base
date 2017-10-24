package com.aiko.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aiko.dao.MeetingRoomDao;
import com.aiko.domain.MeetingRoom;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class MeetingRoomService {

	@Autowired
	private MeetingRoomDao meetingRoomDao;

	// 添加会议室时会议室默认状态为空闲 0
	public static final Integer DEFAULT_STATUS = 0;

	public PageInfo<MeetingRoom> findMeetingRoomList(int currentPage, int pageSize, Map<String, Object> params) {
		PageHelper.startPage(currentPage, pageSize);
		List<MeetingRoom> meetingRoomList = meetingRoomDao.findMeetingRoomList(params);
		return new PageInfo<MeetingRoom>(meetingRoomList);
	}

	/**
	 * 重载findMeetingRoomList方法，去掉分页
	 * 
	 * @param params
	 * @return
	 */
	public MeetingRoom findMeetingRoomList(Map<String, Object> params) {
		if(meetingRoomDao.findMeetingRoomList(params).size()>0){
			return meetingRoomDao.findMeetingRoomList(params).get(0);
		}else{
			return null;
		}
	}
	
	public List<MeetingRoom> findMeetingRoomByisProAndNum(Map<String, Object> params) {
		return meetingRoomDao.findMeetingRoomList(params);
	}
	
	@Transactional
	public void addMeetingRoom(MeetingRoom meetingRoom) {
		meetingRoom.setMeetRoomState(DEFAULT_STATUS);
		meetingRoomDao.addMeetingRoom(meetingRoom);
	}

	@Transactional
	public void updateMeetingRoom(MeetingRoom meetingRoom) {
		if (meetingRoom.getIsRoomPro() == null)
			meetingRoom.setIsRoomPro(0);
		meetingRoomDao.updateMeetingRoom(meetingRoom);
	}

	@Transactional
	public void deleteMeetingRoom(Integer meetRoomId) {
		meetingRoomDao.deleteMeetingRoom(meetRoomId);
	}

	@Transactional
	public void deleteMeetingRoom(Integer[] ids) {
		for (int i = 0, len = (ids == null ? 0 : ids.length); i < len; i++) {
			deleteMeetingRoom(ids[i]);
		}
	}

}
