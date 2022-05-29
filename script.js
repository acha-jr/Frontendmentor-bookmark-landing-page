// Media Query
let x = window.matchMedia("(min-width: 375px) and (max-width: 920px)");

const marker = document.querySelector("#marker");
const features = document.querySelectorAll(".topics p");
features[0].style.color = "hsl(229, 31%, 21%)";
const featuresArray = [...features];

const tabs = document.querySelectorAll(".tabs article");
tabs[1].style.display = "none";
tabs[2].style.display = "none";

marker.style.left = `${features[0].offsetLeft}px`;
marker.style.width = `${features[0].offsetWidth}px`;

if (x.matches) {
  marker.style.left = "50%";
  marker.style.transform = "translateX(-50%)";
  marker.style.width = `${features[0].offsetWidth * 0.35}px`;
  marker.style.top = `${features[0].offsetTop + features[0].offsetHeight}px`;
  marker.style.transition = "none";
}
features.forEach((e) => {
  e.addEventListener("click", () => {
    // Sets position of the marker
    marker.style.left = `${e.offsetLeft}px`;
    marker.style.width = `${e.offsetWidth}px`;

    if (x.matches) {
      marker.style.top = `${e.offsetTop + e.offsetHeight}px`;
      marker.style.width = `${e.offsetWidth * 0.35}px`;
      marker.style.left = "50%";
    }

    // Switches the features tab
    let current = featuresArray.indexOf(e);

    for (let i = 0; i < features.length; i++) {
      features[i].style.color = "hsl(229, 8%, 60%)";
    }
    features[current].style.color = "hsl(229, 31%, 21%)";

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
    tabs[current].style.display = "grid";
  });
});

// Q & A Section
const questions = document.querySelectorAll(".questions article");

questions.forEach((e) => {
  e.addEventListener("click", () => {
    e.children[1].classList.toggle("dropdown-close");
    e.children[0].children[0].classList.toggle("icon-rotate");
  });
});

// Newsletter Subscribe
const form = document.querySelector("form");
const button = document.querySelector("form button");
const inputContainer = document.querySelector("form .input");
const input = document.querySelector("form input");
const error = document.querySelector(".error");
const errorimg = document.querySelector("form img");

button.addEventListener("click", (e) => {
  e.preventDefault();

  setInterval(() => {
    if (
      !input.value ||
      !input.value.includes("@") ||
      !input.value.includes(".")
    ) {
      error.style.display = "block";
      inputContainer.style.outline = "2px solid hsl(0, 94%, 66%)";
      errorimg.style.display = "block";
    } else {
      error.style.display = "none";
      inputContainer.style.outline = "none";
      errorimg.style.display = "none";
    }
  }, 1);
});

// Mobile Menu
const menuOpen = document.getElementById("menu");
const menuClose = document.getElementById("close");
const nav = document.querySelector("nav");

if (x.matches) {
  menuOpen.addEventListener("click", () => {
    nav.style.display = "block";
  });
  menuClose.addEventListener("click", () => {
    nav.style.display = "none";
  });
}
