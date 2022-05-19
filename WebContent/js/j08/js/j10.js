let browser = window.navigator.userAgent;

// console.log(browser);

// 브라우저 정보 추출
function getBrowserInfo(){
    let agent = window.navigator.userAgent.toUpperCase();
    console.log("agent : " + agent);

    if(agent.lastIndexOf("EDG") > 0){
        return "EDGE";
    }else if(agent.indexOf("CHROME") > 0){
        return "CHROME";
    }else if(agent.indexOf("TRIDENT") > 0){
        return "IE";
    }else if(agent.indexOf("FIREFOX") > 0){
        return "FIREFOX";
    }else{
        return "";
    }
};

window.onload = function(){
    let btn = document.getElementById('btn');
    btn.onclick = function(){
        // console.log("btn.onclick");
        alert(getBrowserInfo());
    }
};