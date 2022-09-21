var ready;

ready = function() {
  $(".scroll-btn").on("click", function(e){
    var nextSection = 0;
    
    if ($(this).hasClass("end-of-page")) {
      $(".main").animate({
          scrollTop: 0
      }, 100);
    }
    else {
      $("section").each(function(i){
        var scrollY = $(".main").scrollTop();
        var top = $(this).offset().top,
            sectionH = $(this).outerHeight();

        if (top < 1 && top > sectionH*(-1) && $(this).next("section").length > 0) {
          nextSection = scrollY + $(this).next("section").offset().top;
        }
      })

      $(".main").animate({
          scrollTop: nextSection
      }, 100);
    }
  })
};

$(document).ready(ready);
$(document).on('page:load', ready);