const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("toggle-menu");
  burger.classList.toggle("toggle-burger");
});

const swiper = new Swiper(".swiper", {
  // Navigation arrows
  speed: 2400,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      allowTouchMove: true,
    },

    768: {
      allowTouchMove: false,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
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
        counterAndBgColor();
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.8,
  }
);
observer.observe(interest);

//tabs

const tabs = document.querySelectorAll(".advantages__tab");
const contents = document.querySelectorAll(".advantages__content");


tabs.forEach((element,indexTab) => {
  element.addEventListener("click",()=> {
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    element.classList.add("active-tab");

    contents.forEach((content,indexContent)=>{
      content.classList.remove("active-content");
      if(indexTab==indexContent) {
        content.classList.add("active-content");
      } 
    })
  });
});

// const accordItems = document.querySelectorAll(".accordion__item");
//   accordItems.forEach((el)=> {
//     el.addEventListener("click", ()=>{
      
//     })
//   } )

 



// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     tab.classList.add("active-tab");
//   });
// });

// tabs.forEach((tab)=>{
//   tab.classList.remove("active-tab");
// })

// tabs[0].addEventListener("click", ()=>{
//   tabs[1].classList.remove("active-tab");
//   content[1].classList.remove("active-content");
//   tabs[2].classList.remove("active-tab");
//   content[2].classList.remove("active-content");
//   tabs[0].classList.add("active-tab");
//   content[0].classList.add("active-content");

// })

// tabs[1].addEventListener("click", ()=>{
//   tabs[0].classList.remove("active-tab");
//   content[0].classList.remove("active-content");
//   tabs[2].classList.remove("active-tab");
//   content[2].classList.remove("active-content");
//   tabs[1].classList.add("active-tab");
//   content[1].classList.add("active-content");

// })

// tabs[2].addEventListener("click", ()=>{
//   tabs[2].classList.add("active-tab");
//   content[2].classList.add("active-content");
//   tabs[0].classList.remove("active-tab");
//   content[0].classList.remove("active-content");
//   tabs[1].classList.remove("active-tab");
//   content[1].classList.remove("active-content");
// })

// const name = ["dima", "ira", "misha"];
// name.forEach((el,index) => {
//   console.log(el);
//   console.log(index);
// });

