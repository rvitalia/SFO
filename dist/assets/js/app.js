document.addEventListener("DOMContentLoaded",()=>{new Swiper(".swiper__main",{slidesPerView:4,spaceBetween:16,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".swiper__salut",{slidesPerView:4,spaceBetween:19,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".swiper__life",{slidesPerView:4,spaceBetween:19,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".swiper__works",{slidesPerView:1,spaceBetween:19,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}),document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("[data-play]"),t=document.querySelector(".embed-container iframe"),n=t.src;e.addEventListener("click",function(){var e=document.querySelector(".video__inner");e.classList.add("hide"),t.src=n+"?autoplay=1",document.querySelector("[data-play]"),e.classList.add("hide")})});