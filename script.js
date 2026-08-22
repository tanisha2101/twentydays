/* =========================
   COUNTDOWN
========================= */

const targetDate = new Date("September 6, 2026 00:00:00").getTime();

const countdown = document.getElementById("countdown");


function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;


    if (distance <= 0) {

        countdown.innerHTML = "Happy Birthday, my favourite person! 🎂❤️";

        return;

    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    countdown.innerHTML =
        `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;

}


updateCountdown();

setInterval(updateCountdown, 1000);



/* =========================
   OPEN LETTER
========================= */

const openLetter = document.getElementById("openLetter");

const letterSection = document.getElementById("letterSection");


openLetter.addEventListener("click", function () {

    letterSection.classList.remove("hidden");

    letterSection.scrollIntoView({
        behavior: "smooth"
    });

    createHearts(12);

});



/* =========================
   ONE LAST THING
========================= */

const oneLastThing =
    document.getElementById("oneLastThing");

const questionSection =
    document.getElementById("questionSection");


oneLastThing.addEventListener("click", function () {

    questionSection.classList.remove("hidden");

    questionSection.scrollIntoView({
        behavior: "smooth"
    });

    createHearts(18);

});



/* =========================
   YES BUTTON
========================= */

const yesBtn =
    document.getElementById("yesBtn");

const response =
    document.getElementById("response");


yesBtn.addEventListener("click", function () {

    response.innerHTML =
        "Good. Because I plan on being proud of you forever. ☁️❤️";

    createHearts(25);

});



/* =========================
   PLAYFUL NO BUTTON
========================= */

const noBtn =
    document.getElementById("noBtn");


function moveNoButton() {

    const card =
        document.querySelector(".questionCard");

    const maxX =
        card.offsetWidth - noBtn.offsetWidth - 20;

    const maxY = 100;


    const randomX =
        Math.random() * Math.max(maxX, 20);

    const randomY =
        Math.random() * maxY;


    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";

}


noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", function(e) {

    e.preventDefault();

    moveNoButton();

});



/* =========================
   FLOATING HEARTS
========================= */

function createHearts(amount) {

    const container =
        document.getElementById("hearts");


    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
            Math.random() > .5 ? "♡" : "♥";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";


        heart.style.fontSize =
            (12 + Math.random() * 14) + "px";


        container.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 8000);

    }

}


/* =========================
   AUTOMATIC SOFT HEARTS
========================= */

setInterval(() => {

    createHearts(1);

}, 2500);
