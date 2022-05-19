$(document).ready(function(){
    // console.log("DH ***** document")
     
    // $('div:nth-child(1)').css({padding: 10, "text-align" : "center"});
    $('div:nth-child(1)').css('padding', 10).css('text-align', 'center');

    $('div').css('width', function(index){
        console.log(`index : ${index}, ${index * 100 + 100}`);
        return index * 100 + 100;
    });
});