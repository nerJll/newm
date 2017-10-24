package com.aiko.util;

public class AjaxObject implements java.io.Serializable{
	
	private static final long serialVersionUID = 400576728912027093L;
	
	public static final String STATUS_SUCCESS = "1";
	
	public static final String STATUS_SUCCESS_MESSAGE = "操作成功！";
	
	public static final String STATUS_FAIL = "0";

	public static final String STATUS_FAIL_MESSAGE = "操作失败！";
	
	/*
	 * 请求结果状态码
	 * 1：代表操作成功
	 * 0：代表操作失败
	 * 其他：请自定义
	 */
	private String status = STATUS_FAIL; 
	
	/*
	 * 请求返回的消息提示
	 */
	private String message = STATUS_FAIL_MESSAGE;
	
	/*
	 * 请求返回的结果数据
	 */
	private Object data;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}
	
	public void success(){
		set(STATUS_SUCCESS, STATUS_SUCCESS_MESSAGE, null);
	}
	
	public void success(Object data){
		set(STATUS_SUCCESS, STATUS_SUCCESS_MESSAGE, data);
	}
	
	public void success(String message, Object data){
		set(STATUS_SUCCESS, message, data);
	}
	
	public void fail(){
		set(STATUS_FAIL, STATUS_FAIL_MESSAGE, null);
	}
	
	public void fail(Object data){
		set(STATUS_FAIL, STATUS_FAIL_MESSAGE, data);
	}
	
	public void fail(String message, Object data){
		set(STATUS_FAIL, message, data);
	}
	
	public void set(String status, String message, Object data){
		this.status = status;
		this.message = message;
		this.data = data;
	}
}
