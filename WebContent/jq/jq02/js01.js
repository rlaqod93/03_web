$(document).ready(function(){
    // html 취득
    console.log("html() : " + $('#m1').html());
    console.log("text() : " + $('#m1').text());

    // html 생성, 변경
    console.log($('#m1').html('<h3>html<h3>'));

    $('#m2 > div').html(function(index, h){
        console.log(`index : ${index}, h : ${h}`);
        return `<strong>index : ${index}, h : ${h}</strong>`;
    })
});

