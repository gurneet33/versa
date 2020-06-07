
var position = 0;
$(document).ready(function () {
    setInterval(function () {
        // console.log("background-position:" + position + "px 0");
        position -= 2;
        $(".sliding-box").css("background-position", position + "px 0");
    }, 40)

})
