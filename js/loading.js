var ready;

ready = function() {
  setTimeout(function(){
    $(".loading").fadeOut();
  }, 300)

  $(".main").addClass("done");
};

$(document).ready(ready);
$(document).on('page:load', ready);