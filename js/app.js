
// Parallax via https://www.kirupa.com/html5/smooth_parallax_scrolling.htm

var puck = document.querySelector(".puck");
var status = 0;

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
 
window.addEventListener("DOMContentLoaded", scrollLoop, false);

var xScrollPosition;
var yScrollPosition;
 
function scrollLoop() {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition * .01, puck);

  
  requestAnimationFrame(scrollLoop);
}

