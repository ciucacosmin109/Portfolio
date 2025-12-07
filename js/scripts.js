/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          500,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });
})(jQuery); // End of use strict

/* Hero background fade: fade to white as user scrolls to #experienceEducation */
(function ($) {
  "use strict";

  $(function () {
    var $overlay = $("#hero-overlay");
    var $bg = $("#hero-bg");
    var $target = $("#experienceEducation");
    var startingOpacity = 0.3; // initial overlay opacity

    function updateFade() {
      var st = $(window).scrollTop();

      var start = 0;
      var end = $target.length ? $target.offset().top : $(document).height();
      var progress = 0;

      if (end > start) {
        progress = Math.min(
          Math.max((st - start) / (end - start), 0) + startingOpacity,
          1
        );
      }

      // overlay opacity goes 0 -> 1, background fades out 1 -> 0
      $overlay.css("opacity", progress);
      $bg.css("opacity", 1 - progress);
    }

    // update on scroll/resize and initialize
    $(window).on("scroll.heroFade resize.heroFade load.heroFade", function () {
      updateFade();
    });

    // initial call
    updateFade();
  });
})(jQuery);
