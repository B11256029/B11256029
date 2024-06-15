
function stopVideo() {
    var iframe = document.getElementById('youtube-video');
    iframe.src = iframe.src; 
}

new WOW().init();

$(window).scroll(function(){
    var windowTop=$(window).scrollTop();
    if(windowTop>40){
        $('nav').addClass('cc');
    }else{
        $('nav').removeClass('cc');
    };
});

$('.carousel').carousel({
    pause:'false',
});

$('.nav-link,a').click(function(){
    var t=$(this).attr('href');
    var st=$(t).offset().top-50;
    $('html,body').animate({
        scrollTop:st
    },500);
});

$('.r_body').delay(5000).fadeOut('slow');
$('#robot').click(function(){
    ($(this).html());
    sleep();
});

var r=true;

function sleep(){
    $('.r_body').toggle(function(){
        $('.r_body').css({opacity:1,height:350});
        if(r){
            $('#robot').addClass('animate__animated animate__rubberBand').bind('animationend',function(){
                $(this).removeClass('animate__animated animate__rubberBand');
            });
            $('#robot').removeClass('robot_pic').addClass('glyphicon glyphicon-remove');
            r=!r;
        }else{
            $('#robot').addClass('animate__animated animate__rubberBand').bind('animationend',function(){
                $(this).removeClass('animate__animated animate__rubberBand');
            });
            $('#robot').removeClass('glyphicon glyphicon-remove').addClass('robot_pic');
            r=!r;
        };
    });
};


function keyin(event){
    if(event.which==13){
        $('#rsay_to').append('<div class="row rr_div"><div class="talk">'+$('#r_say').val()+'<br>'+getDate()+'</div><div class="r_p r_pic"><span class="glyphicon glyphicon-user"></span></div>');
        $('#r_say').val("");
        answer(3);
    };
};

        var e=document.getElementById('rsay_to');
        e.scrollTop=e.scrollHeight;
        e.scrollLeft=e.scrollLeft;
    },500);
};

report();

function report(){
    ck=localStorage.s;
    if(ck!=null){
        $('#chat_to').html();
        a=ck.split("||");
        $('#chat_c').html(a.length);
        $('#chat_to').append('<ul>');
        for(i=0;i<a.length;i++){
            b=a[i].split("&&");
            if(a[i]!=""){
                $('#chat_to').append('<li class="chat-box"><b class="chat-tit"><span>'+
                b[0]+'</span><span>'+
                b[1].substr(0,5)+'*********'+'</span></b><box>'+
                b[2]+'</box></li>');
            };
        };
        var e=document.getElementById('chat_to');
        e.scrollTop=e.scrollHeight;
        $('#chat_to').append('</ul>');
        $('.chat-box').last().addClass('animate__animated animate__rubberBand').bind('animationend',function(){
            $(this).removeClass('animate__animated animate__rubberBand');
        });   
    };
};


var h=true;

function ilike(t){
    $(this).click(function(){
        if(h){
            $('#uplike'+t).removeClass('glyphicon glyphicon-heart-empty orange fw').addClass('glyphicon glyphicon-heart orange fw').addClass('animate__animated animate__rubberBand').bind('animationend',function(){
                $(this).removeClass('animate__animated animate__rubberBand');
            });
            num=parseInt($('#i-like'+t).text());
            num=num+1;
            $('#i-like'+t).html(num);
            h=!h;
        }else{
            $('#uplike'+t).removeClass('glyphicon glyphicon-heart orange fw').addClass('glyphicon glyphicon-heart-empty orange fw');
            num=parseInt($('#i-like'+t).text());
            num=num-1;
            $('#i-like'+t).html(num);
            h=!h;
        };
    });
};


$('.shop_add').each(function(i){
    $(this).click(function(){
        t=$('.shop_num').eq(i).val();
        t++;
        $('.shop_num').eq(i).val(t);
        cc();
    });
});

$('.shop_min').each(function(i){
    $(this).click(function(){
        t=$('.shop_num').eq(i).val();
        n=parseInt(t)-1;
        $('.shop_num').eq(i).val(n);
        if(n>=0){
            $('.shop_num').eq(i).val(n);
        }else{
            $('.shop_num').eq(i).val(0);
        };
        cc();
    });
});

$('.shop_num').change(function(){
    cc();
});

$('.shop_item>h5').hide();


$('#shop_close').click(function(){
    for(n=0;n<=5;n++){
        tmp=myChart.data.datasets[0].data[n];
        nt=parseInt($('.shop_num').eq(n).val());
        myChart.data.datasets[0].data[n]=tmp+nt;
    };

    var t=$('#report').offset().top-50;
    $('html,body').animate({
        scrollTop:t
    },500,function(){
        myChart.update();
    });

    $('.shop_no').text(0);
    $('.shop_num').val(0);
    $('#cart_sum').text(0);
    $('#cart_all').text(0);
    $('.shop_item>h5').hide();
});

$('.o_img').hover(function(){
    $(this).addClass('animate__animated animate__flip');
}).bind('animationend',function(){
    $(this).removeClass('animate__animated animate__flip');
});

$('.nav-link,.gly-link,a,.shop_add,.shop_min').click(function(){
    $(this).addClass('animate__animated animate__rubberBand');
}).bind('animationend',function(){
    $(this).removeClass('animate__animated animate__rubberBand');
});
