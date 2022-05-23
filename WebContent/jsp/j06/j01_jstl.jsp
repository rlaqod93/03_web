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
    <h2>코어태그:if</h2>
    <hr>
    
    <c:if test="true">무조건 수행<br></c:if>
    
<!-- http://localhost:8081/studyhtml5/jsp/j06/j01_jstl.jsp?name=bk -->
    <c:if test="${param.name =='bk'}">
      name 파라메터값 ${param.name }입니다.<br>
    </c:if>
<!-- 부등호 -->
<!-- http://localhost:8081/studyhtml5/jsp/j06/j01_jstl.jsp?age=23 -->
    <c:if test="${18<param.age }">
              당신의 나이는 18살 이상 입니다.
    </c:if>
</body>
</html>