$(document).ready(function(){
    $('#m1 button:eq(0)').on('click', function(){
        $('#m1 .box').show();
    });
    $('#m1 button:eq(1)').on('click', function(){
        $('#m1 .box').hide();
    });
    $('#m1 button:eq(2)').on('click', function(){
        $('#m1 .box').toggle();
    });
    $('#m2 button:eq(0)').on('click', function(){
        $('#m2 .box').slideDown('slow');
    });
    $('#m2 button:eq(1)').on('click', function(){
        $('#m2 .box').slideUp('fast', 'swing');
    });
    $('#m2 button:eq(2)').on('click', function(){
        $('#m2 .box').slideToggle();
    });
    $('#m3 button:eq(0)').on('click', function(){
        $('#m3 .box').fadeIn('fast', 'swing', function(){
            $(this).text('곧있으면 점심시간');
        });
    });
    $('#m3 button:eq(1)').on('click', function(){
        $('#m3 .box').fadeOut('fast', 'swing', function(){
            $(this).text('내일은 즐거운 금요일')
        });
    });
    $('#m3 button:eq(2)').on('click', function(){
        $('#m3 .box').fadeToggle('fast', 'swing', function(){
            if($(this).css("display") == "none"){
                $(this).html("<p>곧있으면 점심시간</p>")
            }else{
                $(this).html("<p>내일은 즐거운 금요일</p>")
            }
        });
    });
});