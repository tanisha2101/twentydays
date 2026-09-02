/* =========================================
   NUSHI'S JOYBOX 🎮❤️
========================================= */


/* =========================================
   START SCREEN
========================================= */

const startScreen =
  document.getElementById("startScreen");

const startBtn =
  document.getElementById("startBtn");

const game =
  document.getElementById("game");


startBtn.addEventListener("click", () => {

  startScreen.classList.add("hidden");

  document.body.style.overflow = "auto";

  createCelebration(25);

});


/* =========================================
   COUNTDOWN
   SEPTEMBER 6, 2026
========================================= */

const birthday =
  new Date(
    "September 6, 2026 00:00:00"
  ).getTime();


function updateCountdown() {

  const now = new Date().getTime();

  const distance = birthday - now;


  if (distance <= 0) {

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;

  }


  const days =
    Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (distance %
        (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (distance %
        (1000 * 60 * 60)) /
      (1000 * 60)
    );

  const seconds =
    Math.floor(
      (distance %
        (1000 * 60)) /
      1000
    );


  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
  updateCountdown,
  1000
);


/* =========================================
   DAY / LEVEL
========================================= */

const startDate =
  new Date("August 6, 2026");

const today =
  new Date();

const dayDifference =
  Math.floor(
    (
      today - startDate
    ) /
    (1000 * 60 * 60 * 24)
  ) + 1;


const level =
  document.getElementById("level");

if (level) {

  level.textContent =
    Math.max(
      1,
      dayDifference
    );

}


/* =========================================
   HEART COUNTER
========================================= */

let hearts = 0;

const heartCount =
  document.getElementById(
    "heartCount"
  );


function updateHeartCounter() {

  heartCount.textContent =
    String(hearts).padStart(2, "0");

}


/* =========================================
   PARTICLES
========================================= */

const particles =
  document.getElementById(
    "particles"
  );


function createParticle(
  x,
  y,
  symbol = "♥"
) {

  const particle =
    document.createElement("div");

  particle.className =
    "particle";

  particle.textContent =
    symbol;

  particle.style.left =
    `${x}px`;

  particle.style.top =
    `${y}px`;

  particle.style.color =
    [
      "#ff6f91",
      "#ffd166",
      "#5ec8ff",
      "#a78bfa",
      "#63e6d7"
    ][
      Math.floor(
        Math.random() * 5
      )
    ];

  particles.appendChild(
    particle
  );


  setTimeout(
    () => particle.remove(),
    4000
  );

}


function createCelebration(
  amount = 15
) {

  for (
    let i = 0;
    i < amount;
    i++
  ) {

    setTimeout(
      () => {

        createParticle(

          Math.random() *
          window.innerWidth,

          window.innerHeight -

          Math.random() * 100,

          Math.random() > 0.5
            ? "♥"
            : "★"

        );

      },

      i * 70
    );

  }

}


/* =========================================
   COLLECT JOY BUTTON
========================================= */

const collectBtn =
  document.getElementById(
    "collectBtn"
  );

const xpFill =
  document.getElementById(
    "xpFill"
  );

const xpText =
  document.getElementById(
    "xpText"
  );

let xp = 0;


collectBtn.addEventListener(
  "click",
  () => {

    xp =
      Math.min(
        xp + 10,
        100
      );

    xpFill.style.width =
      `${xp}%`;

    xpText.textContent =
      `${xp} / 100`;

    hearts++;

    updateHeartCounter();

    createCelebration(8);


    if (xp === 100) {

      collectBtn.textContent =
        "LEVEL COMPLETE! ❤️";

      collectBtn.style.background =
        "#79d98b";

    }

  }
);


/* =========================================
   COLLECTIBLES
========================================= */

const collectibleCards =
  document.querySelectorAll(
    ".collect-card"
  );


collectibleCards.forEach(
  card => {

    card.addEventListener(
      "click",
      () => {

        if (
          card.classList.contains(
            "collected"
          )
        ) {
          return;
        }


        card.classList.add(
          "collected"
        );


        const value =
          Number(
            card.dataset.value
          );


        xp =
          Math.min(
            xp + value,
            100
          );


        xpFill.style.width =
          `${xp}%`;

        xpText.textContent =
          `${xp} / 100`;


        hearts++;

        updateHeartCounter();


        card.querySelector(
          "p"
        ).textContent =
          "COLLECTED! ❤️";


        createCelebration(10);


        if (xp === 100) {

          document.querySelector(
            ".collect-hint"
          ).textContent =
            "LEVEL COMPLETE! YOU FOUND ALL THE JOY. ✦";

        }

      }
    );

  }
);


/* =========================================
   MINI GAME
========================================= */

const miniStart =
  document.getElementById(
    "miniStart"
  );

const fallingHeart =
  document.getElementById(
    "fallingHeart"
  );

const gameArea =
  document.getElementById(
    "gameArea"
  );

const gameScore =
  document.getElementById(
    "gameScore"
  );

let score = 0;

let gameRunning = false;


miniStart.addEventListener(
  "click",
  () => {

    if (gameRunning) {
      return;
    }

    gameRunning = true;

    score = 0;

    gameScore.textContent =
      score;

    miniStart.textContent =
      "CATCH THEM! ❤️";

    spawnHeart();

  }
);


function spawnHeart() {

  if (!gameRunning) {
    return;
  }


  const maxX =
    gameArea.clientWidth -
    65;

  const randomX =
    Math.random() *
    maxX;


  fallingHeart.style.left =
    `${randomX}px`;

  fallingHeart.classList.remove(
    "active"
  );


  /*
    Force animation restart
  */

  void fallingHeart.offsetWidth;


  fallingHeart.classList.add(
    "active"
  );


  setTimeout(
    () => {

      if (gameRunning) {
        spawnHeart();
      }

    },

    2100
  );

}


fallingHeart.addEventListener(
  "click",
  event => {

    event.stopPropagation();


    score++;


    gameScore.textContent =
      score;


    hearts++;

    updateHeartCounter();


    createCelebration(5);


    fallingHeart.classList.remove(
      "active"
    );


    if (score >= 10) {

      gameRunning = false;

      miniStart.textContent =
        "BONUS ROUND COMPLETE! ✦";

      fallingHeart.style.display =
        "none";

      createCelebration(30);

    }

  }
);


/* =========================================
   FINAL YES BUTTON
========================================= */

const yesBtn =
  document.getElementById(
    "yesBtn"
  );

const finalResponse =
  document.getElementById(
    "finalResponse"
  );


yesBtn.addEventListener(
  "click",
  () => {

    finalResponse.classList.add(
      "show"
    );


    yesBtn.textContent =
      "GAME SAVED ❤️";


    createCelebration(40);


    yesBtn.animate(
      [
        {
          transform:
            "scale(1)"
        },

        {
          transform:
            "scale(1.15)"
        },

        {
          transform:
            "scale(1)"
        }

      ],

      {
        duration: 500
      }

    );

  }
);


/* =========================================
   RUNAWAY QUIT BUTTON
========================================= */

const noBtn =
  document.getElementById(
    "noBtn"
  );


function moveQuitButton() {

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
    Math.max(
      maxX,
      padding
    );


  const y =
    Math.random() *
    Math.max(
      maxY,
      padding
    );


  noBtn.style.position =
    "fixed";

  noBtn.style.left =
    `${Math.max(
      padding,
      x
    )}px`;

  noBtn.style.top =
    `${Math.max(
      padding,
      y
    )}px`;

  noBtn.style.zIndex =
    "500";

}


noBtn.addEventListener(
  "mouseenter",
  moveQuitButton
);


noBtn.addEventListener(
  "touchstart",
  event => {

    event.preventDefault();

    moveQuitButton();

  },
  {
    passive: false
  }
);


noBtn.addEventListener(
  "click",
  event => {

    event.preventDefault();

    moveQuitButton();

  }
);


/* =========================================
   RANDOM HEARTS WHILE SCROLLING
========================================= */

let lastScrollParticle = 0;


window.addEventListener(
  "scroll",
  () => {

    const now =
      Date.now();


    if (
      now -
      lastScrollParticle <
      450
    ) {
      return;
    }


    lastScrollParticle =
      now;


    if (
      Math.random() <
      0.3
    ) {

      createParticle(

        Math.random() *
        window.innerWidth,

        window.innerHeight,

        Math.random() > 0.5
          ? "♥"
          : "✦"

      );

    }

  },
  {
    passive: true
  }
);


/* =========================================
   CLICK ANYWHERE = PIXEL HEART
========================================= */

document.addEventListener(
  "click",
  event => {

    if (
      event.target.closest(
        "button"
      )
    ) {
      return;
    }


    createParticle(
      event.clientX,
      event.clientY,
      "♥"
    );

  }
);


/* =========================================
   CONSOLE CONTROLS
========================================= */

document.querySelectorAll(
  ".game-button"
).forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const original =
          button.textContent;


        button.textContent =
          "♥";


        createCelebration(5);


        setTimeout(
          () => {

            button.textContent =
              original;

          },
          600
        );

      }
    );

  }
);


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "%cPLAYER 2: NUSHI ❤️",
  `
    font-size: 22px;
    font-weight: bold;
    color: #ff6f91;
  `
);

console.log(
  "The best part of the game is getting to talk to her at the end of the day."
);
