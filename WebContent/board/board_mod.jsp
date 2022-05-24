<%@page import="com.pcwk.board.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- JSTL Core -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<%@ include file="/com/common.jsp" %>
<%
//     BoardVO vo = (BoardVO)request.getAttribute("vo");
//     if(vo == null){
//      vo = new BoardVO();
//     }
%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta charset="UTF-8">
<link rel="shortcut icon" type="image/x-icon" href="<%=contPath %>/imgs/favicon.ico">

<!--reset 스타일 시트 -->
<link rel="stylesheet" type="text/css" href="<%=contPath %>/asset/css/reset.css">
<!-- 부트스트랩 -->
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<link rel="stylesheet"  type="text/css" href="<%=contPath %>/asset/css/jquery-ui.css">
<!--스타일 시트 -->
<style type="text/css">
</style>
<title>게시 상세</title>
<!-- jquery -->
<script type="text/javascript" src="<%=contPath %>/asset/js/jquery-1.12.4.js"></script>
<!-- jQuery UI -->
<script type="text/javascript" src="<%=contPath %>/asset/js/jquery-ui.js"></script>
<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=contPath %>/asset/js/common.js"></script>
</head>
<body>
  <!-- div container -->
  <div class="container">
    <!-- 제목 -->
    <div class="page-header">
      <h2>게시 상세</h2>
    </div>
    <!--//제목  ------------------------------------------->
    <!-- 버튼 --------------------------------------------->
   <div class="row text-right">
      <label class="col-sm-3 col-md-2 col-lg-2"></label>
      <div class="col-sm-9 col-md-10 col-lg-10">
        <input type="button" class="btn btn-primary btn-sm" value="수정" id="doUpdate">
        <input type="button" class="btn btn-primary btn-sm" value="삭제" id="doDelete">
        <input type="button" class="btn btn-primary btn-sm" value="목록" id="moveToList">
      </div>
    </div>
    <!--//버튼 -------------------------------------------->
    
  <form action="<%=contPath %>/board/board.do" name="boardFrm" id="boardFrm" class="form-horizontal">
     <input type="hidden" name="seq" id="seq" value="${vo.seq}">
     <input type="hidden" name="work_div" id="work_div">
        
     <div class="form-group">
       <label for="title" class="col-sm-3 col-md-2 col-lg-2">제목</label>
       <div class="col-sm-9 col-md-10 col-lg-10">
         <input type="text" maxlength="200" name="title" id="title" placeholder="제목" class="form-control" value="${vo.title}">
       </div>
     </div>
     
     <div class="form-group">
       <label for="reg_id" class="col-sm-3 col-md-2 col-lg-2">등록자</label>
       <div class="col-sm-9 col-md-10 col-lg-10">
         <input type="text" maxlength="50" name="reg_id" id="reg_id" placeholder="등록자" class="form-control" readonly="readonly" value="${vo.regId}">
       </div>
       
     </div>
     
     <div class="form-group">
        <label for="regDt" class="col-sm-3 col-md-2 col-lg-2">등록일</label>
        <div class="col-sm-9 col-md-10 col-lg-10">
          <input type="text" maxlength="50" name="regDt" id="regDt" placeholder="등록일" class="form-control" readonly="readonly" value="${vo.regDt}">
        </div>
      </div>
      
      <div class="form-group">
        <label for="mod_id" class="col-sm-3 col-md-2 col-lg-2">수정자</label>
        <div class="col-sm-9 col-md-10 col-lg-10">
          <input type="text" maxlength="50" name="mod_id" id="mod_id" placeholder="수정자" class="form-control" value="${vo.modId}">
        </div>
      </div>
      
      <div class="form-group">
        <label for="modDt" class="col-sm-3 col-md-2 col-lg-2">수정일</label>
        <div class="col-sm-9 col-md-10 col-lg-10">
          <input type="text" maxlength="50" name="modDt" id="modDt" placeholder="수정일" class="form-control" readonly="readonly" value="${vo.modDt}">
        </div>
      </div>
      
      <div class="form-group">
        <label for="readCnt" class="col-sm-3 col-md-2 col-lg-2">조회수</label>
        <div class="col-sm-9 col-md-10 col-lg-10">
          <input type="text" maxlength="50" name="readCnt" id="readCnt" placeholder="조회수" class="form-control" readonly="readonly" value="${vo.readCnt}">
        </div>
      </div>
      
      <!-- 내용 -->
      <div class="form-group">
        <label for="contents" class="col-sm-3 col-md-2 col-lg-2">내용</label>
        <div class="col-sm-9 col-md-10 col-lg-10">
          <textarea name="contents" id="contents" cols="67" rows="5" class="form-control">${vo.contents}</textarea>
        </div>
      </div>
      <!--//내용 ---------------------------------------->
    </form>
    <!--//form -------------------------------------------->
  </div>
  <!--//div container --------------------------------------->
  <script type="text/javascript">
      $('#doUpdate').on('click', function(){
        console.log("doUpdate");
        
        let title = $('#title').val();
        if(isEmpty(title) || title.trim().length == 0){
          $('#title').focus();
          alert("제목을 입력하세요.");
          return;
        }
        title = title.trim();
        
        let modId = $('#mod_id').val();
        console.log("isEmpty(modId) : " + isEmpty(modId));
        if(isEmpty(modId) || modId.trim().length == 0){
          $('#mod_id').focus();
          alert("수정자 ID를 입력하세요.");
          return;
        }
        modId = modId.trim();
        
        let contents = $('#contents').val();
        if(isEmpty(contents) || contents.trim().length == 0){
          $('#contents').focus();
          alert("내용을 입력하세요.");
          return;
        }
        contents = contents.trim();
        
        if(confirm("수정 하시겠습니까?") == false){
          return;
        }
        
        $.ajax({
          type: "POST",
          url:"<%=contPath%>/board/board.do",
          asyn:"true",
          dataType:"html",
          data:{
            work_div:"doUpdate",
            seq: $('#seq').val(),
            title: title,
            modId: modId,
            contents: contents
          },
          success:function(data){//통신 성공
            //console.log("success data:"+data);
            const jsonObj = JSON.parse(data);
            if(!isEmpty(jsonObj) && jsonObj.messageId == 1){
              alert(jsonObj.msgContents);
              goList();
            }else{
              alert(jsonObj.msgContents);
            }
          },
          error:function(data){//실패시 처리
            console.log("error:"+data);
          }
        });
        
      });
  
      $('#moveToList').on('click', function(){
        goList();
      });
      
      function goList(){
         const listURL = "/studyhtml5/board/board.do?work_div=doRetrieve"
         window.location.href = listURL;
      }
  
      $('#doDelete').on('click', function(){
        //console.log("doDelete");
        
        //ajax
        let seq = $('#seq').val();
        if(seq === null || seq.length === 0){
          alert("seq를 확인하세요");
          return;
        }
        
        if(confirm("삭제 하시겠습니까?") == false){
          return;
        }
        
        $.ajax({
             type: "GET",
             url:"<%=contPath%>/board/board.do",
             asyn:"true",
             dataType:"html",
             data:{
               work_div:"doDelete",
               seq: seq
             },
             success:function(data){//통신 성공
                 console.log("success data:"+data);
                 // string -> json
                 const jsonObj = JSON.parse(data);
                 console.log("messageId : " + jsonObj.messageId);
                 console.log("msgContents : " + jsonObj.msgContents);   
                 
                 if(jsonObj != null && jsonObj.messageId == "1"){
                   alert(jsonObj.msgContents);
                   // 컨트롤러로 보내 데이터 조회
                   //const listURL = "/studyhtml5/board/board.do?work_div=doRetrieve"
                   //window.location.href = listURL;
                   goList();
                 }else{
                   alert(jsonObj.msgContents);
                 }
             },
             error:function(data){//실패시 처리
                 console.log("error:"+data);
             }
           });
      });
  </script>
</body>
</html>