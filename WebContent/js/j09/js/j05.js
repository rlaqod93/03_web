function createElement(){
    console.log("createElement");
    let content = document.getElementById('content');
    content.innerHTML = '<p class="m1">자바스크립트</p>';
}
// addEventListener, 함수이름에 () 붙일 필요없음
addEventListener('load', createElement);