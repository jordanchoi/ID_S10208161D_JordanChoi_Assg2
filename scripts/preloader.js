$(document).ready(function() {
    $("#preload-img2").fadeTo(800, 1);
    $("#preload-img1").delay(1000).fadeTo(800, 1);
    $(".preloader-text1").delay(1400).fadeTo(800, 1);
    $(".preloader-text2").delay(1800).fadeTo(800, 1);
    $(".preloader-text3").delay(2200).fadeTo(800, 1);
    var Body = $("body");
    Body.addClass("preloader-wrap");
    setTimeout(function() {
        $(".preloader").fadeOut("slow", "linear");
    }, 3000)
    setTimeout(function() {
        Body.removeClass("preloader-wrap");
    }, 4000)
});