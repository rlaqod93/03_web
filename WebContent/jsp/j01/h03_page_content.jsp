<%@ page contentType="application/vnd.ms-excel;charset=UTF-8" pageEncoding="utf-8"%>

<%     
    response.setHeader("Content-Disposition", "attachment; filename=diary.xls"); 
    response.setHeader("Content-Description", "JSP Generated Data"); 
    response.setContentType("application/vnd.ms-excel");
%>