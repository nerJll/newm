package com.aiko.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {
	
	@GetMapping(value = "/home/testIndex")
	public String testIndex(){
		return "home/testIndex";
	}
	
	@GetMapping(value = "home/testhome")
	public String deleteMeeting(){
		return "home/testhome";
	}
	
	@GetMapping("test/index2")
	public String index2() {
		return "index2";
	}

	@GetMapping("test/index")
	public String index() {
		return "index1";
	}

	@GetMapping("test/hello")
	public String hello() {
		return "hello";
	}
	
	@GetMapping(value = "/test/home")
	public String home(){
		return "home/home";
	}
	
	@GetMapping(value = "/test/index3")
	public String index3(){
		return "home/index";
	}
	
	@GetMapping(value = "/test/index4")
	public String index4(){
		return "meeting/addVideoMeeting";
	}
	
	@GetMapping(value = "/test/index5")
	public String index5(){
		return "home/mobile";
	}
	
	@GetMapping(value = "/test/index6")
	public String index6(){
		return "meeting/addvideomeet-mobile";
	}
}
