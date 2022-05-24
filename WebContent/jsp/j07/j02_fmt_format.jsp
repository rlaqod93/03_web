<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 코어를 사용하기 위한 선언부 -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- 국제화 선언부 -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="price" value="10000"/>
<fmt:formatNumber value="${price }" type="number" var="numberType"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
		<h2>jstl:numberFormat</h2>
		<hr>
    통화:<fmt:formatNumber value="${price}" type="currency" currencySymbol="원"/><br>
    퍼센트:<fmt:formatNumber value="${price}" type="percent" groupingUsed="true"/><br>
                                                        <!-- false하면 , 마가 사라짐 -->
    숫자:${numberType}<br>
    패턴:<fmt:formatNumber value="${price}" pattern="0000000.00"/><br>
                                         <!-- 빈자리가 0으로 채워짐 -->
   패턴2:<fmt:formatNumber value="1000.12" pattern="0,000.00" var="num"/>
   ${num}
</body>
</html>