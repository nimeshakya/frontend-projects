const scrollTopBtn = document.getElementById('scroll-top-btn');

const scrollTop = () => {
    console.log('hello');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

scrollTopBtn.addEventListener('click', scrollTop);
