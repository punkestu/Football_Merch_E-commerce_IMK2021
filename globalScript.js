var fog = document.getElementById("fog");
var sbar = document.getElementById("sidebar");

function toggleFog(){
  fog.classList.toggle("hide");
}

function toggleSBar(){
  toggleFog();
  sbar.classList.toggle("sbhide");
}

// to hide header when scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-13vh";
  }
  prevScrollpos = currentScrollPos;
}