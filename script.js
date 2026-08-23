/* =========================
   ELEMENTS
========================= */

const startBtn = document.getElementById("startBtn");

const gameComplete =
    document.getElementById("gameComplete");

const letterBtn =
    document.getElementById("letterBtn");

const letterSection =
    document.getElementById("letterSection");

const questionBtn =
    document.getElementById("questionBtn");

const questionSection =
    document.getElementById("questionSection");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const response =
    document.getElementById("response");

const player =
    document.getElementById("player");

const score =
    document.getElementById("score");



/* =========================
   START GAME
========================= */

startBtn.addEventListener("click", function () {

    startBtn.innerHTML = "♥ PLAYING...";

    startBtn.disabled = true;

    let currentScore = 0;

    const scoreInterval = setInterval(function () {

        currentScore += 100;

        score.innerText =
            String(currentScore).padStart(6, "0");


        if (currentScore >= 800) {

            clearInterval(scoreInterval);

            finishGame();

        }

    }, 400);

});



/* =========================
   FINISH GAME
========================= */

function finishGame() {

    player.style.animation =
        "none";

    player.style.left =
        "50%";

    document.querySelector(".gameMessage")
        .style.display = "none";


    gameComplete.classList.remove("hidden");

    gameComplete.scrollIntoView({
        behavior: "smooth"
    });

}



/* =========================
   OPEN LETTER
========================= */

letterBtn.addEventListener("click", function () {

    letterSection.classList.remove("hidden");

    letterSection.scrollIntoView({
        behavior: "smooth"
    });

});



/* =========================
   QUESTION
========================= */

questionBtn.addEventListener("click", function () {

    questionSection.classList.remove("hidden");

    questionSection.scrollIntoView({
        behavior: "smooth"
    });

});



/* =========================
   YES
========================= */

yesBtn.addEventListener("click", function () {

    response.innerHTML =
        "LEVEL COMPLETE ♥<br><br>" +
        "You can rest here whenever you need.";

    yesBtn.innerHTML =
        "♥ SAFE PLACE UNLOCKED";

    createHearts(20);

});



/* =========================
   PLAYFUL NO BUTTON
========================= */

function moveNoButton() {

    const card =
        document.querySelector(".questionCard");

    const maxX =
        card.clientWidth -
        noBtn.offsetWidth -
        20;

    const maxY = 120;


    const x =
        Math.random() *
        Math.max(maxX, 50);

    const y =
        Math.random() *
        maxY;


    noBtn.style.left =
        x + "px";

    noBtn.style.top =
        y + "px";

}


noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


noBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);



/* =========================
   HEARTS
========================= */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            Math.random() > .5
                ? "♥"
                : "♡";


        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-20px";

        heart.style.fontSize =
            15 + Math.random() * 20 + "px";

        heart.style.color =
            Math.random() > .5
                ? "#ff5c98"
                : "#ffdc4d";

        heart.style.zIndex =
            "50";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "transform 5s linear, opacity 5s linear";


        document.body.appendChild(heart);


        setTimeout(function () {

            heart.style.transform =
                `translateY(-100vh) translateX(${Math.random() * 100 - 50}px)`;

            heart.style.opacity =
                "0";

        }, 50);


        setTimeout(function () {

            heart.remove();

        }, 5500);

    }

}
