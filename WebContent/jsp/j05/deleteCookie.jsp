<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
  <h2>쿠키삭제</h2>
  <hr>
  
  <%
    Cookie[] cookieArray = request.getCookies();
    if(null != cookieArray && cookieArray.length > 0){
    	for(Cookie cookie :cookieArray){
    		if("pcwk".equals(cookie.getName())){
    			  Cookie pcwkCookie = new Cookie("pcwk","");
    			  //쿠키삭제 
    			  //쿠키 보관시간을 0으로 설정
    			  pcwkCookie.setMaxAge(0);//60(초)*60(분)*24(시간)*7(일) : 7일
                                    //시간에 -1을 할당하면 브라우저를 닫으면 삭제 된다.    			  
    			  response.addCookie(pcwkCookie);
    		}
    	}
    }
  
  %>
</body>
</html>