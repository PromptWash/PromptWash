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
});