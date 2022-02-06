$(document).ready(function () {
    $("#top-nav").mouseover(function () {
        if (!$("#nav-container").hasClass("active")) {
            $("#nav-container").addClass("active");
        }
    });

    $("#top-nav").mouseout(function () {
        if ($("#nav-container").hasClass("active")) {
            $("#nav-container").removeClass("active");
        }
    });

    $(window).scroll(function () {
        if (($(this).scrollTop() + $(this).height()) > $("#promotion").offset().top) {
            $("#promotion").children().removeClass("hide");
            $("#promotion").children().addClass("animate__animated animate__fadeIn animate__slow");
        }

        if (($(this).scrollTop() + $(this).height() - 150) > $("#punch-line").offset().top) {
            $("#punch-line").children().removeClass("hide");
            $("#punch-line").children().addClass("animate__animated animate__fadeIn animate__slow");
        }

        if (($(this).scrollTop() + $(this).height() - 200) > $("#pricing").offset().top) {
            $("#pricing").children().removeClass("hide");
            $("#pricing").children().addClass("animate__animated animate__fadeIn animate__slow");
        }

        if (($(this).scrollTop() + $(this).height() - 200) > $("#map").offset().top) {
            $("#map").children().removeClass("hide");
            $("#map").children("h1").addClass("animate__animated animate__fadeIn animate__slow");
            $("#map").find("img").addClass("animate__animated animate__fadeInRight animate__slow");
            $("#map").find("iframe").addClass("animate__animated animate__fadeInLeft animate__slow");
        }

        if (($(this).scrollTop() + $(this).height()) > $("#washer").offset().top) {
            $("#washer").children().removeClass("hide");
            $("#washer").children("img").addClass("animate__animated animate__fadeInLeft animate__slow");
            $("#washer").children(".content-container").addClass("animate__animated animate__fadeInRight animate__slow");
        }

        if (($(this).scrollTop() + $(this).height()) > $("#dryer").offset().top) {
            $("#dryer").children().removeClass("hide");
            $("#dryer").children("img").addClass("animate__animated animate__fadeInRight animate__slow");
            $("#dryer").children(".content-container").addClass("animate__animated animate__fadeInLeft animate__slow");
        }
    });
});