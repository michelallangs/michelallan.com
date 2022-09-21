var ready;

ready = function() {
  setTimeout(function(){
    $(".loading").fadeOut();
  }, 1000)

  $(".main").addClass("done");
};

$(document).ready(ready);
$(document).on('page:load', ready);