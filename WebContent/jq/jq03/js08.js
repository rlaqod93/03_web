// AJAX
var oReg = new XMLHttpRequest();
var serverAddress = 'https://hacker-news.firebaseio.com/v0/topstories.json';

// 서버 응답 처리
function reqListener(e){
    console.log(`e.currentTarget.response : ${e.currentTarget.response}`);
}

// event감지
oReg.addEventListener('load', reqListener);
oReg.open('GET', serverAddress);
oReg.send();