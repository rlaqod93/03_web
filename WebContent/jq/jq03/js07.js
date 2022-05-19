$(document).ready(function(){
    $('.datepicker').datepicker({
        dateFormat: "yy-mm-dd",
        changeYear: true,
        changeMonth: true,
        buttonImage: "/WebContent/jq/jq03/calendar_icon.png",
        showOn: "button",
        buttonText: "달력"
    });

    // 한글 format으로 달력 설정
    $.datepicker.setDefaults({
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        showMonthAfterYear: true
    });
});