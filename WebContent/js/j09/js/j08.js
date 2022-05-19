window.onload = function(){
    console.log('window.onload');

    // login form 가지고 오기
    let loginForm = document.login;

    // submit이벤트 감지
    loginForm.onsubmit = function(){
        
        // id값 가져오기
        if(!loginForm.id.value){// id에 값이 없으면
            loginForm.id.focus();
            alert("아이디를 입력하세요");
            return false;
        }

        // pw값 가져오기
        if(!loginForm.pw.value){// pw에 값이 없으면
            loginForm.pw.focus();
            alert("비번을 입력하세요");
            return false;
        }
    }
}