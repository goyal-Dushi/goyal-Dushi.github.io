const navbar = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');
const navHeight = navbar.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    if(window.pageYOffset > navHeight){
        navbar.style.background = 'rgba(255,255,255,0.75)';
        navbar.style.color = 'black';
        navLinks.forEach((link) => {link.style.color = 'black' });
    }else{
        navbar.style.background = 'transparent';
        navbar.style.color = 'white';
        navLinks.forEach((link) => {link.style.color = 'white' });
    }
})


// FOOTER YEAR
const dateText = document.querySelector('.copyright span');
var date = new Date();
dateText.textContent = date.getFullYear();