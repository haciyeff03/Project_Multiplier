const DemoBtn1 = document.querySelector(".demo-btn");
const DemoBtn2 = document.querySelector(".demo-btn2");
const BookDemo = document.querySelector("#book-demo");
const CloseBtn = document.querySelector(".xmark");
const Overlay = document.querySelector(".overlay");
const SubmitBtn = document.getElementById("submit");
const Inputs = document.querySelectorAll(".input");
const Msgbox = document.querySelectorAll(".msg-box");
if (DemoBtn1) {
  DemoBtn1.addEventListener("click", () => {
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
