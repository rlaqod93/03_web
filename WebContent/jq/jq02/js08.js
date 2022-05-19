$(document).ready(function(){
    // console.log("DH ***** document")
    // Event 감지 및 처리
    $('#m1 input').focus(function(){
        // console.log('focus')
        $(this).addClass('on');
    }).blur(function(){
        $(this).removeClass('on');
    });

    $('#m2').focusin(function(){
        $(this).children().addClass('on');
    }).focusout(function(){
        $(this).children().removeClass('on');
    });

    // change() : 선택된 요소의 값이 변경 되었을 때 이벤트가 발생
    $('#m3 input').change(function(){
        let msg = confirm("값을 변경하시겠습니까??");
        console.log("msg : " + msg);
        if(!msg){
            $(this).val(10);
        }
    });

    $('#m4 input').select(function(){
        let v = $(this).val();
        let size = v.length;
        console.log("v : " + v);
        alert(v + "총 " + size + "문자를 선택하셨습니다.");
    });

    $('.frm').submit(function(){
        // console.log("submit");
        if(!$('#id').val()){
            // alert("아이디를 입력하세요.");
            $('.msg1').css('display', 'block');
            $('#id').focus();
            return false;
        }else{
            $('.msg1').css('display', 'none');
        }

        if(!$('#pw').val()){
            // alert("아이디를 입력하세요.");
            $('.msg2').css('display', 'block');
            $('#pw').focus();
            return false;
        }else{
            $('.msg2').css('display', 'none');
        }
    });
});