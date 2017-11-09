$(document).ready(function(){
// //----------Class-active for navigation-----------------------------------------
//   $('.header__link').click(function(e){
//     $('.header__nav a').removeClass('header__link--active');
//     $(this).addClass('header__link--active');
//   });
//
//   //----------nav-scroll--------------------------------------------------------
//   $(".header__link").on("click", function (event) {
//     event.preventDefault();
//     let id = $(this).attr('href'),
//       top = $(id).offset().top;
//
//     $('body,html').animate({ scrollTop: top }, 800);
//   });

//----------header__scroll------------------------------------------------------
  $(".header__scroll").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 800);
  });
});

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
