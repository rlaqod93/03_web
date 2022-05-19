$(document).ready(function(){
    // console.log("DH ***** document")
     
    $('button').on('click', function(event){
        console.log(`event: ${event}`);
        $.each(event, function(properties, value){
            console.log(`properties : ${properties}, value : ${value}`);
            $('.display').append("<p>" + properties + ":" + value + "</p>");
        })
    })
});