$(document).ready(function(){

  //----------nav-scroll--------------------------------------------------------
  $(".header__nav-item").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 800);
  });

// Set active class header__nav-item--active
$('.header__nav-item').click(function(e) {
  e.preventDefault();
  $('.header__nav a').removeClass('header__nav-item--active');
  $(this).addClass('header__nav-item--active');
});

//----------header__scroll------------------------------------------------------
  $(".header__scroll").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 800);
  });
});

//----------addClass-is-visible
if ($('#nav-scroll').length) {
  let scrollTrigger = 100, // px
    backToTop = function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#nav-scroll').addClass('is-visible');
      } else {
        $('#nav-scroll').removeClass('is-visible');
      }
    };
  backToTop();
  $(window).on('scroll', function () {
    backToTop();
  });
}

//----------buttunUp------------------------------------------------------------
if ($('#button-up').length) {
  let scrollTrigger = 300, // px
    backToTop = function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#button-up').addClass('is-visible');
      } else {
        $('#button-up').removeClass('is-visible');
      }
    };
  backToTop();
  $(window).on('scroll', function () {
    backToTop();
  });
  $('#button-up').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
}
