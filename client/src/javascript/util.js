// #region Footer
const dateText = document.querySelector(".copyright span");
const date = new Date();
dateText.textContent = date.getFullYear();
// #endregion Footer

// #region Page Loader
const loader = document.querySelector(".loader-wrapper");
const content = document.querySelector("#home");

window.addEventListener("load", () => {
  loader?.classList.add("visually-hidden");
  
  setTimeout(() => {
    loader?.style.display = "none";
    content?.classList.remove("hideBody");
  }, 1000);
});
// #endregion Page Loader

console.log('util loading complete');