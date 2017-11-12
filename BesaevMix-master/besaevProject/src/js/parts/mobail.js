$(document).ready(function(){
  //----------show - header__nav-mobail------
  $('.header__nav-mobail').hide();
  $('#mobail').click(function(){
    $('.header__nav-mobail').slideToggle(300);
  });

  //----------navigate - to web page------
  $(".mobail__item").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 800);
  });

  //----------add class active for mobail-item
  $('.mobail__item').click(function(e) {
    e.preventDefault();
    $('.header__nav-mobail a').removeClass('mobail__item--active');
    $(this).addClass('mobail__item--active');
  });

  //----------scroll mobail------
  if ($('#mobail-scroll').length) {
    let scrollTrigger = 100, // px
      backToTop = function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#mobail-scroll').addClass('is-visible');
        } else {
          $('#mobail-scroll').removeClass('is-visible');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
  }
});
