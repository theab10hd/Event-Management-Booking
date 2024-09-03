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
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: heroText,
      start: "-80% center",
      end: "top center",
    },
  });

  gsap.from(".col-event-1", {
    scrollTrigger: {
      trigger: ".col-event-1",
      start: "top 70%",
      end: "center center",
    },
    y: 30,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".col-event-2", {
    scrollTrigger: {
      trigger: ".col-event-2",
      start: "top 70%",
      end: "center center",
    },
    y: 60,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".col-event-3", {
    scrollTrigger: {
      trigger: ".col-event-3 ",
      start: "top 70%",
      end: "center center",
    },
    y: 90,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".col-event-4", {
    scrollTrigger: {
      trigger: ".col-event-4",
      start: "top 70%",
      end: "center center",
    },
    x: -100,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".col-event-5", {
    scrollTrigger: {
      trigger: ".col-event-5",
      start: "top 70%",
      end: "center center",
    },
    x: 100,
    opacity: 0,
    ease: "power3.inOut",
  });

  // How we Work

  gsap.from(".working-1", {
    scrollTrigger: {
      trigger: ".working-1",
      start: "top 80%",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".working-2", {
    scrollTrigger: {
      trigger: ".working-1",
      start: "top 70%",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".working-3", {
    scrollTrigger: {
      trigger: ".working-1",
      start: "top 60%",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".working-4", {
    scrollTrigger: {
      trigger: ".working-1",
      start: "top center",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  // Brand Logo

  gsap.from(".brand-title", {
    scrollTrigger: {
      trigger: ".brand-title",
      start: "top 85%",
      end: "center center",
    },
    x: -100,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".brand-logo-1", {
    scrollTrigger: {
      trigger: ".brand-logo-1",
      start: "top 85%",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".brand-logo-2", {
    scrollTrigger: {
      trigger: ".brand-logo-2",
      start: "top 80%",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".brand-logo-3", {
    scrollTrigger: {
      trigger: ".brand-logo-3",
      start: "top 75%",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".brand-logo-4", {
    scrollTrigger: {
      trigger: ".brand-logo-4",
      start: "top 70%",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".brand-logo-5", {
    scrollTrigger: {
      trigger: ".brand-logo-5",
      start: "top 65%",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".brand-logo-6", {
    scrollTrigger: {
      trigger: ".brand-logo-6",
      start: "top 60%",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".brand-logo-7", {
    scrollTrigger: {
      trigger: ".brand-logo-7",
      start: "top 55%",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.from(".brand-logo-8", {
    scrollTrigger: {
      trigger: ".brand-logo-8",
      start: "top center",
      end: "center center",
    },
    y: 80,
    opacity: 0,
    ease: "power3.inOut",
  });
});
