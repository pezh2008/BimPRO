const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");


burger.addEventListener("click",()=>{
 menu.classList.toggle("toggle-menu");
 burger.classList.toggle("toggle-burger");
})



const swiper = new Swiper('.swiper', {
  // Navigation arrows
  speed: 2400,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      allowTouchMove: true,
    },

    768: {
      allowTouchMove: false,
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
