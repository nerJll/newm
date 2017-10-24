package com.aiko.test;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.aiko.domain.MeetingRoom;
import com.aiko.service.MeetingRoomService;
import com.github.pagehelper.PageInfo;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MeetingRoomServiceTest {

	@Autowired
	private MeetingRoomService meetingRoomService;
	/*
	 * @Resource private MeetingRoomDao meetingRoomDao;
	 */

	@Test
	public void findMeetingRoomListTest() {
		Map<String, Object> map = new HashMap<String, Object>();
		PageInfo<MeetingRoom> page = meetingRoomService.findMeetingRoomList(1, 3, map);
		System.out.println(page);
	}

	/*
	 * @Test public void findMeetingRoomByIdTest(){ MeetingRoom room =
	 * meetingRoomService.findMeetingRoomById(1); System.out.println(room); }
	 */
	@Test
	public void addMeetingRoomTest() {
		for (int i = 0; i < 5; i++) {
			MeetingRoom room = new MeetingRoom();
			room.setMeetRoomName("一期二楼A5室");
			room.setMeetRoomNum(9);
			room.setIsRoomPro(0);
			room.setMeetRoomState(1);
			meetingRoomService.addMeetingRoom(room);
		}
	}

	@Test
	public void updateMeetingRoomTest() {
		MeetingRoom room = new MeetingRoom();
		room.setMeetRoomId(1);
		room.setMeetRoomName("二期二楼食堂");
		room.setMeetRoomNum(120);
		room.setIsRoomPro(1);
		meetingRoomService.updateMeetingRoom(room);
	}

	@Test
	public void deleteMeetingRoomTest() {
		meetingRoomService.deleteMeetingRoom(new Integer[2]);
	}
}
