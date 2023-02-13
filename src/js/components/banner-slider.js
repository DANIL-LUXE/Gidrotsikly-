
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiperBanner = new Swiper('.banner-section-swiper', {
    slidesPerView: 'auto',
  loop: true,
  // navigation: {
  //    nextEl: ".swiper-button-next",
  //    prevEl: ".swiper-button-prev",
  //  },
  pagination: {
    el: ".swiper-pagination",
  },
  });
