/* =========================================
   CITY LIGHTS — DAY 27 ❤️
========================================= */


/* =========================================
   DAY NUMBER
========================================= */

const dayNumber = document.getElementById("dayNumber");

const startDate = new Date("August 6, 2026");
const today = new Date();

const difference =
  Math.floor(
    (today - startDate) /
    (1000 * 60 * 60 * 24)
  ) + 1;

if (dayNumber) {
  dayNumber.textContent = difference;
}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
  `
  .section-tag,
  .chaos-section h2,
  .chaos-section p,
  .noise-box,
  .still-circle,
  .stillness-section h2,
  .stillness-section p,
  .handwritten,
  .lights-section > h2,
  .lights-intro,
  .light-card,
  .letter,
  .question-intro,
  .question-section h2
  `
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        /*
          Once revealed, stop observing.
        */

        observer.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.12
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
    Math.random() > 0.5
      ? "♡"
      : "♥";

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  heart.style.fontSize =
    `${Math.random() * 13 + 14}px`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2100);
}


/* =========================================
   CLICK → LITTLE CITY LIGHT
========================================= */

document.addEventListener("click", event => {

  if (
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
   FLOATING HEARTS WHILE SCROLLING
========================================= */

let lastHeart = 0;

window.addEventListener(
  "scroll",
  () => {

    const now = Date.now();

    if (
      now - lastHeart < 500
    ) {
      return;
    }

    lastHeart = now;

    if (Math.random() < 0.22) {

      createHeart(
        Math.random() *
        window.innerWidth,

        window.innerHeight - 25
      );

    }

  },
  { passive: true }
);


/* =========================================
   YES BUTTON
========================================= */

const yesBtn =
  document.getElementById("yesBtn");

const response =
  document.getElementById("response");


if (yesBtn) {

  yesBtn.addEventListener(
    "click",
    () => {

      response.classList.add("show");

      yesBtn.textContent =
        "Always & forever ❤️";

      /*
        Celebration burst
      */

      for (
        let i = 0;
        i < 25;
        i++
      ) {

        setTimeout(
          () => {

            createHeart(

              window.innerWidth / 2 +
              (Math.random() - 0.5) * 350,

              window.innerHeight / 2 +
              (Math.random() - 0.5) * 180

            );

          },

          i * 65
        );

      }

      yesBtn.animate(
        [
          {
            transform: "scale(1)"
          },

          {
            transform: "scale(1.12)"
          },

          {
            transform: "scale(1)"
          }
        ],
        {
          duration: 500
        }
      );

    }
  );

}


/* =========================================
   RUNAWAY NO BUTTON
========================================= */

const noBtn =
  document.getElementById("noBtn");


if (noBtn) {

  function escapeButton() {

    const padding = 15;

    const maxX =
      window.innerWidth -
      noBtn.offsetWidth -
      padding;

    const maxY =
      window.innerHeight -
      noBtn.offsetHeight -
      padding;

    const x =
      Math.random() *
      Math.max(maxX, padding);

    const y =
      Math.random() *
      Math.max(maxY, padding);

    noBtn.style.position = "fixed";

    noBtn.style.left =
      `${Math.max(padding, x)}px`;

    noBtn.style.top =
      `${Math.max(padding, y)}px`;

    noBtn.style.zIndex = "500";

  }


  noBtn.addEventListener(
    "mouseenter",
    escapeButton
  );


  noBtn.addEventListener(
    "touchstart",
    event => {

      event.preventDefault();

      escapeButton();

    },
    {
      passive: false
    }
  );


  noBtn.addEventListener(
    "click",
    event => {

      event.preventDefault();

      escapeButton();

    }
  );

}


/* =========================================
   GENTLE HERO PARALLAX
========================================= */

const hero =
  document.querySelector(".hero");

const windowElement =
  document.querySelector(".window");


if (
  hero &&
  windowElement &&
  window.innerWidth > 800
) {

  hero.addEventListener(
    "mousemove",
    event => {

      const x =
        (
          event.clientX /
          window.innerWidth -
          0.5
        ) * 12;

      const y =
        (
          event.clientY /
          window.innerHeight -
          0.5
        ) * 8;

      windowElement.style.transform =
        `translate(${x}px, ${y}px)`;

    }
  );


  hero.addEventListener(
    "mouseleave",
    () => {

      windowElement.style.transform =
        "translate(0, 0)";

    }
  );

}


/* =========================================
   RANDOM WINDOW LIGHTS
========================================= */

const windowLights =
  document.querySelectorAll(
    ".window-city span"
  );


windowLights.forEach(
  building => {

    building.style.opacity =
      Math.random() * 0.5 + 0.5;

  }
);


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "%cFor Nushi ♡",
  `
    font-size: 22px;
    color: #f2c47d;
    font-family: serif;
  `
);

console.log(
  "Among all the city lights, she is the one you look for."
);
