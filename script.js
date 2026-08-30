/* =========================
   COUNTDOWN
========================= */

const targetDate =
    new Date("September 6, 2026 00:00:00").getTime();

function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        targetDate - now;

    if (difference <= 0) {

        document.getElementById("countdown").innerHTML =
            "🎂 IT'S YOUR BIRTHDAY! 🎂";

        return;
    }

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
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
   NAVIGATION
========================= */

function goTo(id) {

    const section =
        document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}



/* =========================
   CREATE STARS
========================= */

function createStars(containerId, amount) {

    const container =
        document.getElementById(containerId);

    if (!container) return;

    for (let i = 0; i < amount; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.width =
            Math.random() > .85
            ? "3px"
            : "2px";

        star.style.height =
            star.style.width;

        container.appendChild(star);

    }

}

createStars("stars", 90);
createStars("nightStars", 110);



/* =========================
   SCROLL EXPERIENCE
========================= */

const sky =
    document.querySelector(".sky");

const sun =
    document.querySelector(".sun");

const moon =
    document.querySelector(".moon");

const clouds =
    document.querySelectorAll(".cloud");

const progressBar =
    document.getElementById("progressBar");


function updateScene() {

    const scrollTop =
        window.scrollY;

    const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        Math.min(
            1,
            Math.max(
                0,
                scrollTop / maxScroll
            )
        );


    /* Progress bar */

    progressBar.style.width =
        `${progress * 100}%`;


    /* =========================
       SKY TRANSITION
    ========================= */

    if (progress < .22) {

        sky.style.background =
            `linear-gradient(
                180deg,
                #8fc7e5,
                #b6d9e6,
                #f5d3a0
            )`;

    }

    else if (progress < .45) {

        sky.style.background =
            `linear-gradient(
                180deg,
                #76afd1,
                #e6bd9a,
                #f4a66f
            )`;

    }

    else if (progress < .68) {

        sky.style.background =
            `linear-gradient(
                180deg,
                #d98b83,
                #ed9b79,
                #9d718c
            )`;

    }

    else if (progress < .84) {

        sky.style.background =
            `linear-gradient(
                180deg,
                #805d83,
                #595476,
                #3e4667
            )`;

    }

    else {

        sky.style.background =
            `linear-gradient(
                180deg,
                #43496d,
                #303956,
                #252c49
            )`;

    }


    /* =========================
       SUN MOVEMENT
    ========================= */

    const sunProgress =
        Math.min(
            1,
            progress / .72
        );

    const sunX =
        12 + sunProgress * 68;

    const sunY =
        12 + sunProgress * 55;

    sun.style.left =
        `${sunX}vw`;

    sun.style.top =
        `${sunY}vh`;


    /* Sunset sun gets smaller */

    const sunSize =
        110 - sunProgress * 30;

    sun.style.width =
        `${sunSize}px`;

    sun.style.height =
        `${sunSize}px`;


    /* =========================
       MOON APPEARS
    ========================= */

    if (progress > .67) {

        moon.style.opacity =
            Math.min(
                1,
                (progress - .67) * 4
            );

        moon.style.top =
            `${72 - (progress - .67) * 20}vh`;

    }
    else {

        moon.style.opacity = 0;

    }


    /* =========================
       CLOUD FADE
    ========================= */

    clouds.forEach(cloud => {

        cloud.style.opacity =
            Math.max(
                0,
                1 - progress * 1.5
            );

    });


    /* =========================
       STARS
    ========================= */

    document.querySelectorAll(".star")
        .forEach(star => {

            if (
                star.parentElement.id === "stars"
            ) {

                star.style.opacity =
                    progress > .55
                    ? (progress - .55) * 2
                    : 0;

            }

        });

}

window.addEventListener(
    "scroll",
    updateScene,
    { passive: true }
);

updateScene();



/* =========================
   FLOATING GOLD PARTICLES
========================= */

const particleContainer =
    document.getElementById("particles");

function createParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    const symbols =
        ["✦", "✧", "·", "✨", "☀"];

    particle.innerHTML =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.top =
        (65 + Math.random() * 35) + "vh";

    particle.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    particleContainer.appendChild(
        particle
    );

    setTimeout(
        () => particle.remove(),
        6000
    );

}

setInterval(
    createParticle,
    650
);



/* =========================
   YES ANSWER
========================= */

function yesAnswer() {

    document.getElementById("answer").innerHTML =
        "I'll always find my way back to you. 🌅❤️";

    createBurst();

}



/* =========================
   HEART + SUNSET BURST
========================= */

function createBurst() {

    const symbols = [
        "❤️",
        "💗",
        "💖",
        "🌅",
        "✨",
        "🌟",
        "☀️",
        "💛"
    ];

    for (
        let i = 0;
        i < 65;
        i++
    ) {

        const burst =
            document.createElement("div");

        burst.className =
            "burst";

        burst.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() *
            350;

        burst.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        burst.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        document.body.appendChild(
            burst
        );

        setTimeout(
            () => burst.remove(),
            1800
        );

    }

}



/* =========================
   DANCING NO BUTTON
========================= */

const noButton =
    document.getElementById("noButton");

const questionSection =
    document.getElementById("question");


noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


noButton.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);


function moveNoButton() {

    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        20;

    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        20;

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

    noButton.style.position =
        "fixed";

    noButton.style.left =
        x + "px";

    noButton.style.top =
        y + "px";

    noButton.style.zIndex =
        "9999";

}



/* =========================
   RESET NO BUTTON
========================= */

function resetNoButton() {

    noButton.style.position =
        "static";

    noButton.style.left =
        "";

    noButton.style.top =
        "";

    noButton.style.zIndex =
        "";

}


window.addEventListener(
    "scroll",
    function() {

        const rect =
            questionSection.getBoundingClientRect();

        const visible =
            rect.top < window.innerHeight &&
            rect.bottom > 0;

        if (!visible) {

            resetNoButton();

        }

    },
    { passive: true }
);



/* =========================
   INITIAL SCENE
========================= */

window.addEventListener(
    "load",
    () => {

        updateScene();

    }
);
