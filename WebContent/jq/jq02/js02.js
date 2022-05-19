$(document).ready(function(){
    $('#m1').addClass('box');
    $('#m2 > div').addClass(function(index){
        console.log(`index : ${index}`);
        return 'circle' + index;
    });
});