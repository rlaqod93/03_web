<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 코어를 사용하기 위한 선언부 -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- 국제화 선언부 -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%-- <fmt:setLocale value="en" /> --%> <!-- locale(한글을 영문으로 바꿈) -->
<!-- 참조할 properties경로 지정 -->
<fmt:bundle basename="resource.message">
<!-- title변수에 TITLE값 저장 -->
<fmt:message key="TITLE" var="title"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title }</title>  
</head>
<body>
		<h2>${title }</h2>
		<hr>
		<!-- http://localhost:8081/studyhtml5/jsp/j07/j01_fmt.jsp?id=goodman -->
    <fmt:message key="GREETING"/><br>
    <c:if test="${not empty param.id }">
      <!-- VISITOR값에 PARAM 전달해 출력! -->
      <fmt:message key="VISITOR">
        <!-- VISITOR=YOU ID IS {0} -->
        <fmt:param value="${param.id }"/>
      </fmt:message>
    </c:if>
</body>
</html>

</fmt:bundle>