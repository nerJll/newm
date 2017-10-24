package com.aiko.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aiko.domain.Meeting;

@Mapper
public interface MeetingDao {

	List<Meeting> findMeetingList(@Param("params") Map<String, Object> params);

	public void addMeeting(Meeting meeting);

	public void updateMeeting(Meeting meeting);

	public void deleteMeeting(Integer meetId);
}
