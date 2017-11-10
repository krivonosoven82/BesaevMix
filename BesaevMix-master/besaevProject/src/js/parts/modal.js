$(document).ready(function(){
  //----------modal to hide------
  $('.header__btn').click(function(){
    $('.modal').addClass('modal--active');
  });
  $('#exit').click(function(){
    $('.modal').removeClass('modal--active');
  });
});
