$(document).ready(function(){
    // console.log("DH ***** document")

    $('#m1 button').on('click', function(){
        // console.log("#m1.button click")
        // alert("#m1 button click")
    })

    // button click
    $('#m2').on('click', 'button', function(){
        alert('#m2 button');
    })

    // 이벤트 여러개 : mouseenter, mouseleave
    $('#m3 button').on({
        mouseenter: function(){
            // console.log("mouseenter")
            // $(this).toggleClass('on');
            $(this).addClass('on');
        }, mouseleave: function(){
            // console.log("mouseleave")
            // $(this).toggleClass('on');
            $(this).removeClass('on');
        }
    })

    // js function 연결
    // 함수
    function showEvent(){
        alert("오늘은 즐거운 목요일!");
    }

    $('#m4 button').on('click', showEvent); // 함수 호출에 '()' 넣으면 안됨

    // event 제거 off
    $('#m5 button').on('click', function(){
        alert('event제거!');
    }).off();

    // 일회성 event
    $('#m6 button').one('click', function(){
        alert("일회성 이벤트!")
    })

    $('#m7').on('click', function(){
        // #m7과 p연결
        $('p', this).css('background', 'red');
    })
});