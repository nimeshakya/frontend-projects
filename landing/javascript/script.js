const scrollTopBtn = document.getElementById('scroll-top-btn');
const scrollInvisibleItems = document.querySelectorAll('.object-invisible');
const scrollTop = () => {
    console.log('hello');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

const windowScrollEvents = () => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 180) {
        console.log(document.getElementById('scroll-down-btn'));
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

scrollTopBtn.addEventListener('click', scrollTop);
window.addEventListener('scroll', windowScrollEvents);
