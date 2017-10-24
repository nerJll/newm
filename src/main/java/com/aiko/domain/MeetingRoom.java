package com.aiko.domain;

public class MeetingRoom implements java.io.Serializable {

	private static final long serialVersionUID = 1L;

	private Integer meetRoomId;// 会议室Id
	
	private String meetRoomName; //会议室名称

	private Integer meetRoomNum;// 可容纳人数

	private Integer meetRoomState;// 会议室使用状态:0:空闲 1：被占用 2：被预订

	private Integer isRoomPro;// 是否有投影 0：没有 1：有

	private String resOne; // 预留字段1

	private String resTow; // 预留字段2

	private String resThree; // 预留字段3

	public MeetingRoom() {}

	public MeetingRoom(Integer meetRoomId, String meetRoomName, Integer meetRoomNum, Integer meetRoomState,
			Integer isRoomPro, String resOne, String resTow, String resThree) {
		super();
		this.meetRoomId = meetRoomId;
		this.meetRoomName = meetRoomName;
		this.meetRoomNum = meetRoomNum;
		this.meetRoomState = meetRoomState;
		this.isRoomPro = isRoomPro;
		this.resOne = resOne;
		this.resTow = resTow;
		this.resThree = resThree;
	}

	public Integer getMeetRoomId() {
		return meetRoomId;
	}

	public void setMeetRoomId(Integer meetRoomId) {
		this.meetRoomId = meetRoomId;
	}

	public String getMeetRoomName() {
		return meetRoomName;
	}

	public void setMeetRoomName(String meetRoomName) {
		this.meetRoomName = meetRoomName;
	}

	public Integer getMeetRoomNum() {
		return meetRoomNum;
	}

	public void setMeetRoomNum(Integer meetRoomNum) {
		this.meetRoomNum = meetRoomNum;
	}

	public Integer getMeetRoomState() {
		return meetRoomState;
	}

	public void setMeetRoomState(Integer meetRoomState) {
		this.meetRoomState = meetRoomState;
	}

	public Integer getIsRoomPro() {
		return isRoomPro;
	}

	public void setIsRoomPro(Integer isRoomPro) {
		this.isRoomPro = isRoomPro;
	}

	public String getResOne() {
		return resOne;
	}

	public void setResOne(String resOne) {
		this.resOne = resOne;
	}

	public String getResTow() {
		return resTow;
	}

	public void setResTow(String resTow) {
		this.resTow = resTow;
	}

	public String getResThree() {
		return resThree;
	}

	public void setResThree(String resThree) {
		this.resThree = resThree;
	}

	@Override
	public String toString() {
		return "MeetingRoom [meetRoomId=" + meetRoomId + ", meetRoomName=" + meetRoomName + ", meetRoomNum="
				+ meetRoomNum + ", meetRoomState=" + meetRoomState + ", isRoomPro=" + isRoomPro + ", resOne=" + resOne
				+ ", resTow=" + resTow + ", resThree=" + resThree + "]";
	}


	
	
}