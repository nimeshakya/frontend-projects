const unscrolledNav = document.getElementById('unscrolled-navbar');
const scrolledNav = document.getElementById('scrolled-navbar');

window.addEventListener('scroll', () => {
    let stuck = false;
    let scrollY = window.scrollY;
    scrollY = Math.round(scrollY);
    console.log(scrollY);
    if (!stuck && scrollY >= 190) {
        unscrolledNav.classList.replace('nav-visible', 'nav-invisible');

        scrolledNav.classList.replace(
            'scrolled-nav-hidden',
            'scrolled-nav-visible'
        );
        stuck = true;
    } else {
        unscrolledNav.classList.replace('nav-invisible', 'nav-visible');

        scrolledNav.classList.replace(
            'scrolled-nav-visible',
            'scrolled-nav-hidden'
        );
        stuck = false;
    }
});
