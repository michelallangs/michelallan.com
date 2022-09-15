var ready;

ready = function() {
  setTimeout(function(){
    $(".loading").fadeOut()
    $(".main").addClass("done")
  }, 2000)
};

$(document).ready(ready);
$(document).on('page:load', ready);