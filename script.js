// Navbar

function navbarTap() {
  var menu = document.getElementById("mobile-menu");

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(function () {
      menu.classList.remove("-translate-y-full");
      menu.classList.add("translate-y-0");
    }, 10);
  } else {
    menu.classList.add("-translate-y-full");
    menu.classList.remove("translate-y-0");
    menu.addEventListener(
      "transitionend",
      function () {
        menu.classList.add("hidden");
      },
      { once: true }
    );
  }
}

// Accordion

function toggleAccordion(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById("icon-" + id);

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.classList.add("rotate-180");
  } else {
    content.classList.add("hidden");
    icon.classList.remove("rotate-180");
  }
}

// Animation
