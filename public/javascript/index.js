// FOOTER YEAR
const dateText = document.querySelector(".copyright span");
var date = new Date();
dateText.textContent = date.getFullYear();

// NAVBAR TOGGLE
const openNav = document.querySelector(".open-icon");
const responsiveNav = document.querySelector(".nav-content");
const navWrapper = document.querySelector("#nav-wrapper");

navWrapper.addEventListener("click", (e) => {
  const navHeight = navWrapper.getBoundingClientRect().height;
  console.log("Navheight: ", navHeight);
  if (
    e.target.className === "close-icon" ||
    e.target.className === "close-line"
  ) {
    responsiveNav.style.right = "-100%";
  } else if (e.target.className === "nav-link") {
    const id = e.target.getAttribute("href").slice(1);
    const page = document.getElementById(id);
    const position = page.offsetTop;
    window.scrollTo({
      left: 0,
      top: position - navHeight,
    });
    responsiveNav.style.right = "-100%";
  }
});

openNav.addEventListener("click", () => {
  responsiveNav.style.right = "0%";
});

// Btn Resume Download
const resumeBtn = document.getElementById("download_resume");
resumeBtn.addEventListener("click", () => {
  window.open("/download");
});
