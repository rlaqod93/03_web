window.onload = function(){
    console.log("window onload");

    // table 가져오기
    let table = document.getElementById('tableList');
    
    let rows = table.querySelectorAll('tr');

    // 1번째는 header이므로 제외
    // tr 이벤트 감지
    console.log("rows.length : " + rows.length);
    for(let i = 1; i < rows.length; i++){
        let row = rows[i];
        console.log(`row.tagName : ${row.tagName}`);
        row.onclick = function(event){
            console.log("row.onclick");
            // this.cells : td 배열
            let noText = this.cells[5].innerText;
            console.log(`this.cells[0] : ${this.cells[0]}`);
            console.log(`noText : ${noText}`);
        }
    }
}