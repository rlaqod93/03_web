$(document).ready(function(){
    console.log("DH ***** document")
     
    $('textarea').keydown(function(){
        $(this).addClass('on');
    }).keyup(function(){
        $('#display').text($(this).val());
    })
});