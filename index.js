const menuIcon = document.querySelector(".hamburger-menu");

const navList = document.querySelector('.nav-list');

menuIcon.addEventListener("click", () =>{
  navList.classList.toggle("change");
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-container").style.top = "0";
  } else {
    document.getElementById("navbar-container").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
