/* =========================
   COUNTDOWN
========================= */

const targetDate =
    new Date("September 6, 2026 00:00:00").getTime();

const countdown =
    document.getElementById("countdown");


function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        targetDate - now;


    if (distance <= 0) {

        countdown.innerHTML =
            "HAPPY BIRTHDAY ❤️";

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


    countdown.innerHTML =
        `${days} Days · ${hours} Hours · ${minutes} Minutes · ${seconds} Seconds`;

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================
   SECTION REVEAL
========================= */

function reveal(section) {

    section.style.display =
        "block";

    section.style.opacity =
        "0";

    section.style.transform =
        "translateY(35px)";


    requestAnimationFrame(() => {

        section.style.transition =
            "opacity .8s ease, transform .8s ease";

        section.style.opacity =
            "1";

        section.style.transform =
            "translateY(0)";

    });

}


/* =========================
   OPEN BOOK
========================= */

const openBook =
    document.getElementById("openBook");

const cover =
    document.getElementById("cover");

const letterSection =
    document.getElementById("letterSection");


openBook.onclick = () => {

    cover.style.transition =
        "opacity .6s ease, transform .6s ease";

    cover.style.opacity =
        "0";

    cover.style.transform =
        "scale(.96)";


    setTimeout(() => {

        cover.style.display =
            "none";

        reveal(letterSection);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 600);

};


/* =========================
   TURN PAGE
========================= */

const turnPage =
    document.getElementById("turnPage");

const secondSection =
    document.getElementById("secondSection");


turnPage.onclick = () => {

    reveal(secondSection);


    setTimeout(() => {

        secondSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

};


/* =========================
   LAST PAGE
========================= */

const questionButton =
    document.getElementById("questionButton");

const questionSection =
    document.getElementById("questionSection");


questionButton.onclick = () => {

    reveal(questionSection);


    setTimeout(() => {

        questionSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

};


/* =========================
   RUNAWAY NO BUTTON
========================= */

const noBtn =
    document.getElementById("noBtn");


function moveNoButton() {

    const x =
        Math.random() * 180 - 90;

    const y =
        Math.random() * 100 - 50;


    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

}


noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


noBtn.addEventListener(
    "touchstart",
    moveNoButton
);


/* =========================
   YES BUTTON
========================= */

const yesBtn =
    document.getElementById("yesBtn");

const response =
    document.getElementById("response");


yesBtn.onclick = () => {

    response.innerHTML = `
        Then maybe this story
        isn't finished yet. ❤️
        <br><br>
        Some pages simply take
        a little longer to turn.
    `;


    createFallingPetals();

};


/* =========================
   SOFT PETAL ANIMATION
========================= */

function createFallingPetals() {

    const symbols = [
        "❦",
        "✦",
        "♡",
        "·"
    ];


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(() => {

            const petal =
                document.createElement("div");


            petal.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            petal.style.position =
                "fixed";


            petal.style.left =
                Math.random() *
                100 + "vw";


            petal.style.top =
                "-30px";


            petal.style.fontSize =
                (18 +
                Math.random() * 20)
                + "px";


            petal.style.color =
                "#b77b82";


            petal.style.pointerEvents =
                "none";


            petal.style.zIndex =
                "9999";


            petal.style.transition =
                "transform 4s ease, opacity 4s ease";


            document.body.appendChild(
                petal
            );


            requestAnimationFrame(() => {

                petal.style.transform =
                    `translateY(${window.innerHeight + 100}px)
                     rotate(${Math.random() * 360}deg)`;

                petal.style.opacity =
                    "0";

            });


            setTimeout(() => {

                petal.remove();

            }, 4500);

        }, i * 80);

    }

}


/* =========================
   FLOATING BOOK PARTICLES
========================= */

const particles =
    document.getElementById("particles");


function createParticle() {

    const particle =
        document.createElement("div");


    particle.className =
        "particle";


    particle.innerHTML =
        Math.random() > .5
            ? "·"
            : "❦";


    particle.style.left =
        Math.random() * 100 + "vw";


    particle.style.top =
        (80 +
        Math.random() * 20) + "vh";


    particle.style.fontSize =
        (12 +
        Math.random() * 15) + "px";


    particle.style.animationDuration =
        (8 +
        Math.random() * 7) + "s";


    particles.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 15000);

}


setInterval(
    createParticle,
    900
);
