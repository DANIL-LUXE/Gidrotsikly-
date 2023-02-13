import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.product-swiper', {
  slidesPerView: '4',
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next--product-swiper",
    prevEl: ".swiper-button-prev--product-swiper",
  },

});
