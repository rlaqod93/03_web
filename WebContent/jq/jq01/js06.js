$(document).ready(function(){
    console.log('DH ***** document');
    
    $('div').each(function(index, element){
        // console.log(`index : ${index}`);
        // console.log(`element : ${element}`);

        // console.log($(this).attr('class'));
        console.log($('div:eq( '+ index + ')').attr('class'))
    });
});