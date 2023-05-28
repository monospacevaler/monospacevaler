'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Get the root element
var r = document.querySelector(':root');

function dark() {
  document.getElementById("toggle").setAttribute("onclick", "light()");
  r.style.setProperty('--sfondo', '#333');
  r.style.setProperty('--secondario', '#333');
  r.style.setProperty('--testo', 'white');
  r.style.setProperty('--primario', '#f2b46c');
  r.style.setProperty('--paragrafo', 'whitesmoke');
  r.style.setProperty('--linkfb', '#f2b46c');
  document.getElementById("uxuides").setAttribute("src", "./assets/images/user-experience-white.png");
  document.getElementById("webdes").setAttribute("src", "./assets/images/web-design-white.png");
  document.getElementById("logodes").setAttribute("src", "./assets/images/logo-design-white.png");
  document.getElementById("webdev").setAttribute("src", "./assets/images/front-end-white.png");
  document.getElementById("showmore").style.color = "whitesmoke";
}

function light() {
  document.getElementById("toggle").setAttribute("onclick", "dark()");
  r.style.setProperty('--sfondo', 'lightblue');
  r.style.setProperty('--secondario', 'white');
  r.style.setProperty('--testo', '#333');
  r.style.setProperty('--primario', 'lightblue');
  r.style.setProperty('--paragrafo', 'black');
  r.style.setProperty('--linkfb', '#13202A');
  document.getElementById("uxuides").setAttribute("src", "./assets/images/user-experience.png");
  document.getElementById("webdes").setAttribute("src", "./assets/images/web-design.png");
  document.getElementById("logodes").setAttribute("src", "./assets/images/logo-design.png");
  document.getElementById("webdev").setAttribute("src", "./assets/images/front-end.png");
  document.getElementById("showmore").style.color = "#333";
}