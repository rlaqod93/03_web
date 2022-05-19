<%@page import="com.pcwk.cmn.StringUtil"%>
<%@page import="com.pcwk.board.BoardVO"%>
<%@page import="java.util.List"%>
<%@page import="com.pcwk.cmn.SearchVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/com/common.jsp" %>

<%
    // param
    SearchVO param = (SearchVO)request.getAttribute("param");
    //out.println("param : " + param);
    
    // list
    List<BoardVO> list = (List<BoardVO>)request.getAttribute("list");
    if(list != null && list.size() > 0){
    	for(BoardVO vo : list){
//     		out.println(vo + "<br>");
    	}
    }
    
    // null 처리
    int totalCnt =  request.getAttribute("totalCnt") == null ? 0 : (Integer)request.getAttribute("totalCnt");
    LOG.debug("totalCnt : " + totalCnt);
    
    // 현재 페이지
    int currPageNo = 1;
 
    // 페이지당 보여줄 글수
    int rowPerPage = 10;
    
    // 1 2 3 4 5 6 7 8 9 10
    int bottomCount = 10;
    
    // 호출 URL
    String goPageURL = contPath + "/board/board.do";
    
    // 호출 자바스크립트
    String scriptName = "doSearchPage";
    
    if(param != null){
    	currPageNo = param.getPageNum();
    	rowPerPage = param.getPageSize();
    }
%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta charset="UTF-8">
<link rel="shortcut icon" type="image/x-icon" href="<%=contPath %>/imgs/favicon.ico">

<!--reset 스타일 시트 -->
<!-- link rel="stylesheet" type="text/css" href="<%=contPath %>/asset/css/reset.css" -->
<!-- 부트스트랩 -->
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<link rel="stylesheet"  type="text/css" href="<%=contPath %>/asset/css/jquery-ui.css">

<!--스타일 시트 -->
<style type="text/css">
</style>
<title>게시목록</title>
<!-- jquery -->
<script type="text/javascript" src="<%=contPath %>/asset/js/jquery-1.12.4.js"></script>
<!-- jQuery UI -->
<script type="text/javascript" src="<%=contPath %>/asset/js/jquery-ui.js"></script>
<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<style type="text/css">
	*{
	  margin: 0px;
	  padding: 0px;
	}
	table{
	  width: 600px;
	  border-collapse: collapse;
	}
	td,th{
	  border-bottom: 1px solid gray;
	  padding: 5px;
	}
	th{
	  background: gray;
	  color: white;
	}
	.txt_left{
	  text-align: left;
	}
	.txt_center{
	  text-align: center;
	}
	.txt_right{
	  text-align: right;
	}
</style>
<title>게시 목록</title>
</head>
<body>
	<h2>게시 목록</h2>
	<hr/>
	<div>
	   <div>
	     <input type="button" value="조회" onclick="doRetrieve();">
	     <input type="button" value="등록" id="moveToReg">
	   </div>
	   <form action="<%=contPath %>/board/board.do" name="boardListFrm" id="boardListFrm" method="get">
	     <input type="hidden" name="work_div" id="work_div">
	     <input type="hidden" name="seq" id="seq">
	     <input type="hidden" name="pageNum" id="pageNum" value="<%if(param != null){out.print(param.getPageNum());}%>">
	     <div>
	       <label>구분</label>
	       <select name="searchDiv" id="searchDiv">
	         <option value="">전체</option>
	         <option value="10" <% if(param != null && param.getSearchDiv().equals("10")){out.print("selected");} %>>순번</option>
	         <option value="20" <% if(param != null && param.getSearchDiv().equals("20")){out.print("selected");} %>>제목</option>
	         <option value="30" <% if(param != null && param.getSearchDiv().equals("30")){out.print("selected");} %>>내용</option>
	         <option value="40" <% if(param != null && param.getSearchDiv().equals("40")){out.print("selected");} %>>제목+내용</option>
	       </select>
	       <input type="text" name="searchWord" id="searchWord" size="15" value="<% if(param != null){out.print(param.getSearchWord());} %>">
	       <select name="pageSize" id="pageSize">
	         <option value="10" <% if(param != null && param.getPageSize() == 10){out.print("selected");} %>>10</option>
	         <option value="20" <% if(param != null && param.getPageSize() == 20){out.print("selected");} %>>20</option>
	         <option value="50" <% if(param != null && param.getPageSize() == 50){out.print("selected");} %>>50</option>
	         <option value="100"<% if(param != null && param.getPageSize() == 100){out.print("selected");} %>>100</option>
	       </select>
	     </div>	   
	   </form>
	</div>
	
  <table id="listTable">
    <thead>
      <tr>
      <th width="80">No.</th>
      <th width="200">제목</th>
      <th width="80">조회수</th>
      <th width="100">등록자</th>
      <th width="80">등록일</th>
      <th width="80" style="display: none">SEQ</th>
      </tr>
    </thead>
    <tbody>
    <%
    if(list != null && list.size() > 0){
        for(BoardVO vo : list){
    %>
      <tr>
        <td class="txt_center"><%=vo.getNo() %></td>
        <td><%=vo.getTitle() %></td>
        <td class="txt_right"><%=vo.getReadCnt() %></td>
        <td><%=vo.getModId() %></td>
        <td class="txt_center"><%=vo.getModDt() %></td>
        <td style="display: none"><%=vo.getSeq() %></td>
      </tr>
    <%
      } // for
    }else{
    %>
      <tr>
        <td colspan="99">No data found</td>
      </tr>
    <%
    }// else
    %>
    <!-- paging -->
    <div>
      <%=StringUtil.renderPaging(totalCnt, currPageNo, rowPerPage, bottomCount, goPageURL, scriptName) %>
    </div>
    <!--// paging -->
    </tbody>
  </table>
<script type="text/javascript">
    function doSearchPage(url, num){
    	console.log("url:" + url);
    	console.log("num:" + num);
    	
    	let frm = document.getElementById('boardListFrm');
      frm.work_div.value = 'doRetrieve';
      frm.pageNum.value = num;
      
      console.log("frm.work_div.value : " + frm.work_div.value);
      console.log("frm.searchDiv.value : " + frm.searchDiv.value);
      console.log("frm.pageSize.value : " + frm.pageSize.value);
      
      frm.action = url;
      // form submit()
      frm.submit();
    }

    $('#listTable > tbody').on('click', 'tr', function(){
     	console.log("#listTable > tbody");
     	console.log($(this));
    	let pTr = $(this);
    	let tdArray = pTr.children();
//    	let seq = tdArray.eq(5).text();
      let seq = tdArray.last().text();
//      console.log(seq);
      let frm = document.getElementById('boardListFrm');
      frm.seq.value = seq; // 게시판 PK
      frm.work_div.value = "doSelectOne";
      
      console.log(frm.seq.value);
      console.log(frm.work_div.value);
      
      // 서버전송
      frm.submit();
    });
    
    function doRetrieve(){
    	// alert("doRetrieve()");
    	// javascript form submit()
    	// document.boardListFrm
    	let frm = document.getElementById('boardListFrm');
    	frm.work_div.value = 'doRetrieve';
    	console.log("frm.work_div.value : " + frm.work_div.value);
    	console.log("frm.searchDiv.value : " + frm.searchDiv.value);
    	console.log("frm.pageSize.value : " + frm.pageSize.value);
    	
    	// form submit()
    	frm.submit();
    };
    
    $('#moveToReg').on('click', function(){
    	console.log("moveToReg");
    	let frm = document.boardListFrm;
    	frm.work_div.value = 'moveToReg';
    	console.log("frm.work_div.value : " + frm.work_div.value);
    	frm.submit();
    });

</script>
</body>
</html>