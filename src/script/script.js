let carousel = new
function() {

    let timer = null;

    let start = function() {
        doCarousel();
    };

    let sliding = function() {
        let item_width = $('#list__item .item').outerWidth() + 10;
        let left_indent = parseInt($('#list__item').css('left')) - item_width;
        $('#list__item:not(:animated)').animate({
            'left': left_indent
        }, 2000, 'linear', function() {
           $('#list__item .item:last').after($('#list__item .item:first'));
            $('#list__item').css({
                'left': '0px'
            });
        });
    };

    let slidingbis = function() {
        let item_width = $('#list__item__reverse .item').outerWidth() + 10;
        let right_indent = parseInt($('#list__item__reverse').css('right')) - item_width;
        $('#list__item__reverse:not(:animated)').animate({
            'right': right_indent
        }, 2000, 'linear', function() {
           $('#list__item__reverse .item:last').after($('#list__item__reverse .item:first'));
            $('#list__item__reverse').css({
                'right': '330px'
            });
        });
    };

    let doCarousel = function() {
        timer = setInterval(sliding, 0);
        timer = setInterval(slidingbis, 0);
    };

    let pause = function() {
        clearInterval(timer);
        timer = null;
    };

    let resume = function() {
        doCarousel();
    };

    this.init = function() {
        start();
    };
}();

$(function() {
   	carousel.init();
});

// $('#list__item .item').click(function(){ 
// 	alert("hey");
//     clearInterval(timer);
//     timer = null;
//     pause();
//     carousel.pause();
// });

// $('#list__item__reverse .item').click(function(){ 
// 	alert("hey");
//     clearInterval(timer);
//     timer = null;
//     pause();
//     carousel.pause();
// });