<%@page import="org.apache.log4j.Logger"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
    // Context Path
    String contPath = request.getContextPath();
    Logger LOG = Logger.getLogger(this.getClass());
    
    // http 1.1에서 지원하는 헤더 : 웹브라우저가 응답결과를 캐시하지 않음
    response.setHeader("Cache-Control", "no-cache");

    // 웹 브라우저가 응답결과를 캐시하지않음(앞/뒤로가기 no-cache)
    response.setHeader("Cache-Control", "no-store");
    
    // http 1.0에서 지원하는 헤더 : 웹브라우저가 응답결과를 캐시하지 않음
    response.setHeader("Pragma", "no-cache");
    
    // http 1.0에서 현재시간 이전으로 캐시하지 않음
    response.setHeader("Expires", "1L");
    
//  out.println("웹브라우저가 응답결과를 캐시하지 않음!");
%>