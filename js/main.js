// $(".b_description").on("click", ".b_person", function() {


// $(this).toggleClass("active").next().slideToggle();


// });

$(document).ready(function(){
  $(".b_person1").click(function(){
    $(".b_text1").slideToggle();
  });
});

$(document).ready(function(){
  $(".b_person2").click(function(){
    $(".b_text2").slideToggle();
  });
});

$(document).ready(function(){
  $(".b_person3").click(function(){
    $(".b_text3").slideToggle();
  });
});

$(document).ready(function(){
  $(".b_person4").click(function(){
    $(".b_text4").slideToggle();
  });
});

$(document).ready(function(){
  $(".b_person5").click(function(){
    $(".b_text5").slideToggle();
  });
});

$(document).ready(function(){
  $(".b_person6").click(function(){
    $(".b_text6").slideToggle();
  });
});

$(window).on("scroll", function() {
     var position = $("#begin").offset();

     if ($(window).scrollTop() > position.top - 580) {
         $("nav").addClass("active");
     } else {
         $("nav").removeClass("active");
     };
});

$("nav[href^='#']").click(function(e) {
     e.preventDefault();

     var position = $($(this).attr("href")).offset().top;

     $("body, html").animate({
         scrollTop: position
     } /* speed */ );
});

// $(".b_person").click(function(){
// $(".b_text").hide();
// });

// $(".b_person").click(function(){
//   $(".b_text").fadeOut();
// });

$(document).ready(function(){
  $(".b_togglebutton2").click(function(){
    $(".b_toggle2").slideToggle();
  });
});

// Dropdown

// $("html").click(function() {
//      $(".dropdown").hide();
// });

// $("nav ul li a:not(:only-child)").click(function(e) {
//      $(this).siblings(".dropdown").toggle();

//      $(".dropdown").not($(this).siblings()).hide();
//      e.stopPropagation();
// });

// Dropdown

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

//Cients slider

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

})(jQuery); // End of use strict



// Blog Section

$(document).ready(function(){
  $(".blog_btn1").click(function(){
    $(".blog_more1").slideToggle();
  });
});

//Services

$(document).ready(function(){
  $(".blog_btn1").click(function(){
    $(".blog_more1").slideToggle();
  });
});

$(document).ready(function(){
  $(".blog_btn2").click(function(){
    $(".blog_more2").slideToggle();
  });
});

$(document).ready(function(){
  $(".blog_btn3").click(function(){
    $(".blog_more3").slideToggle();
  });
});

$(document).ready(function(){
  $(".blog_btn4").click(function(){
    $(".blog_more4").slideToggle();
  });
});

$(document).ready(function(){
  $(".blog_btn5").click(function(){
    $(".blog_more5").slideToggle();
  });
});

$(document).ready(function(){
  $(".blog_btn6").click(function(){
    $(".blog_more6").slideToggle();
  });
});

$(document).ready(function(){
  $(".blog_btn8").click(function(){
    $(".blog_more8").slideToggle();
  });
});

$(document).ready(function(){
  $(".blog_btn9").click(function(){
    $(".blog_more9").slideToggle();
  });
});

$(document).ready(function(){
  $(".blog_btn10").click(function(){
    $(".blog_more10").slideToggle();
  });
});

//Services

$(document).ready(function(){
  $(".btn_service1").click(function(){
    $(".service_more1").slideToggle();
  });
});

$(document).ready(function(){
  $(".btn_service2").click(function(){
    $(".service_more2").slideToggle();
  });
});

$(document).ready(function(){
  $(".btn_service3").click(function(){
    $(".service_more3").slideToggle();
  });
});

//////////

$(document).ready(function(){
  $(".btn_service1_1").click(function(){
    $(".service_more1_1").slideToggle();
  });
});

$(document).ready(function(){
  $(".btn_service1_2").click(function(){
    $(".service_more1_2").slideToggle();
  });
});

$(document).ready(function(){
  $(".btn_service1_3").click(function(){
    $(".service_more1_3").slideToggle();
  });
});

$(document).ready(function(){
  $(".btn_service1_4").click(function(){
    $(".service_more1_4").slideToggle();
  });
});

$(document).ready(function(){
  $(".btn_service2_1").click(function(){
    $(".service_more2_1").slideToggle();
  });
});

$(document).ready(function(){
  $(".btn_service2_2").click(function(){
    $(".service_more2_2").slideToggle();
  });
});

$(document).ready(function(){
  $(".btn_service2_3").click(function(){
    $(".service_more2_3").slideToggle();
  });
});


function toggleswitch1_1() {
  var x = document.getElementById("b_toggle1_2");
  x.style.display = "none";
  var y = document.getElementById("b_toggle1_3");
  y.style.display = "none";
   var z = document.getElementById("b_toggle1_4");
  z.style.display = "none";
  
   }

function toggleswitch1_2() {
  var x = document.getElementById("b_toggle1_1");
  x.style.display = "none";
  var y = document.getElementById("b_toggle1_3");
  y.style.display = "none";
   var z = document.getElementById("b_toggle1_4");
  z.style.display = "none";
  
   }

function toggleswitch1_3() {
  var x = document.getElementById("b_toggle1_1");
  x.style.display = "none";
  var y = document.getElementById("b_toggle1_2");
  y.style.display = "none";
   var z = document.getElementById("b_toggle1_4");
  z.style.display = "none";
  
   }

function toggleswitch1_4() {
  var x = document.getElementById("b_toggle1_1");
  x.style.display = "none";
  var y = document.getElementById("b_toggle1_2");
  y.style.display = "none";
  var z = document.getElementById("b_toggle1_3");
  z.style.display = "none";
   }

function toggleswitch2_1() {
  var x = document.getElementById("b_toggle2_2");
  x.style.display = "none";
  var y = document.getElementById("b_toggle2_3");
  y.style.display = "none";
   }

function toggleswitch2_2() {
  var x = document.getElementById("b_toggle2_1");
  x.style.display = "none";
  var y = document.getElementById("b_toggle2_3");
  y.style.display = "none";
   }

function toggleswitch2_3() {
  var x = document.getElementById("b_toggle2_1");
  x.style.display = "none";
  var y = document.getElementById("b_toggle2_2");
  y.style.display = "none";
   }