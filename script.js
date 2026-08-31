/* =========================================
   TODAY'S PAGE
   Warmth & Comfort Theme ❤️
========================================= */


/* =========================================
   DAY NUMBER
========================================= */

const dayNumber = document.getElementById("dayNumber");

const startDate = new Date("August 6, 2026");
const today = new Date();

const difference =
  Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24)
  ) + 1;

if (dayNumber) {
  dayNumber.textContent = difference;
}


/* =========================================
   RAIN
========================================= */

const rainContainer = document.getElementById("rain");

function createRain() {

  if (!rainContainer) return;

  const amount = window.innerWidth < 600 ? 45 : 85;

  for (let i = 0; i < amount; i++) {

    const drop = document.createElement("div");

    drop.classList.add("raindrop");

    drop.style.left = Math.random() * 100 + "%";

    drop.style.height =
      Math.random() * 45 + 35 + "px";

    drop.style.animationDuration =
      Math.random() * 0.8 + 0.7 + "s";

    drop.style.animationDelay =
      Math.random() * 2 + "s";

    drop.style.opacity =
      Math.random() * 0.6 + 0.2;

    rainContainer.appendChild(drop);
  }
}

createRain();


/* =========================================
   SCROLL REVEALS
========================================= */

const revealElements = document.querySelectorAll(
  ".section-tag, h2, .section-text, .little-note, .comfort-card, .letter, .question-intro, .question-section h2"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach(element => {
  observer.observe(element);
});


/* =========================================
   HEART CREATOR
========================================= */

function createHeart(x, y) {

  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML =
    Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  heart.style.fontSize =
    Math.random() * 12 + 14 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}


/* =========================================
   RANDOM HEARTS WHILE SCROLLING
========================================= */

let lastHeartTime = 0;

window.addEventListener("scroll", () => {

  const now = Date.now();

  if (now - lastHeartTime < 350) return;

  lastHeartTime = now;

  if (Math.random() < 0.25) {

    createHeart(
      Math.random() * window.innerWidth,
      window.innerHeight - 30
    );

  }

});


/* =========================================
   YES BUTTON
========================================= */

const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

if (yesBtn) {

  yesBtn.addEventListener("click", () => {

    response.classList.add("show");

    /*
      Little celebration.
    */

    for (let i = 0; i < 18; i++) {

      setTimeout(() => {

        createHeart(
          window.innerWidth / 2 +
          (Math.random() - 0.5) * 250,

          window.innerHeight / 2 +
          (Math.random() - 0.5) * 100
        );

      }, i * 70);

    }

    yesBtn.textContent = "Always & forever ❤️";

    yesBtn.style.transform = "scale(1.05)";

    setTimeout(() => {
      yesBtn.style.transform = "scale(1)";
    }, 300);

  });

}


/* =========================================
   RUNAWAY NO BUTTON
========================================= */

const noBtn = document.getElementById("noBtn");

if (noBtn) {

  function moveNoButton() {

    const padding = 20;

    const maxX =
      window.innerWidth -
      noBtn.offsetWidth -
      padding;

    const maxY =
      window.innerHeight -
      noBtn.offsetHeight -
      padding;

    const x =
      Math.max(
        padding,
        Math.random() * maxX
      );

    const y =
      Math.max(
        padding,
        Math.random() * maxY
      );

    noBtn.style.position = "fixed";

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.style.zIndex = "999";

  }

  noBtn.addEventListener(
    "mouseenter",
    moveNoButton
  );

  noBtn.addEventListener(
    "touchstart",
    event => {

      event.preventDefault();

      moveNoButton();

    },
    { passive: false }
  );

  noBtn.addEventListener(
    "click",
    event => {

      event.preventDefault();

      moveNoButton();

    }
  );

}


/* =========================================
   CLICK ANYWHERE → TINY WARM HEART
========================================= */

document.addEventListener("click", event => {

  if (
    event.target.tagName === "BUTTON" ||
    event.target.closest("button")
  ) {
    return;
  }

  createHeart(
    event.clientX,
    event.clientY
  );

});


/* =========================================
   GENTLE PARALLAX FOR HERO
========================================= */

const cup = document.querySelector(".cup");
const hero = document.querySelector(".hero");

if (cup && hero) {

  hero.addEventListener("mousemove", event => {

    const x =
      (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
      (event.clientY / window.innerHeight - 0.5) * 10;

    cup.style.transform =
      `translate(${x}px, ${y}px)`;

  });

  hero.addEventListener("mouseleave", () => {

    cup.style.transform =
      "translate(0, 0)";

  });

}


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "%cFor Nushi ❤️",
  "font-size: 20px; color: #a95043; font-family: serif;"
);

console.log(
  "Some people are warmth. You found yours."
);
