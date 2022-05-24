<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 코어를 사용하기 위한 선언부 -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- 국제화 선언부 -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!-- EL함수 선언부 -->
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
		<h2>JSTL:Functions</h2>
		<hr>
    <c:set var="str1" value="afewgoodman 오늘은 즐거운 목요일 2일전 ㅋㅋㅋㅋ"/><br>
    length(str1):${fn:length(str1) }<br>
    toUpperCase(str1):${fn:toUpperCase(str1) }<br>
</body>
</html>