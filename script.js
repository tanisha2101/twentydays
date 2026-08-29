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

setInterval(
    updateCountdown,
    1000
);



/* =========================
   NAVIGATION
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
   FLOATING PARTICLES
========================= */

const particleContainer =
    document.getElementById("particles");


function createParticle() {

    const particle =
        document.createElement("div");


    particle.className =
        "particle";


    particle.innerHTML =
        ["✦", "✧", "·", "☀", "✨"][
            Math.floor(
                Math.random() * 5
            )
        ];


    particle.style.left =
        Math.random() * 100 + "vw";


    particle.style.top =
        (70 + Math.random() * 30) + "vh";


    particle.style.animationDuration =
        (3 + Math.random() * 3) + "s";


    particleContainer.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 6000);

}


setInterval(
    createParticle,
    500
);



/* =========================
   YES ANSWER
========================= */

function yesAnswer() {

    document.getElementById("answer").innerHTML =
        "Scientific conclusion accepted. ☀️❤️<br>" +
        "The sunshine may continue shining.";

    createBurst();

}



/* =========================
   SUN + HEART BURST
========================= */

function createBurst() {

    const symbols = [

        "❤️",
        "💗",
        "💛",
        "💖",
        "☀️",
        "✨",
        "✦"

    ];


    for (
        let i = 0;
        i < 50;
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


        burst.style.left =
            "50%";


        burst.style.top =
            "65%";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() *
            320;


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


        setTimeout(() => {

            burst.remove();

        }, 1800);

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


    noButton.style.position =
        "fixed";


    noButton.style.left =
        x + "px";


    noButton.style.top =
        y + "px";

}



/* =========================
   RESET NO BUTTON
   WHEN LEAVING QUESTION
========================= */

function resetNoButton() {

    noButton.style.position =
        "static";

    noButton.style.left =
        "";

    noButton.style.top =
        "";

}


window.addEventListener(
    "scroll",
    function() {

        const rect =
            questionSection.getBoundingClientRect();


        const isVisible =
            rect.top < window.innerHeight &&
            rect.bottom > 0;


        if (!isVisible) {

            resetNoButton();

        }

    }
);
