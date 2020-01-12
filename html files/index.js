$(window).scroll(function() {
  sessionStorage.scrollTop = $(this).scrollTop();
console.log("hi");
});

$(document).ready(function() {


  if (sessionStorage.scrollTop != "undefined") {
    $(window).scrollTop(sessionStorage.scrollTop);
  }
});
