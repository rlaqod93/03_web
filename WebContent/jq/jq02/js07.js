$(document).ready(function(){
    console.log("DH ***** document")
    
    //mouseover
    $('.wrap1').mouseover(function(){
        // console.log('mouseover');
        $('.display').append('<strong>마우스오버</strong>')
    });

    //mouseenter
    $('.wrap2').mouseenter(function(){
        $('.display').append('<em>마우스엔터</em>');
    })
});