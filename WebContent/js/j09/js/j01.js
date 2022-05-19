window.onload = function(){
    let gnb = document.querySelector('#gnb');
    console.log("window onload");
    console.log(`gnb.parentNode : ${gnb.parentNode}`);
    console.log(`gnb.children[0] : ${gnb.children[0]}`);
    console.log(`gnb.children[0].children[0] : ${gnb.children[0].children[0]}`);
    console.log(`gnb.children[0].children[0].nextElementSibling : ${gnb.children[0].children[0].nextElementSibling}`);
    console.log(`gnb.children[0].children[0].previousElementSibling : ${gnb.children[0].children[0].previousElementSibling}`);
    console.log(`gnb.children[0].firstChild : ${gnb.children[0].firstChild}`);
    console.log(`gnb.children[0].lastChild : ${gnb.children[0].lastChild}`);
}