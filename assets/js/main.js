const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ============= SHOW MENU ===============
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ============= MENU HIDDEN ===============
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ============= REMOVE MENU MOBILE ===============
const navLinks = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLinks.forEach((n) => n.addEventListener("click", linkAction));

// ============= SCROLL TO HEADER ===============
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 60) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
// ============= CHANGE BACKGROUND HEADER ===============

// ============= TESTIMONIAL SWIPER ===============
var swiper = new Swiper(".testimonial-wrapper", {
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ============= SCROLL SECTION ACTIVE LINK ===============
// get all section that have an id defined
const sections = document.querySelectorAll("section[id]");

// add event for scroll
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  // get current scroll position
  let scrollY = window.pageYOffset;

  // loop section to get height, top and ID values for eachs
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    const sectionID = current.getAttribute("id");

    // if current scroll position enter current space, add .active else remove
    // to know which have ID use section ID above
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav-menu a[href*=${sectionID}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav-menu a[href*=${sectionID}]`)
        .classList.remove("active-link");
    }
  });
}
// ============= PROJECT ITEM FILTER ===============
const filterContainer = document.querySelector(".project-filter-in"),
  filterBtn = filterContainer.children;
const projectItem = document.querySelectorAll(".project-item");
for (i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filerValue = this.getAttribute("data-filter");
    for (j = 0; j < projectItem.length; j++) {
      if (filerValue === projectItem[j].getAttribute("data-category")) {
        projectItem[j].classList.remove("hide");
        projectItem[j].classList.add("show");
      } else {
        projectItem[j].classList.add("hide");
        projectItem[j].classList.remove("show");
      }
      if (filerValue == "all") {
        projectItem[j].classList.add("show");
        projectItem[j].classList.remove("hide");
      }
    }
  });
}

// ============= THEME/DISPLAY CUSTOMIZATION ===============
// theme
const themeBtn = document.getElementById("theme-button");
const themeModal = document.querySelector(".customize-theme");

// font size
const fontSizes = document.querySelectorAll(".choose-size span");

// color
const colorPals = document.querySelectorAll(".choose-color span");
const root = document.querySelector(":root");

// background
const bG1 = document.querySelector(".background-1");
const bG2 = document.querySelector(".background-2");
const bG3 = document.querySelector(".background-3");

// open modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
themeBtn.addEventListener("click", openThemeModal);

// close modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);
// ============= FONTS ===============
// remove active class
const removeSizeToggle = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    let fontSize;
    removeSizeToggle();
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "12px";
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "14px";
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "18px";
    }
    // change fontsize of root html
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// ============= PRIMARY COLOR ===============
// remove active class
const removeColorToggle = () => {
  colorPals.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPals.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    removeColorToggle();
    color.classList.toggle("active");
    if (color.classList.contains("color-1")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 32;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 202;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 152;
    }
    // change root color
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});
// ============= THEME BACKGROUND ===============
let whiteColorLightness;
let lightColorLightness;
let darkColorLightness;

// change bg color
const changeBg = () => {
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

bG1.addEventListener("click", () => {
  whiteColorLightness = "100%";
  lightColorLightness = "92%";
  darkColorLightness = "17%";

  // add active class bg1
  bG1.classList.add("active");
  // remove active class bg2 +bg3
  bG2.classList.remove("active");
  bG3.classList.remove("active");
  changeBg();
});

bG2.addEventListener("click", () => {
  whiteColorLightness = "20%";
  lightColorLightness = "15%";
  darkColorLightness = "95%";

  // add active class bg2
  bG2.classList.add("active");
  // remove active class bg1 +bg3
  bG1.classList.remove("active");
  bG3.classList.remove("active");
  changeBg();
});

bG3.addEventListener("click", () => {
  whiteColorLightness = "10%";
  lightColorLightness = "0%";
  darkColorLightness = "95%";

  // add active class bg3
  bG3.classList.add("active");
  // remove active class bg1 +bg2
  bG1.classList.remove("active");
  bG2.classList.remove("active");
  changeBg();
});
