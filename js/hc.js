$( document ).ready(function() {

    var touch = is_touch_device();
    function is_touch_device() {
        return 'ontouchstart' in window || 'onmsgesturechange' in window; // works on ie10
        // 'ontouchstart' works on most browsers, 'onmsgesturechange works on ie10
    }
    if (touch === true) {
        $('.touch-device').css({
            'display': 'block'
        });
    } else {}

    counterReset();
});


function counterReset() {
    clicksCount = 0;
    $( "#counter" ).html( "0" );
}


function cursorNone() {
    document.body.style.cursor = "pointer";
}

// Fail!
$(document).on('click', function (e) {
   // console.log("fail!");
    document.body.style.cursor = "pointer";
    $('.fail-message').css({
        'display': 'block'
    });
    $('.play').css({
        'display': 'block'
    });
    $('.circle').css({
        'display': 'none'
    });
    $('.directions').css({
        'display': 'none'
    });
});

$(".play").on('click', function (e) {
    e.stopPropagation();
    counterReset();
    $('.bg').css({
        'cursor': 'none'
    });
   document.body.style.cursor = "none";
    $('#counter').css({
        'display': 'block'
    });
    $('.play').css({
        'display': 'none'
    });
    $('.circle').css({
          'display': 'block',
          'color': 'pink',
          'border-radius': '50%'
    });
    $('.fail-message').css({
        'display': 'none'
    });
    $('.directions').css({
        'display': 'none'
    });
});

$(".circle").on('click',function(e) {
    e.stopPropagation();
    var h = $(window).height();
    var w = $(window).width();
    var diameter = Math.floor(Math.random() * w);
    var top = Math.floor(Math.random() * (h - diameter));
    var left = Math.floor(Math.random() * (w- diameter));
    var c = getRandomColor();
      // console.log('screen width = ' + w);
      // console.log('screen height = ' + h);

      // console.log('circle diameter = ' + diameter);

    clicksCount += 1;
    $( "#counter" ).html( clicksCount );

    $(this).css({
    'left': left+'px',
    'top': top+'px',
    'height': diameter+'px',
    'width': diameter+'px',
    'background-color': c
 });
});


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
        return color;
}
