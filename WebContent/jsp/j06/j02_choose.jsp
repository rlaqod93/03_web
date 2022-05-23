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
		<h2>jstl:choose</h2>
		<hr>
<!-- http://localhost:8081/studyhtml5/jsp/j06/j02_choose.jsp?name=jsp -->
    <c:choose>
      <c:when test="${param.name=='html' }">
                  이름은 ${param.name} 입니다.(html)
      </c:when>
      <c:when test="${param.name=='jsp' }">
                 이름은 ${parma.name} 입니다.(jsp)
      </c:when>
      <c:otherwise>
                  이름은 없습니다.(otherwise)
      </c:otherwise>
    </c:choose>
</body>
</html>