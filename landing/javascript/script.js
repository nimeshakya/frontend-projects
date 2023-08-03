const scrollTopBtn = document.getElementById('scroll-top-btn');
const scrollDownBtn = document.getElementById('scroll-down-btn');
const scrollInvisibleItems = document.querySelectorAll('.object-invisible');

// navigation buttons
const siteNavigation = document.getElementById('site-navigation');
const navOpenBtn = document.getElementById('nav-open-btn');
const navCloseBtn = document.getElementById('nav-close-btn');
const navigationButtons = document.querySelectorAll('.site-nav-btn');

const scrollTop = () => {
    console.log('hello');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

const scrollDown = () => {
    document.getElementById('about-container').scrollIntoView();
};

const windowScrollEvents = () => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 180) {
        document
            .getElementById('scroll-down-btn')
            .classList.replace('down-arrow-invisible', 'down-arrow-visible');
    }
    if (scrollTop >= 900) {
        scrollInvisibleItems.forEach((elem, index) => {
            if (index == 0 || index == 1) {
                elem.classList.replace('object-invisible', 'object-visible');
            }
        });
    }
    if (scrollTop >= 1000) {
        scrollInvisibleItems.forEach((elem, index) => {
            if (index == 2 || index == 3 || index == 4) {
                elem.classList.replace('object-invisible', 'object-visible');
            }
        });
    }
    if (scrollTop >= 1200) {
        scrollInvisibleItems.forEach((elem, index) => {
            if (index == 5) {
                elem.classList.replace('object-invisible', 'object-visible');
            }
        });
    }
};

const openNav = () => {
    siteNavigation.classList.replace('hide-nav', 'display-nav');
};

const closeNav = () => {
    siteNavigation.classList.replace('display-nav', 'hide-nav');
};

window.addEventListener('load', () => {
    if (window.matchMedia('(max-width: 800px)').matches) {
        siteNavigation.classList.add('hide-nav');
    }
    if (window.matchMedia('(min-width: 800px)').matches) {
        siteNavigation.classList.remove('hide-nav');
    }
});

window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 800px)').matches) {
        siteNavigation.classList.add('hide-nav');
    }
    if (window.matchMedia('(min-width: 800px)').matches) {
        siteNavigation.classList.remove('hide-nav');
    }
});

scrollTopBtn.addEventListener('click', scrollTop);
scrollDownBtn.addEventListener('click', scrollDown);
window.addEventListener('scroll', windowScrollEvents);

// navigation events
navOpenBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);
navigationButtons.forEach((item) => {
    item.addEventListener('click', closeNav);
});
