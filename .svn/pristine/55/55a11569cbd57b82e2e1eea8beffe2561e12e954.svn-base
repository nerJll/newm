package com.aiko.test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.aiko.dao.MeetingDao;
import com.aiko.domain.Meeting;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MeetingDaoTest {

	@Autowired
	private MeetingDao meetingDao;

	@Test
	public void addMeetingTest() {
		Meeting meeting = new Meeting();
		meeting.setApplyEmpId(1016002);
		meeting.setLauEmpId(1016003);
		meeting.setMeetTheme("严格管控公司5S");
		meeting.setMeetEmpNum(25);
		meeting.setStaTime(new Date());
		meeting.setEndTime(new Date());
		meeting.setIsNeedPro(0);
		meeting.setMeetRoomName("一期一楼G1");
		meeting.setMeetType("月会");
		meeting.setMeetEmpName("张三，李四，王二");
		meeting.setMeetApplyTime(new Date());
		meetingDao.addMeeting(meeting);
	}
	
	@Test
	public void updateMeetingTest(){
		Meeting meeting = new Meeting();
		meeting.setMeetId(1);
		meeting.setStaTime(new Date());
		meeting.setMeetTheme("加强品质监督管理");
		meetingDao.updateMeeting(meeting);
	}
	
	@Test
	public void deleteMeetingTest() {
		meetingDao.deleteMeeting(1);
	}
	
	@Test
	public void findMeetingListTest() throws ParseException{
		Map<String,Object> map = new HashMap<String,Object>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date d1 = sdf.parse("2017-09-11 09:21:43");
		Date d2 = sdf.parse("2017-09-11 09:21:43");
		//map.put("meetId", 3);
		//map.put("meetTheme", "严格管控");
		map.put("staTime", d1);
		map.put("endTime", d2);
		List<Meeting> list = meetingDao.findMeetingList(map);
		for(Meeting meeting:list){
			System.out.println(meeting);
		}
		
	}
	
}
