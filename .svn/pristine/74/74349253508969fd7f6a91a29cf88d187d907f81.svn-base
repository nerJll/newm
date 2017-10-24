package com.aiko.test;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.aiko.domain.Meeting;
import com.aiko.service.MeetingService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MeetingServiceTest {
	@Autowired
	private MeetingService meetingService;

	@Test
	public void addMeetingTest() {
		Meeting meeting = new Meeting();
		meeting.setApplyEmpId(1016002);
		meeting.setLauEmpId(1016003);
		meeting.setMeetTheme("严格管控公司6S");
		meeting.setMeetEmpNum(25);
		meeting.setStaTime(new Date());
		meeting.setEndTime(new Date());
		meeting.setIsNeedPro(1);
		meeting.setMeetRoomName("一期一楼G2");
		meeting.setMeetType("月会");
		meeting.setMeetEmpName("李四，，老王，，老刘");
		meeting.setMeetApplyTime(new Date());
		for (int i = 0; i < 5;i++){
			meetingService.addMeeting(meeting);
		}
	}

	@Test
	public void updateMeetingTest() {
		Meeting meeting = new Meeting();
		meeting.setMeetId(1);
		meeting.setStaTime(new Date());
		meeting.setMeetTheme("加强品质监督管理111");
		meetingService.updateMeeting(meeting);
	}
	

	
}
