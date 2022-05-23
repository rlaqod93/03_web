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
		<h2>forEach:구구단에 4단만 출력</h2>
		<hr>
		
		<ul>
		  <c:forEach var="i" begin="1" end="9" step="1">
		    <li>4 X ${i}= ${i*4}</li>
		  </c:forEach>
		</ul>

</body>
</html>