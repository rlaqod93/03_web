window.onload = function(){
    console.log('window.onload');
    let bt = document.getElementById('bt');
    let i = 0;
    let increase = setInterval(function(){
        i++;
        alert("2초마다 수행 : " + i);
    }, 2000);
    bt.onclick = function(){
        clearInterval(increase);
    }
}