let menuSmall = document.getElementById("menu-small");
let nav = document.getElementById("nav");
let overlay = document.getElementById("overlay");
let navLinks = document.getElementsByClassName("nav__link");
let navPaper = document.getElementsByClassName("nav-paper");
let body = document.querySelector("body");

menuSmall.addEventListener("click", () => {
  if (nav.classList.contains("menu-active")) {
    // CLOSE MENU
    nav.classList.remove("menu-active");
    menuSmall.classList.remove("active");
    overlay.classList.add("hidden");

    nav.classList.add("overflow");
    nav.classList.add("hidden-small");

    for (i = 0; i < navLinks.length; i++) {
      let link = navPaper[i];
      link.classList.remove("translate-" + (i + 1));
      link.setAttribute("data-status", "active");
    }
  } else {
    // OPEN MENU
    nav.classList.add("menu-active");
    menuSmall.classList.add("active");
    overlay.classList.remove("hidden");

    nav.classList.remove("overflow");
    nav.classList.remove("hidden-small");

    for (i = 0; i < navLinks.length; i++) {
      let link = navPaper[i];

      link.classList.add("translate-" + (i + 1));
      link.setAttribute("data-status", "inactive");
      setTimeout(function () {
        link.setAttribute("data-status", "active");
      }, 800);
    }
  }
});

overlay.addEventListener("click", () => {
  let scrollPosition = document.body.scrollTop;

  if (!overlay.classList.contains("hidden") && scrollPosition > 1) {
    overlay.classList.add("hidden");
  }
});
