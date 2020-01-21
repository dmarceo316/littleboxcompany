//navigation slider
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.shop-nav');
    const navLinks = document.querySelectorAll('.shop-nav li');
    

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

         //Animate Links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.0}s`;
        }
    });
        //Burger Animation
        burger.classList.toggle('toggle');

    });
   
}

navSlide();

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});