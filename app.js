const bugerIcon = document.querySelector('#burger');
const navLinks = document.querySelector('#navbar-links');

bugerIcon.addEventListener('click', ()=>{
    navLinks.classList.toggle('is-active');
    navLinks.classList.add('navbar');
})


const nav = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', ()=>{
    if(lastScrollY < window.scrollY) {
        nav.classList.add('hide');
        navLinks.classList.remove('is-active')
    } else {
        nav.classList.remove('hide');
    }

    lastScrollY = window.scrollY;
})