$(document).ready(function(){
    console.log('DH ***** document');
    
    $('.list1 > li[class="list_1"]').css('border', '2px solid red');
    $('.list1 > li[class!="list_1"]').css('border', '2px solid orange');
    $('.list2 > li[class*="list"]').css('border', '2px solid green');
    $('.list2 > li[class$="bg"]').css('background', 'lightgreen');
});