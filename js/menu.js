var ready;

ready = function() {
  $(".menu-btn").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();

    $(".menu").slideToggle();
  });

  $(document).on("click", function(){
    var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;

    if (width < 992) {
      $(".menu").slideUp();
    }
  })

  $(".main").on( 'scroll', function(){
    $(".menu ul li a").removeClass("active");

    $("section").each(function(){
      var top = $(this).offset().top,
          sectionH = $(this).outerHeight()*(-1);

      if (top < 1 && top > sectionH) {
        var currentSection = $(this).attr("id");

        $(".menu ul li a[href='#" + currentSection + "']").addClass("active");
      }
    })
  });
};

$(document).ready(ready);
$(document).on('page:load', ready);