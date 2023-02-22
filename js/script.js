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


const bar = document.querySelector(".interest__bar");
const interest = document.querySelector(".interest");
const num = document.querySelector(".interest__number");
let count = 0;


function counterAndBgColor() {
  bar.style.height = "100%";
  let interval = setInterval(() => {
    count = count + 1;
    if (count >= 50) {
      clearInterval(interval);
    }
    num.innerHTML = `+${count}`;
    
  }, 70);
}

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counterAndBgColor()
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.8,
  }
);
observer.observe(interest);