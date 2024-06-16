document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper__main', {
        slidesPerView: 4,      // Количество слайдов на странице
        spaceBetween: 16,      // Отступ между слайдами в пикселях
        loop: true,            // Включение циклического режима
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            100: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            
            650: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            768: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            // when window width is >= 480px
            1000: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
            // when window width is >= 640px
            1200: {
                spaceBetween: 16,
                slidesPerView: 4,
            }
        }
    });
    const swiperImage = new Swiper('.swiper__salut', {
        slidesPerView: 4,      // Количество слайдов на странице
        spaceBetween: 19,      // Отступ между слайдами в пикселях
        loop: true,            // Включение циклического режима
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            100: {
                slidesPerView: 1,
                spaceBetween: 45,
            },
            430: {
                slidesPerView: 2,
                spaceBetween: 45,
            },
            650: {
                slidesPerView: 3,
                spaceBetween: 45,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1150: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            
            1500: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
        
        }
    });
    const swiperDivisions = new Swiper('.swiper__divisions', {
        slidesPerView: 2,      // Количество слайдов на странице
        spaceBetween: 50,      // Отступ между слайдами в пикселях
        loop: true,            // Включение циклического режима
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            100: {
                slidesPerView: 1,
                spaceBetween: 45,
            },
            
            600: {
                slidesPerView: 2,
                spaceBetween: 45,
            },
        
        }
    });
    const swiperLife = new Swiper('.swiper__life', {
        slidesPerView: 4,      // Количество слайдов на странице
        spaceBetween: 19,      // Отступ между слайдами в пикселях
        loop: true,            // Включение циклического режима
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            100: {
                slidesPerView: 1,
                spaceBetween: 19,
            },
            430: {
                slidesPerView: 1,
                spaceBetween: 40,    
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 19,
            },
            700: {
                spaceBetween: 19,
                slidesPerView: 2,
            },
            // when window width is >= 480px
            1150: {
                spaceBetween: 19,
                slidesPerView: 3,
            },
            // when window width is >= 640px
            1400: {
                spaceBetween: 19,
                slidesPerView: 4,
            }
        }
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