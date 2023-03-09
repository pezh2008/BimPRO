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

tabs.forEach((element, indexTab) => {
  element.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    element.classList.add("active-tab");

    contents.forEach((content, indexContent) => {
      content.classList.remove("active-content");
      if (indexTab == indexContent) {
        content.classList.add("active-content");
      }
    });
  });
});

const titles = document.querySelectorAll(".accordion__title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    if (content.style.maxHeight == 0) {
      content.style.maxHeight = content.scrollHeight + "px";
      title.classList.add("active");
    } else {
      content.style.maxHeight = null;
      title.classList.remove("active");
    }
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

const stepBtn = document.querySelector(".house__btn-play");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

function showModal() {
  modal.classList.add("modal-show");
}

stepBtn.addEventListener("click", () => {
  showModal();
});

// modalClose.addEventListener("click", ()=>{
//  closeModal();
// })

function closeModal() {
  modal.classList.remove("modal-show");
}

const houses = document.querySelector(".houses");
const houseBtnPrev = document.querySelector(".houses__btn-prev");
const houseBtnNext = document.querySelector(".houses__btn-next");

new Swiper(houses, {
  // direction: 'vertical',
  // Navigation arrows
  // speed: 2400,

  navigation: {
    nextEl: houseBtnNext,
    prevEl: houseBtnPrev,
  },
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     allowTouchMove: true,
  //   },

  //   768: {
  //     allowTouchMove: false,
  //   },
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const projectBurger = document.querySelector(".project__burger");
const projectFilter = document.querySelector(".project__filter");

projectBurger.addEventListener("click", () => {
  if (projectFilter.style.maxHeight == 0) {
    projectFilter.style.maxHeight = projectFilter.scrollHeight + "px";
  } else {
    projectFilter.style.maxHeight = null;
  }
});

const filterBtns = document.querySelectorAll(".project__filter-btn");
const filteResetBtn = document.querySelector(".project__clear");

filterBtns.forEach((el) => {
  el.addEventListener("click", () => {
    filterBtns.forEach((el) => {
      el.classList.remove("active-filter-btn");
    });
    el.classList.toggle("active-filter-btn");
  });
});

filteResetBtn.addEventListener("click", () => {
  filterBtns.forEach((el) => {
    el.classList.remove("active-filter-btn");
  });
});

const tabsInform = document.querySelectorAll(".information__tab");
const contentInrorm = document.querySelectorAll(".information__content");

tabsInform.forEach((el, indexTab) => {
  el.addEventListener("click", () => {
    tabsInform.forEach((tab) => {
      tab.classList.remove("active");
    });
    el.classList.add("active");

    contentInrorm.forEach((content)=>{
      content.classList.remove("active")
    })
    contentInrorm[indexTab].classList.add("active");
    // contentInrorm.forEach((content, indexContent) => {
    //   if (indexTab == indexContent) {
    //     contentInrorm.forEach((cont) => {
    //       cont.classList.remove("active");
    //     });
    //     content.classList.add("active");
    //   }
    // });
  });
});
