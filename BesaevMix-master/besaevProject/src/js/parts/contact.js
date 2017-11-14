$(document).ready(function(){
//----------input------
  $('input').change(function() {
  if($(this).val())
      $(this).addClass('up');
    else
      $(this).removeClass('up');
});
//----------textarea------
  $('textarea').change(function() {
  if($(this).val())
      $(this).addClass('up');
    else
      $(this).removeClass('up');
  });
});
