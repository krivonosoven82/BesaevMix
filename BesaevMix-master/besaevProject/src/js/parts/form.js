$(document).ready(function () {

//----------contact-form----------
      $("#contact-form").submit(function() {
  		$.ajax({
  			type: "POST",
  			url: "php/contact-form.php",
  			data: $(this).serialize()
  		}).done(function() {
  			alert('Thank you!');
  		});
  		return false;
  	});
});
