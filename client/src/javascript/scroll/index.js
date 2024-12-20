const navWrapper = document.querySelector('#nav-wrapper');

window.addEventListener('scroll', (e) => {
  const lastScrollPosn = window.scrollY;
  const navHeight = navWrapper?.getBoundingClientRect().height;

  if(lastScrollPosn > navHeight){
    navWrapper.classList.add('nav-wrapper--morphed');
  }

  if(lastScrollPosn === 0){
    navWrapper.classList.remove('nav-wrapper--morphed');
  }
});