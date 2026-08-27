/* =========================
   COUNTDOWN
========================= */

const targetDate =
    new Date("September 6, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;

    if (difference <= 0) {

        document.getElementById("countdown").innerHTML =
            "🎂 IT'S YOUR BIRTHDAY! 🎂";

        return;
    }

    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );

    document.getElementById("countdown").innerHTML =
        `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   SECTION NAVIGATION
========================= */

function goToSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


/* =========================
   YES ANSWER
========================= */

function yesAnswer() {

    document.getElementById("answer").innerHTML =
        "Then tonight, just breathe. 🌙❤️<br>" +
        "You are loved more than you know.";

    createHeartBurst();
}


/* =========================
   HEART BURST
========================= */

function createHeartBurst() {

    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💜",
        "✨",
        "🌙"
    ];

    for (let i = 0; i < 40; i++) {

        const heart =
            document.createElement("div");

        heart.className = "heart-burst";

        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.left = "50%";
        heart.style.top = "65%";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 300;

        heart.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        heart.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1800);
    }
}


/* =========================
   DANCING NO BUTTON
========================= */

const noButton =
    document.getElementById("noButton");

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);

noButton.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();
    }
);

function moveNoButton() {

    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        25;

    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        25;

    const x =
        Math.max(
            20,
            Math.random() * maxX
        );

    const y =
        Math.max(
            20,
            Math.random() * maxY
        );

    noButton.style.position = "fixed";

    noButton.style.left =
        x + "px";

    noButton.style.top =
        y + "px";
}
