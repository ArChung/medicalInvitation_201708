var mom = $('.container');
var pages = $('.page');

$(document).ready(function() {
    // mom.click(goNext);

    // playAni($('.p1'))




    // initLoading();
    // initPop();
    // initLine();

    // TweenMax.to($('.updown'), .3, { transform: "translateY(-20px)", yoyo: true, repeat: -1, ease: Power1.easeInOut });
    // TweenMax.to($('.arr'), .6, { transform: "translateY(-20px)", yoyo: true, repeat: -1, ease: Power1.easeInOut });

    // initBtn();
    initSwipeEvent();

})


function initSwipeEvent(){
    console.log(123)
    $('.bigContainer').on('swipedown',function(){alert("swipedown..");} );
    $('.bigContainer').on('swipeup',function(){alert("swipeup..");} );
}

function initBtn() {
    $('.homeBtn').click(function() {
        ChungTool.removeClassWithFilter(mom, 'channel_');
        mom.addClass('channel_1');
        playAni($('.p1'));

    })
}


function initPop() {

    $('.calendarBtn').click(function() {
        simpleShow($('.calendarPop'));
    })

    $('.calendarPop .bg').click(function() {
        simpleHide($('.calendarPop'))
    })

    $('.calendarPop .clozBtn').click(function() {
        simpleHide($('.calendarPop'));
    })

}

function initLine() {
    $('.lineBtn').click(function() {
        ChungTool.shareToLine('https://archung.github.io/medicalInvitation/index.html');
    })
}

function initLoading() {
    //loading animation
    TweenMax.to('.loading .wTxt', .3, { autoAlpha: .3, yoyo: true, repeat: -1, ease: Power2.easeInOut })


    $('body').waitForImages({
        finished: function() {
            $('.loading').addClass('hide');
            ChungTool.addSwipeUpDownEvent(mom, goPrev, goNext);
            playAni($('.p1'));

        },
        each: function(loaded, count, success) {
            var r = Math.floor(loaded / count * 100);
            $('.loading').find('i').html(r);
            console.log(r)
        },
        waitForAll: true
    });
}


function playAni(page) {
    var ani = new TimelineMax();


    ani.set(page.find('.wrap'), { perspective: 1000 })
        .set(page.find('.wrap > *'), { autoAlpha: 0 })
        .set(page.find('.lAni'), { marginLeft: -60 })
        .set(page.find('.rAni'), { marginLeft: 60 })
        .set(page.find('.tAni'), { marginTop: -60 })
        .set(page.find('.bAni'), { marginTop: 60 })
        .set(page.find('.roleAni'), { rotationY: 60 })
        .set(page.find('.roleRAni'), { rotationY: 60, transformOrigin: '120% 0%' })
        .staggerTo(page.find('.wrap > *'), 1, { autoAlpha: 1, marginTop: 0, marginLeft: 0, rotationY: 0, ease: Back.easeOut }, .1)


}




function goNext() {


    var cNow = parseInt(ChungTool.returnClassNameWithFilter(mom, 'channel_'));
    var cNext = cNow + 1;

    if (cNext > pages.length) {
        // cNext = 1;
        return;
    }

    ChungTool.removeClassWithFilter(mom, 'channel_');
    mom.addClass('channel_' + cNext);
    playAni($('.p' + cNext));
}



function goPrev() {
    var cNow = parseInt(ChungTool.returnClassNameWithFilter(mom, 'channel_'));
    var cNext = cNow - 1;

    if (cNext < 1) {
        return;
    }

    ChungTool.removeClassWithFilter(mom, 'channel_');
    mom.addClass('channel_' + cNext);
    playAni($('.p' + cNext));

}
