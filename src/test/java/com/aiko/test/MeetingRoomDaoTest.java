package com.aiko.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.aiko.dao.MeetingRoomDao;
import com.aiko.domain.MeetingRoom;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MeetingRoomDaoTest {

	@Autowired
	private MeetingRoomDao meetingRoomDao;

	@Test
	public void addMeetingRoomTest() {
		MeetingRoom room = new MeetingRoom();
		room.setMeetRoomName("一期二楼18号会议室");
		room.setMeetRoomNum(25);
		room.setIsRoomPro(0);
		room.setMeetRoomState(1);
		meetingRoomDao.addMeetingRoom(room);
	}

	@Test
	public void updateMeetingRoomTest() {
		MeetingRoom room = new MeetingRoom();
		room.setMeetRoomId(1);
		room.setMeetRoomName("2期一楼21号会议室");
		room.setMeetRoomNum(80);
		room.setIsRoomPro(1);
		room.setMeetRoomState(1);
		meetingRoomDao.updateMeetingRoom(room);
	}

	@Test
	public void deleteMeetingRoomTest() {
		meetingRoomDao.deleteMeetingRoom(5);
	}

	@Test
	public void findMeetingRoomListTest() {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("meetRoomName", "4");
		map.put("meetRoomNum", 10);
		map.put("isRoomPro", 0);
		List<MeetingRoom> list = meetingRoomDao.findMeetingRoomList(map);
		for (MeetingRoom room : list) {
			System.out.println(room);
		}
	}
}
