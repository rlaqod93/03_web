window.onload = function(){
    let frm = document.frm;
    let date = new Date();
    let year = date.getFullYear();
    console.log(`year : ${year}`);

    for(let i = 1970; i <= year; i++){
        frm.year.add(new Option(i, i));
    }

    for(let i = 1; i <= 12; i++){
        frm.month.add(new Option(i, i));
    }
    // 보여주는 갯수 설정
    frm.month.length = 13;
}