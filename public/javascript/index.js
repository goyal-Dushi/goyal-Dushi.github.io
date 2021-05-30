const navbar = document.querySelector('nav');
const navLogo = document.querySelector('.brand-logo');
const navLinks = document.querySelectorAll('.nav-link');
const navHeight = navbar.getBoundingClientRect().height;
const openLine = document.querySelector('.line');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > navHeight){
        navbar.style.background = 'rgba(255,255,255,0.90)';
        navLogo.style.color = 'black';
        openLine.style.backgroundColor = "black";
        navLinks.forEach((link) => {link.style.color = 'black' });
    }
    else{
        navbar.style.background = 'transparent';
        navLogo.style.color = 'white';
        openLine.style.backgroundColor = "white";
        navLinks.forEach((link) => {link.style.color = 'white' });
    }
});

// FOOTER YEAR
const dateText = document.querySelector('.copyright span');
var date = new Date();
dateText.textContent = date.getFullYear();

// NAVBAR TOGGLE
const openNav = document.querySelector('.open-icon');
const closeNav = document.querySelector('.close-icon');
const responsiveNav = document.querySelector('.nav-content');

openNav.addEventListener('click', () =>{
    responsiveNav.style.right = "0";
});

closeNav.addEventListener('click', ()=>{
    responsiveNav.style.right = "-100%";
});