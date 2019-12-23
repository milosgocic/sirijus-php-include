// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function(){
  $("#what").click(function(){
      $("#1").show();
     $("#hide-banner").hide();
     $("#3").hide();
     $("#4").hide();
     $("#5").hide();
     $("#7").hide();
     $("#9").hide();
     $("#11").hide();
     $("#12").hide();
     $("#14").hide();
  });
});
$(document).ready(function(){
  $("#abakus").click(function(){
      $("#3").show();
     $("#hide-banner").hide();
     $("#1").hide();
     $("#4").hide();
     $("#5").hide();
     $("#7").hide();
     $("#9").hide();
     $("#11").hide();
     $("#12").hide();
     $("#14").hide();
     $("#15").hide();
  });
});
$(document).ready(function(){
  $("#course").click(function(){
      $("#4").show();
     $("#hide-banner").hide();
     $("#1").hide();
     $("#3").hide();
     $("#5").hide();
     $("#7").hide();
     $("#9").hide();
     $("#11").hide();
     $("#12").hide();
     $("#14").hide();
     $("#15").hide();
  });
});
$(document).ready(function(){
  $("#goals").click(function(){
      $("#5").show();
     $("#hide-banner").hide();
     $("#1").hide();
     $("#3").hide();
     $("#4").hide();
     $("#7").hide();
     $("#9").hide();
     $("#11").hide();
     $("#12").hide();
     $("#14").hide();
     $("#15").hide();
  });
});
$(document).ready(function(){
  $("#prize").click(function(){
      $("#7").show();
     $("#hide-banner").hide();
     $("#1").hide();
     $("#3").hide();
     $("#4").hide();
     $("#5").hide();
     $("#9").hide();
     $("#11").hide();
     $("#12").hide();
     $("#14").hide();
     $("#15").hide();
  });
});
$(document).ready(function(){
  $("#program").click(function(){
      $("#9").show();
     $("#hide-banner").hide();
     $("#1").hide();
     $("#3").hide();
     $("#4").hide();
     $("#5").hide();
     $("#7").hide();
     $("#11").hide();
     $("#12").hide();
     $("#14").hide();
     $("#15").hide();
  });
});
$(document).ready(function(){
  $("#list").click(function(){
      $("#11").show();
     $("#hide-banner").hide();
     $("#1").hide();
     $("#3").hide();
     $("#4").hide();
     $("#5").hide();
     $("#7").hide();
     $("#9").hide();
     $("#12").hide();
     $("#14").hide();
     $("#15").hide();
  });
});
$(document).ready(function(){
  $("#video").click(function(){
      $("#12").show();
     $("#hide-banner").hide();
     $("#1").hide();
     $("#3").hide();
     $("#4").hide();
     $("#5").hide();
     $("#7").hide();
     $("#9").hide();
     $("#11").hide();
     $("#14").hide();
     $("#15").hide();
  });
});
$(document).ready(function(){
  $("#contact").click(function(){
      $("#14").show();
     $("#hide-banner").hide();
     $("#1").hide();
     $("#3").hide();
     $("#4").hide();
     $("#5").hide();
     $("#7").hide();
     $("#9").hide();
     $("#11").hide();
     $("#12").hide();
     $("#15").hide();
  });
});
$(document).ready(function(){
  $("#about-li").click(function(){
      $("#15").show();
     $("#hide-banner").hide();
     $("#1").hide();
     $("#3").hide();
     $("#4").hide();
     $("#5").hide();
     $("#7").hide();
     $("#9").hide();
     $("#11").hide();
     $("#12").hide();
     $("#14").hide();
  });
});



