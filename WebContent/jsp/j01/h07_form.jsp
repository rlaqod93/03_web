<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>form요청</h2>
	<hr/>
	<!-- 
	http://localhost:8081/studyhtml5/jsp/j01/h07_form_request.jsp?
	userNm=1%E3%85%81%E3%84%B4%E3%84%B9&userCell=%E3%85%81%E3%84%B4%E3%84%B9%E3%84%B4&lang=10&lang=20
	 -->
	<form action="/studyhtml5/jsp/j01/h07_form_request.jsp" method="get">
	   이름: <input type="text" name="userNm" size="10"><br>
	   핸폰: <input type="text" name="userCell" size="10"><br>
	   좋아하는 프로그램<br>
	  <input type="checkbox" name="lang" value="10">java<br>
	  <input type="checkbox" name="lang" value="20">oracle<br>
	  <input type="checkbox" name="lang" value="30">jsp<br>
	  <input type="checkbox" name="lang" value="40">jquery<br>
	  <input type="submit" value="전송">
	</form>
</body>
</html>