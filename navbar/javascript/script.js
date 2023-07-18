const unscrolledNav = document.getElementById('unscrolled-navbar');
const scrolledNav = document.getElementById('scrolled-navbar');

const sidebarOpenBtn = document.getElementById('sidebar-open-btn');
const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
const sidebarNav = document.getElementById('sidebar-nav');
const modalBackground = document.getElementById('modal-background');

// navbar change on scroll functionality
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

// sidebar visibility functionality
sidebarOpenBtn.addEventListener('click', () => {
    sidebarNav.classList.replace(
        'ham-page-nav-btn-container-hidden',
        'ham-page-nav-btn-container-visible'
    );

    modalBackground.classList.replace(
        'modal-background-hidden',
        'modal-background-visible'
    );
});
sidebarCloseBtn.addEventListener('click', () => {
    sidebarNav.classList.replace(
        'ham-page-nav-btn-container-visible',
        'ham-page-nav-btn-container-hidden'
    );

    modalBackground.classList.replace(
        'modal-background-visible',
        'modal-background-hidden'
    );
});
modalBackground.addEventListener('click', () => {
    sidebarNav.classList.replace(
        'ham-page-nav-btn-container-visible',
        'ham-page-nav-btn-container-hidden'
    );

    modalBackground.classList.replace(
        'modal-background-visible',
        'modal-background-hidden'
    );
});
