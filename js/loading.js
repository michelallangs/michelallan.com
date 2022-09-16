var ready;

ready = function() {
  $(".loading").fadeOut();
  $(".main").addClass("done");
};

$(document).ready(ready);
$(document).on('page:load', ready);