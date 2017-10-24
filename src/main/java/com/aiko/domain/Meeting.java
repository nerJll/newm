
package com.aiko.domain;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;


public class Meeting implements java.io.Serializable,Cloneable{

	private static final long serialVersionUID = 2389409225521462766L;

	private Integer meetId; // 会议唯一标识ID

	private Integer applyEmpId; // 申请人工号

	private Integer lauEmpId; // 会议发起人工号

	private String meetTheme; // 会议主题

	@Override
	public Object clone() throws CloneNotSupportedException {
		return super.clone();
	}

	private Integer meetEmpNum; // 参会人数

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@JsonFormat(pattern = "yyyy-MM-dd' / 'HH:mm:ss", timezone = "GMT+8")
	private Date staTime; // 会议开始时间

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@JsonFormat(pattern = "yyyy-MM-dd' / 'HH:mm:ss", timezone = "GMT+8")
	private Date endTime; // 会议结束时间

	private Integer isNeedPro; // 是否需要投影 0:否 1:是

	private String meetRoomName; // 会议室名称

	private String meetType; // 会议类型

	private String meetEmpName; // 参会人员姓名

	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@JsonFormat(pattern = "yyyy-MM-dd' / 'HH:mm:ss", timezone = "GMT+8")
	private Date meetApplyTime; // 会议申请时间

	private String resOne; // 预留字段1

	private String resTow; // 预留字段2

	private String resThree; // 预留字段3
	
	private Integer meetRoomId; //会议室Id

	public Meeting() {
	}

	

	@Override
	public String toString() {
		return "{\"meetId\":\"" + meetId + "\",\"applyEmpId\":\"" + applyEmpId + "\",\"lauEmpId\":\"" + lauEmpId
				+ "\",\"meetTheme\":\"" + meetTheme + "\",\"meetEmpNum\":\"" + meetEmpNum + "\",\"staTime\":\""
				+ staTime + "\",\"endTime\":\"" + endTime + "\",\"isNeedPro\":\"" + isNeedPro + "\",\"meetRoomName\":\""
				+ meetRoomName + "\",\"meetType\":\"" + meetType + "\",\"meetEmpName\":\"" + meetEmpName
				+ "\",\"meetApplyTime\":\"" + meetApplyTime + "\",\"resOne\":\"" + resOne + "\",\"resTow\":\"" + resTow
				+ "\",\"resThree\":\"" + resThree + "\",\"meetRoomId\":\"" + meetRoomId + "\"}";
	}



	public Meeting(Integer meetId, Integer applyEmpId, Integer lauEmpId, String meetTheme, Integer meetEmpNum,
			Date staTime, Date endTime, Integer isNeedPro, String meetRoomName, String meetType, String meetEmpName,
			Date meetApplyTime, String resOne, String resTow, String resThree, Integer meetRoomId) {
		super();
		this.meetId = meetId;
		this.applyEmpId = applyEmpId;
		this.lauEmpId = lauEmpId;
		this.meetTheme = meetTheme;
		this.meetEmpNum = meetEmpNum;
		this.staTime = staTime;
		this.endTime = endTime;
		this.isNeedPro = isNeedPro;
		this.meetRoomName = meetRoomName;
		this.meetType = meetType;
		this.meetEmpName = meetEmpName;
		this.meetApplyTime = meetApplyTime;
		this.resOne = resOne;
		this.resTow = resTow;
		this.resThree = resThree;
		this.meetRoomId = meetRoomId;
	}



	public Integer getMeetRoomId() {
		return meetRoomId;
	}



	public void setMeetRoomId(Integer meetRoomId) {
		this.meetRoomId = meetRoomId;
	}



	public Integer getMeetId() {
		return meetId;
	}

	public Integer getApplyEmpId() {
		return applyEmpId;
	}

	public Integer getLauEmpId() {
		return lauEmpId;
	}

	public String getMeetTheme() {
		return meetTheme;
	}

	public Integer getMeetEmpNum() {
		return meetEmpNum;
	}

	public Date getStaTime() {
		return staTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public Integer getIsNeedPro() {
		return isNeedPro;
	}

	public String getMeetRoomName() {
		return meetRoomName;
	}

	public String getMeetType() {
		return meetType;
	}

	public String getMeetEmpName() {
		return meetEmpName;
	}

	public Date getMeetApplyTime() {
		return meetApplyTime;
	}

	public String getResOne() {
		return resOne;
	}

	public String getResTow() {
		return resTow;
	}

	public String getResThree() {
		return resThree;
	}

	public void setMeetId(Integer meetId) {
		this.meetId = meetId;
	}

	public void setApplyEmpId(Integer applyEmpId) {
		this.applyEmpId = applyEmpId;
	}

	public void setLauEmpId(Integer lauEmpId) {
		this.lauEmpId = lauEmpId;
	}

	public void setMeetTheme(String meetTheme) {
		this.meetTheme = meetTheme;
	}

	public void setMeetEmpNum(Integer meetEmpNum) {
		this.meetEmpNum = meetEmpNum;
	}

	public void setStaTime(Date staTime) {
		this.staTime = staTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public void setIsNeedPro(Integer isNeedPro) {
		this.isNeedPro = isNeedPro;
	}

	public void setMeetRoomName(String meetRoomName) {
		this.meetRoomName = meetRoomName;
	}

	public void setMeetType(String meetType) {
		this.meetType = meetType;
	}

	public void setMeetEmpName(String meetEmpName) {
		this.meetEmpName = meetEmpName;
	}

	public void setMeetApplyTime(Date meetApplyTime) {
		this.meetApplyTime = meetApplyTime;
	}

	public void setResOne(String resOne) {
		this.resOne = resOne;
	}

	public void setResTow(String resTow) {
		this.resTow = resTow;
	}

	public void setResThree(String resThree) {
		this.resThree = resThree;
	}

}
