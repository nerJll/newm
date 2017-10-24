package com.aiko.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aiko.domain.MeetingRoom;

@Mapper
public interface MeetingRoomDao {
	
	List<MeetingRoom> findMeetingRoomList(@Param("params") Map<String, Object> params);
	
	void addMeetingRoom(MeetingRoom meetingRoom);
	
	void updateMeetingRoom(MeetingRoom meetingRoom);

	void deleteMeetingRoom(Integer meetRoomId);
}
