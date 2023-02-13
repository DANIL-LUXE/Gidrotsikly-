import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.product-additionally-swiper', {
  slidesPerView: '4',
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next--product-additionally-swiper",
    prevEl: ".swiper-button-prev--product-additionally-swiper",
  },

});
