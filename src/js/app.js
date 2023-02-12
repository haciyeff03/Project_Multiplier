const DemoBtn = document.querySelector(".demo-btn");
const DemoBtn2 = document.querySelector(".demo-btn2");
const BookDemo = document.querySelector("#book-demo");
const CloseBtn = document.querySelector(".xmark");
const Overlay = document.querySelector(".overlay");
const SubmitBtn = document.getElementById("submit");
const Inputs = document.querySelectorAll(".input");
const Msgbox = document.querySelectorAll(".msg-box");
if (DemoBtn) {
  DemoBtn.addEventListener("click", () => {
    BookDemo.style.display = "block";
    Overlay.style.display = "block";
  });
}
if (DemoBtn2) {
  DemoBtn2.addEventListener("click", () => {
    BookDemo.style.display = "block";
    Overlay.style.display = "block";
  });
}

if (CloseBtn) {
  CloseBtn.addEventListener("click", () => {
    BookDemo.style.display = "none";
    Overlay.style.display = "none";
    for (let j = 0; j < Msgbox.length; j++) {
      Msgbox[j].innerHTML = "";
      Inputs[j].style.borderColor = "grey";
    }
  });
}

if (SubmitBtn) {
  SubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = 0; i < Inputs.length; i++) {
      if (Inputs[i].value.length == 0 && i < 4) {
        Msgbox[i].innerHTML = "Please complete this required field.";
        Inputs[i].style.borderColor = "#f2545b";
      } else if (Inputs[i].value.length == 0 && i >= 4) {
        Msgbox[i].innerHTML = "Please select an option from the dropdown menu.";
        Inputs[i].style.borderColor = "#f2545b";
      } else {
        Msgbox[i].innerHTML = "";
        Inputs[i].style.borderColor = "grey";
      }
    }
  });
}

const MenuBtn = document.querySelector("#menu-icon");
const MobileMenu = document.querySelector(".mobile-menu");
const x_sign = document.querySelector(".x-sign");
const MenuIcon = document.querySelector(".fa-bars");
if (MenuBtn) {
  MenuBtn.addEventListener("click", () => {
    console.log("salam");
    MobileMenu.classList.toggle("active-menu");
    MenuIcon.classList.toggle("none");
    x_sign.classList.toggle("block");
  });
}

const DropList = document.querySelectorAll(".drop-list");
const DropMenu = document.querySelectorAll(".drop-menu");
const Caret = document.querySelectorAll(".caret");

if (DropList) {
  for (let i = 0; i < DropList.length; i++) {
    DropList[i].addEventListener("click", () => {
      DropMenu[i].classList.toggle("active-dropdown");
      Caret[i].classList.toggle("active-caret");
    });
  }
}

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    991: {
      spaceBetween: 200,
    },
    320: {
      spaceBetween: 50,
    },
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 200,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const Tab = document.querySelectorAll(".tab");
const Tabcont = document.querySelectorAll(".tab-cont");

for (let j = 0; j < Tab.length; j++) {
  Tab[j].addEventListener("click", () => {
    console.log("salam");
    for (let k = 0; k < Tab.length; k++) {
      if (k != j && Tab[k].classList.contains("active-tab")) {
        Tab[k].classList.remove("active-tab");
        Tabcont[k].classList.remove("active-tabcont");
      }
    }
    Tab[j].classList.add("active-tab");
    Tabcont[j].classList.add("active-tabcont");
  });
}

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const Brk = document.querySelectorAll(".brkdown");
const flagimg = document.querySelectorAll(".flag-img");
const Flag = document.querySelectorAll(".flag");

for (let i = 0; i < Brk.length; i++) {
  Flag[i].addEventListener("click", () => {
    for (let j = 0; j < Brk.length; j++) {
      if (j != i && Brk[j].classList.contains("active-brk")) {
        Brk[j].classList.remove("active-brk");
        flagimg[j].classList.remove("active-flag");
      }
    }
    flagimg[i].classList.add("active-flag");
    setTimeout(function () {
      Brk[i].classList.add("active-brk");
    }, 600);
  });
}

const Countries = document.querySelector(".countries");
const India = document.querySelector(".india");
const China = document.querySelector(".china");
const Russia = document.querySelector(".russia");
const Thailand = document.querySelector(".thailand");

window.addEventListener("scroll", () => {
  if (Countries.getBoundingClientRect().top < window.innerHeight) {
    console.log("salam");
    setTimeout(() => {
      India.classList.add("india-active");
      China.classList.add("china-active");
      Russia.classList.add("russia-active");
      Thailand.classList.add("thailand-active");
    }, 500);
  } else {
    console.log("salam");
    India.classList.remove("india-active");
    China.classList.remove("china-active");
    Russia.classList.remove("russia-active");
    Thailand.classList.remove("thailand-active");
  }
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: "auto",
  spaceBetween: 40,
  grabCursor: true,
  loop: true,
  breakpoints: {
    768: {
      spaceBetween: 40,
    },
    320: {
      spaceBetween: 20,
    },
  },
});
