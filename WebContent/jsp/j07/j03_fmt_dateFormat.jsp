<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 코어를 사용하기 위한 선언부 -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- 국제화 선언부 -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="now" value="<%=new Date() %>"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
		<h2>JSTL:fmt_formatDate</h2>
		<hr>
    <fmt:formatDate value="${now }" type="date" dateStyle="full"/><br>
    <fmt:formatDate value="${now }" type="date" dateStyle="short"/><br>
    <fmt:formatDate value="${now }" type="time"/><br>
    <fmt:formatDate value="${now }" type="both" dateStyle="full" timeStyle="full"/><br>
    <fmt:formatDate value="${now }" pattern="z a h:mm"/>
</body>
</html>