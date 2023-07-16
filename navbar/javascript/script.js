const unscrolledNav = document.getElementById('unscrolled-navbar');
const scrolledNav = document.getElementById('scrolled-navbar');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    scrollY = Math.round(scrollY);
    console.log(scrollY);
    if (scrollY >= 190) {
        unscrolledNav.classList.remove('nav-visible');
        unscrolledNav.classList.add('nav-invisible');

        scrolledNav.classList.remove('nav-invisible');
        scrolledNav.classList.add('nav-visible');
    } else {
        unscrolledNav.classList.remove('nav-invisible');
        unscrolledNav.classList.add('nav-visible');

        scrolledNav.classList.remove('nav-visible');
        scrolledNav.classList.add('nav-invisible');
    }
});
