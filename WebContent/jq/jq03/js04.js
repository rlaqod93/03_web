$(document).ready(function(){
    $('#title a').on('click', function(event){
        if($(this).hasClass('on') == true){
            $(this).add("#list").removeClass("on");
        }else{
            $(this).add("#list").addClass("on");
        }
        
        // 버블링 방지
        event.stopPropagation();
        // return false;
    });

    $('html').on('click', function(){
        alert('html click');
    })
});