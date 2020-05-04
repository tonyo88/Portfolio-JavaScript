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


    //Form Validation

    $(function (){

      $("#fname_error_message").hide();
      $("#lname_error_message").hide();
      $("#email_error_message").hide();

      var error_fname = false;
      var error_lname = false;
      var error_email = false;
 
      $("#form-fname").focusout(function () {
        checkFirstName();
      });
      $("#form-lname").focusout(function () {
        checkLastName();
      });
      $("#form-email").focusout(function () {
        checkEmail();
      });

      function checkFirstName () {    
        let pattern = /^[a-zA-Z]*$/;
        let fname = $("#form-fname").val();

        if(pattern.test(fname) && fname !== '') {
          $("#fname_error_message").hide();
          $("#form-fname").removeClass("contact-error-input");
        } else{
          $("#fname_error_message").html("Should contain only Characters");
          $("#fname_error_message").show();
          $("#form-fname").addClass("contact-error-input");
          error_fname = true;
        }
      };

      function checkLastName () {    
        let pattern = /^[a-zA-Z]*$/;
        let lname = $("#form-lname").val();

        if(pattern.test(lname) && lname !== '') {
          $("#lname_error_message").hide();
          $("#form-lname").removeClass("contact-error-input");
        } else{
          $("#lname_error_message").html("Should contain only Characters");
          $("#lname_error_message").show();
          $("#form-lname").addClass("contact-error-input");
          error_lname = true;
        }
      };

      function checkEmail () {    
        let pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let email = $("#form-email").val();

        if(pattern.test(email) && email !== '') {
          $("#email_error_message").hide();
          $("#form-email").removeClass("contact-error-input");
        } else{
          $("#email_error_message").html("Invalid Email Address!");
          $("#email_error_message").show();
          $("#form-email").addClass("contact-error-input");
          error_email = true;
        }
      };

      $(".contact-form").submit(() =>{
        error_fname = false;
        error_lname = false;
        error_email = false;

        checkFirstName ();
        checkLastName ();
        checkEmail ();

        if(error_fname === false &&
           error_lname === false &&
           error_email === false) {
             alert("Success!");
             return true;
          } else{
             return false;
         }
      });

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
