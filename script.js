/* =========================
   COUNTDOWN
========================= */

const targetDate =
    new Date("September 6, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("countdown").innerHTML =
            "Today is your birthday ❤️";

        return;
    }

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

    document.getElementById("countdown").innerHTML =
        `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   OPEN LETTER
========================= */

const startBtn =
    document.getElementById("startBtn");

const welcome =
    document.getElementById("welcome");

const letterSection =
    document.getElementById("letterSection");

startBtn.addEventListener("click", () => {

    welcome.classList.add("hidden");

    letterSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =========================
   OPEN QUESTION
========================= */

const questionBtn =
    document.getElementById("questionBtn");

const questionSection =
    document.getElementById("questionSection");

questionBtn.addEventListener("click", () => {

    questionSection.classList.remove("hidden");

    setTimeout(() => {

        questionSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);
});


/* =========================
   YES BUTTON
========================= */

const yesBtn =
    document.getElementById("yesBtn");

const response =
    document.getElementById("response");

yesBtn.addEventListener("click", () => {

    response.innerHTML =
        "Then you are home. Always. ❤️";

    createHearts(15);
});


/* =========================
   RUNAWAY NO BUTTON
========================= */

const noBtn =
    document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton() {

    const container =
        document.querySelector(".buttons");

    const maxX =
        container.clientWidth - noBtn.offsetWidth;

    const maxY =
        container.clientHeight - noBtn.offsetHeight;

    const randomX =
        Math.random() * maxX - maxX / 2;

    const randomY =
        Math.random() * maxY - maxY / 2;

    noBtn.style.transform =
        `translate(${randomX}px, ${randomY}px)`;
}


/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
    document.getElementById("hearts");

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        Math.random() > .5 ? "♡" : "♥";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (7 + Math.random() * 7) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 14000);
}

setInterval(createHeart, 650);


/* =========================
   SPARKLES
========================= */

const sparkleContainer =
    document.getElementById("sparkles");

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✦";

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.top =
        Math.random() * 100 + "%";

    sparkle.style.fontSize =
        (8 + Math.random() * 10) + "px";

    sparkle.style.animationDelay =
        Math.random() * 3 + "s";

    sparkleContainer.appendChild(sparkle);
}

for (let i = 0; i < 25; i++) {
    createSparkle();
}


/* =========================
   EXTRA HEART BURST
========================= */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
}
