'use strict'

$("#sammiEyes").fadeIn(4500).delay(500).fadeOut(30000);
$("#inMemoriam").fadeIn(4500).delay(26000).fadeOut(11000);

setTimeout(function() {
    $("#quote").fadeIn(5000).delay(20000).fadeOut(5000);
}, 45000);

setTimeout(function() {
    $("#sammiBeach").fadeIn(15000).delay(400).fadeOut(17000);
}, 40000);

setTimeout(function() {
    $("#miss").fadeIn(15000);
}, 139000);

setTimeout(function() {
    $("#sammiSnow").fadeIn(15000);
}, 139000);

let delay = 20000;

$(".sammiPic").each(function() {
    let $pic = $(this);

    $pic.queue('display', function() {
        $pic.delay(delay).fadeIn(15000).delay(400).fadeOut(17000);
    });

    $pic.dequeue('display');

    delay += 15000;
});