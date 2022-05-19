$(document).ready(function(){
    console.log("DH ***** document")
    $('.subject').mousemove(function(event){
        // console.log(`mousemove : x=${event.pageX}, y=${event.pageY}`);
        let x = event.pageX;
        let y = event.pageY;

        $('.tip').css({left:x, top:y}).addClass('on');
    }).mouseleave(function(){
        $('.tip').removeClass('on');
    });
});