// FOOTER YEAR
const dateText = document.querySelector(".copyright span");
var date = new Date();
dateText.textContent = date.getFullYear();

// NAVBAR TOGGLE
const openNav = document.querySelector(".open-icon");
const closeNav = document.querySelector(".close-icon");
const responsiveNav = document.querySelector(".nav-content");

openNav.addEventListener("click", () => {
  responsiveNav.style.right = "0";
});

closeNav.addEventListener("click", () => {
  responsiveNav.style.right = "-100%";
});

const resumeBtn = document.getElementById("download_resume");
resumeBtn.addEventListener("click", () => {
  window.open("/download");
});

// NAV RESPONSE
const navbar = document.getElementById("nav-wrapper");
window.addEventListener("scroll", () => {
  const navheight = navbar.getBoundingClientRect().height;
  if (window.pageYOffset > navheight) {
    navbar.classList.add("nav-onscroll-style");
  } else {
    navbar.classList.remove("nav-onscroll-style");
  }
});
