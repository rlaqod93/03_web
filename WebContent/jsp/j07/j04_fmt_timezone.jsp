<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 코어를 사용하기 위한 선언부 -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- 국제화 선언부 -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
		<h2>timezone</h2>
		<hr>
    <c:set var="now" value="<%=new Date() %>"/>
         서울:<fmt:formatDate value="${now }" type="both" dateStyle="full" timeStyle="full"/><br>
         뉴욕:<fmt:timeZone value="New_York">
          <fmt:formatDate value="${now }" type="both" dateStyle="full" timeStyle="full"/><br>
        </fmt:timeZone>
</body>
</html>