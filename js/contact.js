// sticky navbar
window.onscroll = function() {myFunction()};

var navbarsticky1 = document.getElementById("navbarsticky1");
var sticky = navbarsticky1.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarsticky1.classList.add("sticky")
  } else {
    navbarsticky1.classList.remove("sticky");
  }
}
