$(document).ready(function(){
    $('#m1').removeClass('box');
    
    $('#m2 > div').removeClass(function(index){
        console.log(`index : ${index}`);
        return 'circle0';
    });
});