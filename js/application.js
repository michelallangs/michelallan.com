var ready;

ready = function() {
  function adjustJobSize(){
    var jobW = $(".job").innerWidth();

    $(".job").height(jobW);
  }

  window.addEventListener('resize', function(event){
    adjustJobSize();
  });

  adjustJobSize();
};

$(document).ready(ready);
$(document).on('page:load', ready);