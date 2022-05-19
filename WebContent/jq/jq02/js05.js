$(document).ready(function(){
    // console.log("DH ***** document")
    // $('#html') 
    console.log($('input:checkbox').eq(0).attr('checked'));
    console.log($('input:checkbox').eq(0).prop('checked'));

    $('input:checkbox').eq(0).attr('checked', 'checked');
    $('input:checkbox').eq(1).prop('checked', true);
});