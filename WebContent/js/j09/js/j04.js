function createAttribute(){
    // console.log("createAttribute");

    let bt = document.getElementById('bt');

    function popup(){
        // console.log("popup");
        let div = document.createElement('div');
        let a = document.createElement('a');
        let txt = document.createTextNode("NAVER");
        
        // <a>NAVER</a>
        a.appendChild(txt);
        // body > div > a > txt
        div.appendChild(a);
        // 속성 추가
        a.setAttribute('href', 'http://www.naver.com');
        a.setAttribute('target', '_blank');
        a.setAttribute('title', '새탭');

        // body에 div추가
        document.body.appendChild(div);
    }
    bt.onclick = popup;
}

addEventListener('load', createAttribute);