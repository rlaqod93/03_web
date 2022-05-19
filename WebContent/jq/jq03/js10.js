$(document).ready(function(){
    $.ajax({
        type: "GET",
        url:"/WebContent/jq/jq03/data1.json",
        asyn:"true",
        dataType:"json",
        data:{
        },
        success:function(data){//통신 성공
            // console.log("success data:"+data);
            let elm = ''; // <tr><td></td>...</tr>
            $.each(data, function(index, value){
                // console.log(`index : ${index}, value.name : ${value.name}`);
                elm += "<tr>";
                elm += "<td>" + value.name + "</td>";
                elm += "<td>" + value.score1 + "</td>";
                elm += "<td>" + value.score2 + "</td>";
                elm += "<td>" + value.score3 + "</td>";
                elm += "<td>" + value.score4 + "</td>";
                elm += "</tr>";
            });
            // table tbody
            $('table tbody').append(elm);
        },
        error:function(data){//실패시 처리
            console.log("error:"+data);
        }
    });
});