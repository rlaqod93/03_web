window.onload = function(){
    let bt = document.getElementById('bt');

    function popup(){
        console.log("popup");
        let div = document.createElement('div');
        let p = document.createElement('p');
        let txt = document.createTextNode("오늘은 16:00까지 수업합니다~^^");

        // div > p > txt
        p.appendChild(txt);
        div.appendChild(p);
        
        // body > div
        document.body.appendChild(div);
    };
    // 버튼 클릭 이벤트 감지
    bt.onclick = popup;
}