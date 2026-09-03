document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     INTRO
  ========================= */

  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");

  enterBtn.addEventListener("click", function () {
    intro.classList.add("hide");
  });


  /* =========================
     COUNTDOWN
  ========================= */

  const targetDate = new Date(
    "September 6, 2026 00:00:00"
  ).getTime();

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");


  function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;


    if (difference <= 0) {

      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";

      return;
    }


    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24))
      / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (difference % (1000 * 60 * 60))
      / (1000 * 60)
    );

    const seconds = Math.floor(
      (difference % (1000 * 60))
      / 1000
    );


    daysElement.textContent =
      String(days).padStart(2, "0");

    hoursElement.textContent =
      String(hours).padStart(2, "0");

    minutesElement.textContent =
      String(minutes).padStart(2, "0");

    secondsElement.textContent =
      String(seconds).padStart(2, "0");
  }


  updateCountdown();

  setInterval(updateCountdown, 1000);


  /* =========================
     FALLING AUTUMN LEAVES
  ========================= */

  const leavesContainer =
    document.getElementById("leaves");

  const leafSymbols = [
    "🍂",
    "🍁",
    "🍂",
    "🍁"
  ];


  function createLeaf() {

    const leaf = document.createElement("span");

    leaf.className = "leaf";

    leaf.textContent =
      leafSymbols[
        Math.floor(
          Math.random() * leafSymbols.length
        )
      ];


    leaf.style.left =
      Math.random() * 100 + "vw";


    leaf.style.fontSize =
      (12 + Math.random() * 12) + "px";


    leaf.style.animationDuration =
      (6 + Math.random() * 8) + "s";


    leaf.style.opacity =
      0.25 + Math.random() * 0.6;


    leavesContainer.appendChild(leaf);


    setTimeout(function () {
      leaf.remove();
    }, 15000);
  }


  setInterval(createLeaf, 900);


  for (let i = 0; i < 8; i++) {
    setTimeout(createLeaf, i * 300);
  }


  /* =========================
     COFFEE CARDS
  ========================= */

  const coffeeCards =
    document.querySelectorAll(".coffee-card");

  const coffeeMessage =
    document.getElementById("coffeeMessage");


  coffeeCards.forEach(function (card) {

    card.addEventListener("click", function () {

      const message =
        card.getAttribute("data-message");

      coffeeMessage.style.opacity = "0";

      setTimeout(function () {

        coffeeMessage.textContent = message;

        coffeeMessage.style.opacity = "1";

      }, 150);

    });

  });


  /* =========================
     FLOATING HEART
  ========================= */

  document.addEventListener("click", function (event) {

    if (
      event.target.closest("button") ||
      event.target.closest(".coffee-card")
    ) {

      const heart =
        document.createElement("div");

      heart.textContent = "♥";

      heart.style.position = "fixed";

      heart.style.left =
        event.clientX + "px";

      heart.style.top =
        event.clientY + "px";

      heart.style.zIndex = "999";

      heart.style.pointerEvents = "none";

      heart.style.color = "#c8796e";

      heart.style.fontSize =
        (12 + Math.random() * 15) + "px";

      heart.style.transition =
        "all 1s ease";

      document.body.appendChild(heart);


      requestAnimationFrame(function () {

        heart.style.transform =
          "translateY(-70px) scale(1.5)";

        heart.style.opacity = "0";

      });


      setTimeout(function () {
        heart.remove();
      }, 1000);
    }

  });


  /* =========================
     YES BUTTON
  ========================= */

  const yesBtn =
    document.getElementById("yesBtn");

  const yesMessage =
    document.getElementById("yesMessage");


  yesBtn.addEventListener("click", function () {

    yesMessage.classList.add("show");

    createCelebration();

  });


  function createCelebration() {

    for (let i = 0; i < 20; i++) {

      const heart =
        document.createElement("div");

      heart.textContent =
        Math.random() > 0.5 ? "♥" : "✦";

      heart.style.position = "fixed";

      heart.style.left =
        Math.random() * 100 + "vw";

      heart.style.top =
        "70vh";

      heart.style.zIndex = "9999";

      heart.style.pointerEvents = "none";

      heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

      heart.style.color = "#d3a86c";

      heart.style.transition =
        "transform 2s ease, opacity 2s ease";


      document.body.appendChild(heart);


      setTimeout(function () {

        heart.style.transform =
          `translateY(-${200 + Math.random() * 400}px)
           rotate(${Math.random() * 360}deg)`;

        heart.style.opacity = "0";

      }, 50);


      setTimeout(function () {
        heart.remove();
      }, 2200);

    }

  }


  /* =========================
     RUNAWAY "NO" BUTTON
  ========================= */

  const noBtn =
    document.getElementById("noBtn");


  function moveNoButton() {

    const maxX =
      Math.min(window.innerWidth - 150, 250);

    const maxY = 120;


    const randomX =
      (Math.random() * maxX) -
      (maxX / 2);


    const randomY =
      (Math.random() * maxY) -
      (maxY / 2);


    noBtn.style.transform =
      `translate(${randomX}px, ${randomY}px)`;

  }


  noBtn.addEventListener(
    "mouseenter",
    moveNoButton
  );


  noBtn.addEventListener(
    "touchstart",
    function (event) {

      event.preventDefault();

      moveNoButton();

    }
  );


  noBtn.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      moveNoButton();

    }
  );


  /* =========================
     CONSOLE EASTER EGG
  ========================= */

  console.log(
    "☕ Welcome to our little town, Nushi."
  );

  console.log(
    "♥ Table permanently reserved for Bui + Nushi."
  );

});
