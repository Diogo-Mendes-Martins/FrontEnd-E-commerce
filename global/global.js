//Botão topo
mybutton = document.getElementById("botaoTopo");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; //Navegador Safari
  document.documentElement.scrollTop = 0; // Navegadores Chrome, Firefox, IE e Opera
}

//Header
//Navegação mobile
if ($("#nav-menu-container").length) {
  var $mobile_nav = $("#nav-menu-container").clone().prop({
    id: "mobile-nav",
  });
  $mobile_nav.find("> ul").attr({
    class: "",
    id: "",
  });
  $("body").append($mobile_nav);
  $("body").prepend(
    '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
  );
  $("body").append('<div id="mobile-body-overly"></div>');
  $("#mobile-nav")
    .find(".menu-has-children")
    .prepend('<i class="fa fa-chevron-down"></i>');

  $(document).on("click", ".menu-has-children i", function (e) {
    $(this).next().toggleClass("menu-item-active");
    $(this).nextAll("ul").eq(0).slideToggle();
    $(this).toggleClass("fa-chevron-up fa-chevron-down");
  });

  $(document).on("click", "#mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
    $("#mobile-body-overly").toggle();
  });

  $(document).click(function (e) {
    var container = $("#mobile-nav, #mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
        $("#mobile-body-overly").fadeOut();
      }
    }
  });
} else if ($("#mobile-nav, #mobile-nav-toggle").length) {
  $("#mobile-nav, #mobile-nav-toggle").hide();
}

// Smooth scroll
$(".nav-menu a, #mobile-nav a, .scrollto").on("click", function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    if (target.length) {
      var top_space = 0;

      if ($("#header").length) {
        top_space = $("#header").outerHeight();

        if (!$("#header").hasClass("header-fixed")) {
          top_space = top_space - 20;
        }
      }

      $("html, body").animate(
        {
          scrollTop: target.offset().top - top_space,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".nav-menu").length) {
        $(".nav-menu .menu-active").removeClass("menu-active");
        $(this).closest("li").addClass("menu-active");
      }

      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
        $("#mobile-body-overly").fadeOut();
      }
      return false;
    }
  }
});

//Hamburguer

var leftOffset = parseInt($(".menu").css('left')); //Grab the left position left first
$(window).scroll(function(){
    $('.menu').css({
        'left': $(this).scrollLeft() + leftOffset //Use it later
    });
});
