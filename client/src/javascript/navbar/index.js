const openNav = document.querySelector(".open-icon");
const responsiveNav = document.querySelector(".nav-content");
const navWrapper = document.querySelector("#nav-wrapper");

navWrapper?.addEventListener("click", (e) => {
  const navHeight = navWrapper.getBoundingClientRect().height;
  
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
      top: position+(navHeight),
    });
    responsiveNav.style.right = "-100%";
  }
});

openNav.addEventListener("click", () => {
  responsiveNav.style.right = "0%";
});

const hamburgerIcon = document.querySelector('.open-icon');
const closeArrowIcon = document.querySelector('.close-icon');
const morphedNavWrapper = document.querySelector('.nav-wrapper--morphed');

// hamburgerIcon?.addEventListener('click', (e) => {
//   morphedNavWrapper?.style.backdropFilter = 'none';
// });
// closeArrowIcon?.addEventListener('click' , (e) => {
//   morphedNavWrapper?.style.backdropFilter = 'blur(10px)';
// });