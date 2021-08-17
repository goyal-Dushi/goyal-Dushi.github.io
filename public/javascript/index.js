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

// LOADER
const loader = document.querySelector(".loader-wrapper");
window.addEventListener("load", () => {
  const content = document.querySelector(".body-wrapper");
  loader.classList.add("hidden");
  setTimeout(() => {
    loader.style.display = "none";
    content.classList.remove("hideBody");
  }, 1000);
});
