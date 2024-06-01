document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper__main', {
        slidesPerView: 4,      // Количество слайдов на странице
        spaceBetween: 16,      // Отступ между слайдами в пикселях
        loop: true,            // Включение циклического режима
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const swiperImage = new Swiper('.swiper__salut', {
        slidesPerView: 4,      // Количество слайдов на странице
        spaceBetween: 19,      // Отступ между слайдами в пикселях
        loop: true,            // Включение циклического режима
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const swiperLife = new Swiper('.swiper__life', {
        slidesPerView: 4,      // Количество слайдов на странице
        spaceBetween: 19,      // Отступ между слайдами в пикселях
        loop: true,            // Включение циклического режима
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const swiperWork = new Swiper('.swiper__works', {
        slidesPerView: 1,      // Количество слайдов на странице
        spaceBetween: 19,      // Отступ между слайдами в пикселях
        loop: true,            // Включение циклического режима
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.querySelector('[data-play]');
    const iframe = document.querySelector('.embed-container iframe');
    const originalSrc = iframe.src;

    playButton.addEventListener('click', function () {
        const parent = document.querySelector('.video__inner');
        parent.classList.add('hide');
        iframe.src = originalSrc + "?autoplay=1"; // Добавляем параметр autoplay для автоматического воспроизведения
        const playButton = document.querySelector('[data-play]');
        parent.classList.add('hide');
    });
});