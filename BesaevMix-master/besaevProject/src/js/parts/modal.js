$(document).ready(function(){
  //----------modal to hide------
  $('.header__btn').click(function(){
    $('.modal').addClass('modal--active');
  });
  $('#exit').click(function(){
    $('.modal').removeClass('modal--active');
  });
//----------not-scroll------
  $('#connect').click(function (event) {
   $("body").css("overflow","hidden");
 });
 $('#exit').click(function (event) {
   $("body").css("overflow","auto");
 });
});
