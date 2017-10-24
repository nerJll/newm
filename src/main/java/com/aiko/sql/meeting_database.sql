show CREATE TABLE aiko-meetingroom
show CREATE TABLE aiko-meeting

CREATE TABLE aiko-meetingroom (
  MEET_ROOM_ID int(11) NOT NULL AUTO_INCREMENT COMMENT '会议室id',
  MEET_ROOM_NAME varchar(255) NOT NULL COMMENT '会议室名称',
  MEET_ROOM_NUM int(11) NOT NULL COMMENT '可容纳人数',
  MEET_ROOM_STATE varchar(255) NOT NULL COMMENT '使用状态',
  MEET_ROOM_PRO varchar(255) NOT NULL COMMENT '是否有投影',
  RES_ONE varchar(255) DEFAULT NULL COMMENT '预留字段1',
  RES_TWO varchar(255) DEFAULT NULL COMMENT '预留字段2',
  RES_THREE varchar(255) DEFAULT NULL COMMENT '预留字段3',
  PRIMARY KEY (MEET_ROOM_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE aiko-meeting (
  MEET_ID int(11) NOT NULL AUTO_INCREMENT COMMENT '会议id',
  APPLY_EMP_ID int(11) NOT NULL COMMENT '申请人工号',
  LAU_EMP_ID int(11) NOT NULL COMMENT '发起人工号',
  MEET_THEME varchar(255) NOT NULL COMMENT '会议主题',
  MEET_EMP_NUM int(11) NOT NULL COMMENT '参会人数',
  STA_TIME datetime NOT NULL COMMENT '开始时间',
  END_TIME datetime NOT NULL COMMENT '结束时间',
  IS_NEED_PRO varchar(255) NOT NULL COMMENT '是否需要投影',
  MEET_ROOM_NAME varchar(255) NOT NULL COMMENT '会议室名称',
  MEET_TYPE varchar(255) NOT NULL COMMENT '会议类型',
  MEET_EMP_NAME varchar(255) DEFAULT NULL COMMENT '参会人员姓名',
  MEET_APPLY_TIME datetime NOT NULL COMMENT '申请时间',
  RES_ONE varchar(255) DEFAULT NULL COMMENT '预留字段1',
  RES_TWO varchar(255) DEFAULT NULL COMMENT '预留字段2',
  RES_THREE varchar(255) DEFAULT NULL COMMENT '预留字段3',
  PRIMARY KEY (MEET_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


