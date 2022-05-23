<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 코어를 사용하기 위한 선언부 -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
		<h2>jstl:forEach(array)</h2>
		<hr>
		<!-- int타입의 배열인 intArray변수 생성 -->
    <c:set var="intArray" value="<%=new int[]{1,2,3,4,5} %>"/>
    
    <!-- i값이 intArray의 값으로 2부터4까지 1씩증가하며 반복 --> 
    <!-- 루프정보는 status변수에 저장 -->
    <!-- status.index: 배열의 index -->
    <!-- status.count: 루프실행 횟수 -->
    <c:forEach var="i" items="${intArray}" begin="0" end="4" varStatus="status">
     ${status.index},${status.count} ${i }<br>
    </c:forEach>
</body>
</html>