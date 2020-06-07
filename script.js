
var position = 0;
$(document).ready(function () {
    setInterval(function () {
        // console.log("background-position:" + position + "px 0");
        position -= 2;
        $(".sliding-box").css("background-position", position + "px 0");
    }, 40)
    // menu button
    $('.menu-btn').on('click', function () {

        var elem = $(this),
            item = $('.menu__item'),
            active = 'is-active',
            play = 'menu__item--play';

        if (elem.hasClass(active)) {
            elem.removeClass(active);
            $(item.get().reverse()).each(function (i) {
                var row = $(this);
                setTimeout(function () {
                    row.removeClass(play);
                }, 50 * i);
            });
        }

        else {
            elem.addClass(active);
            item.each(function (i) {
                var row = $(this);
                setTimeout(function () {
                    row.addClass(play);
                }, 50 * i);
            });
        }

    });

})
