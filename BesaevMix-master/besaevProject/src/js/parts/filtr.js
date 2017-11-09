$(document).ready(function(){

//----------filter--------------------------------------------------------------
  $('.gallery__btn').click(function(){
    let category = $(this).attr('id');
    if(category == 'all'){
      $('.gallery__item').addClass('hide');
      setTimeout(function(){
        $('.gallery__item').removeClass('hide');
      }, 400);
    }else{
      $('.gallery__item').addClass('hide');
      setTimeout(function(){
        $('.' + category).removeClass('hide');
      }, 400);
    }
  });

//----------Class-active for gallery__btn-----------------------------------------
  $('.gallery__btn').click(function(e){
    $('.gallery__nav button').removeClass('gallery__btn--active');
    $(this).addClass('gallery__btn--active');
  });

//-----------Class-active for gallery__item-------------------------------------
  // $('.gallery__item').click(function(){
  //   $(this).toggleClass('gallery__item--active');
  // });

});
