// Nav Bar
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

// Accordion Animation

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

// GSAP

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const heroText = document.getElementById("hero-text");

  gsap.from(heroText, {
    y: 100,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: heroText,
      start: "-80% center",
      end: "top center",
      scrub: true,
    },
  });

  gsap.from(".col-event-1", {
    scrollTrigger: {
      trigger: ".col-event-1",
      start: "top 80%",
      end: "40% 60%",
      scrub: true,
    },
    y: 30,
    opacity: 0,
    ease: "none",
  });

  gsap.from(".col-event-2", {
    scrollTrigger: {
      trigger: ".col-event-1",
      start: "top 80%",
      end: "40% 60%",
      scrub: true,
    },
    y: 60,
    opacity: 0,
    ease: "none",
  });

  gsap.from(".col-event-3", {
    scrollTrigger: {
      trigger: ".col-event-1",
      start: "top 80%",
      end: "40% 60%",
      scrub: true,
    },
    y: 90,
    opacity: 0,
    ease: "none",
  });

  gsap.from(".col-event-4", {
    scrollTrigger: {
      trigger: ".col-event-4",
      start: "top bottom",
      end: "top 80%",
      scrub: true,
    },
    x: -100,
    opacity: 0,
    ease: "none",
  });

  gsap.from(".col-event-5", {
    scrollTrigger: {
      trigger: ".col-event-4",
      start: "top bottom",
      end: "top 80%",
      scrub: true,
    },
    x: 100,
    opacity: 0,
    ease: "none",
  });

  // How we Work

  gsap.from(".working-1", {
    scrollTrigger: {
      trigger: ".working-1",
      start: "top 80%",
      end: "center center",
      scrub: "true",
    },
    y: 80,
    opacity: 0,
    ease: "back",
  });
  gsap.from(".working-2", {
    scrollTrigger: {
      trigger: ".working-1",
      start: "top 70%",
      end: "center center",
      scrub: "true",
    },
    y: 80,
    opacity: 0,
    ease: "back",
  });
  gsap.from(".working-3", {
    scrollTrigger: {
      trigger: ".working-1",
      start: "top 60%",
      end: "center center",
      scrub: "true",
    },
    y: 80,
    opacity: 0,
    ease: "back",
  });
  gsap.from(".working-4", {
    scrollTrigger: {
      trigger: ".working-1",
      start: "top center",
      end: "center center",
      scrub: "true",
    },
    y: 80,
    opacity: 0,
    ease: "back",
  });
});
