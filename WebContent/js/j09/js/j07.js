window.onload = function(){
    console.log("window onload");
    
    // form 선택
    let form1 = document.form1;
    let form2 = document.form2;
    
    // form name.placeholder선택
    console.log(`form1.search.placeholder : ${form1.search.placeholder}`);
    console.log(`form2.subject.placeholder : ${form2.subject.placeholder}`);

    console.log(`document.forms[0].elements[0].placeholder : ${document.forms[0].elements[0].placeholder}`);
    console.log(`document.forms[1][1].placeholder : ${document.forms[1][1].placeholder}`);
    // 요소이름으로 접근
    console.log(`document.forms['form1'].elements['search'].placeholder : ${document.forms['form1'].elements['search'].placeholder}`);
    console.log(`document.forms['form2']['subject'].placeholder : ${document.forms['form2']['subject'].placeholder}`);
}