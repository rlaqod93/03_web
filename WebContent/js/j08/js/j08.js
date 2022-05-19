let w = window.screen.width;
let h = window.screen.height;

console.log(`screen.width : ${w}, screen.height : ${h}`);

window.onload = function(){
    let btn = document.getElementById('btn');
    btn.onclick = function(){
        window.open('http://192.168.3.23:5500/WebContent/js/j08/html/0506_h03.html', 'pcwk', 'width = 600, height = 400, left = ' + (w-600)/2 + ', top = ' + (h-400)/2);
    }
}