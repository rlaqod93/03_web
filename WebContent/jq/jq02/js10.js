$(document).ready(function(){
    console.log("DH ***** document")
    
    // scrollTop()은 선택한 요소의 스크롤바 수직 위치를 반환하거나 정할수 있다.
    // scrollLeft() 수평 스크롤
    
     
    $(window).resize(function(){
        console.log("window resize");

        // header width 이벤트
        console.log($(this).width());
        if($(this).width() < 960){
            $('header').addClass('bg');
        }else{
            $('header').removeClass('bg');
        };
    }).scroll(function(){
        console.log("window scroll");
        console.log(`scrollTop() : ${$(this).scrollTop()}`);

        if($(this).scrollTop() > $('header').height()){
            // 고정
            $('#quick').addClass('on');
        }else{
            $('#quick').removeClass('on');
        }
    });
});