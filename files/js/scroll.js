
$(document).ready(function() {
    $("#arrow").click(function() {
        $([document.documentElement, document.body]).animate({
        scrollTop: $("#header").offset().top
        }, 800);
    });
});

$(document).ready(function() {
    $("#headerNav").click(function() {
        $([document.documentElement, document.body]).animate({
        scrollTop: $("#header").offset().top
        }, 800);
    });
});

$(document).ready(function() {
    $("#servicesNav").click(function() {
        $([document.documentElement, document.body]).animate({
        scrollTop: $("#services").offset().top
        }, 800);
    });
});

$(document).ready(function() {
    $("#pricesNav").click(function() {
        $([document.documentElement, document.body]).animate({
        scrollTop: $("#prices").offset().top
        }, 800);
    });
});

$(document).ready(function() {
    $("#galleryNav").click(function() {
        $([document.documentElement, document.body]).animate({
        scrollTop: $("#gallery").offset().top
        }, 800);
    });
});

$(document).ready(function() {
    $("#contactsNav").click(function() {
        $([document.documentElement, document.body]).animate({
        scrollTop: $("#contacts").offset().top
        }, 800);
    });
});