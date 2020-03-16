window.onload = () => {
  $(document).ready(() => {

    //Animate ScrollUp-Btn

    $(".scroll-up-btn").click(() => {
      $("body").animate({ scrollTop: 0 }, duration);
      $("#main-nav").removeClass("active-open-mobile-menu");
      $(".btn-line").removeClass("active-toggle-btn");
    });

    //Logo Active Styles 

    $(".logo").click(() => {
      $("#main-nav").removeClass("active-open-mobile-menu");
      $(".btn-line").removeClass("active-toggle-btn");
    });

    $(".footer-menu ul li a").click(() => {
      $("#main-nav").removeClass("active-open-mobile-menu");
      $(".btn-line").removeClass("active-toggle-btn");
    });

    //Active Mobile-Menu

    $("#toggle-btn").click(() => {
      $(".btn-line").toggleClass("active-toggle-btn");
      $("#main-nav").toggleClass("active-open-mobile-menu");
    });

    $("#main-nav #menu li a").click(() => {
      $(".btn-line").removeClass("active-toggle-btn");
      $("#main-nav").removeClass("active-open-mobile-menu");
    });

    //Active Professional Skills Progress

    $(".skills-container").mousemove(() => {
     $(".skill .percent .outer-progress .inner-progress").addClass("active-inner-progress");
    });
    
  });

  let offset = 300;
  let duration = 400;

  $(window).scroll(() => {

    //Active ScrollUp-Btn

    if ($(this).scrollTop() > offset) {
      $(".scroll-up-btn").fadeIn(duration);
    } else {
      $(".scroll-up-btn").fadeOut(duration);
    }
  });

  //Nav - Current Link / Current Section

  $('#menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });

  //Wow-Animations-OnScroll

  new WOW().init();
};
