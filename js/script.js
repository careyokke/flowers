
$(document).ready(function() {
  $("button#rose").click(function() {
    $("button#rose").before('<img src="img/rose.jpg">');
    $("ul#user").children("li").first().click(function() {
      debugger;
      $(this).remove();

    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#sunflower").click(function() {
    $("button#sunflower").after('<img src="img/sunflower.jpg">');

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#azalea").click(function() {
    $("button#azalea").before('<img src="img/azalea.jpg">');

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });


});
