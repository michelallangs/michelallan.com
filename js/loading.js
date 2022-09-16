var ready;

ready = function() {
  setTimeout(function(){
    $(".loading").fadeOut();
    $(".main").addClass("done");
  }, 750)
};

$(document).ready(ready);
$(document).on('page:load', ready);