$( document ).ready(function() {

    var touch = is_touch_device();

    function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers
        || 'onmsgesturechange' in window; // works on ie10
    }

    if (touch == true) {
        $('.touch-device').css({
            'display': 'block'
        });
    } else {}

});



function cursorNone() {
    document.body.style.cursor = "pointer";
}

$(document).on('click', function (e) {
   console.log("fail!");
    document.body.style.cursor = "pointer";
    $('.message').css({
        'display': 'block'
    });
    $('.circle').css({
        'display': 'none'
    });
    $('.play').css({
        'display': 'block'
    });
});

$(".play").on('click', function (e) {
    e.stopPropagation();
    $('.bg').css({
        'cursor': 'none'
    });
   document.body.style.cursor = "none";
    console.log("play!");
    $('.play').css({
        'display': 'none'
    });
    $('.circle').css({
          'display': 'block',
          'color': 'pink',
          'border-radius': '50%'
    });
    $('.message').css({
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
      console.log('screen width = ' + w);
      console.log('screen height = ' + h);

      console.log('circle diameter = ' + diameter);

      // if diameter < 50: "ouch good lick!"


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
