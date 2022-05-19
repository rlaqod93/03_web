window.onload = function(){
    let list01 = document.querySelector('#box > ul > li');
    console.log(list01);

    // backgorund
    list01.style.background = "red";

    let list02 = document.querySelectorAll('#box02 > ul > li');
    console.log(list02);
    
    // 배열로 선택
    list02[0].style.background = "orange";

    list02.item(1).style.background = "yellow";
    list02[2].style.background = "green";
}