var ready;

ready = function() {
  $(".menu-btn").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();

    $(".menu-btn").toggleClass("active");
    $(".menu").slideToggle();
  });

  $(document).on("click", function(){
    var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;

    if (width < 992) {
      $(".menu").slideUp();
      $(".menu-btn").removeClass("active");
    }
  })

  var fullPage = endOfPage = 0;

  $("section").each(function(){ fullPage += $(this).outerHeight(); })

  endOfPage = Math.trunc(fullPage - $("section:last").outerHeight());

  $(".main").on('scroll', function(){
    $(".scroll-btn").removeClass("end-of-page");
    $(".menu ul li a").removeClass("active");

    $("section").each(function(){
      var top = $(this).offset().top,
          sectionH = $(this).outerHeight();

      if (top < 1 && top > sectionH*(-1)) {
        var currentSection = $(this).attr("id");

        $(".menu ul li a[href='#" + currentSection + "']").addClass("active");
      }
    })

    if ($(".main").scrollTop() >= endOfPage) {
      $(".scroll-btn").addClass("end-of-page");
    }
  });
};

$(document).ready(ready);
$(document).on('page:load', ready);