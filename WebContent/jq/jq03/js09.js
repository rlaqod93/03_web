$(document).ready(function(){
    var serverAddress = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    $.ajax({
        // 요청방식
        type: "GET",
        // 서버URL
        url: serverAddress,
        // 비동기화
        asyn:"true",
        dataType:"html",
        // 서버 전달 파람
        data:{
            work_div:"doInsert",
            title: $("#title").val(),
            div: $("#div").val(),
            reg_id: $("#reg_id").val(),
            contents: $("#contents").val()	
        },
        // 서버 전송 성공
        success:function(data){//통신 성공
            console.log("success data:"+data);
        },
        // 서버 전송 실패
        error:function(data){//실패시 처리
            console.log("error:"+data);
        },
        complete:function(data){//성공/실패와 관계없이 수행!
            console.log("complete:"+data);
        }
    });
});