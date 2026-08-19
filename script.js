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
            "HAPPY BIRTHDAY ♥";

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
        `${days}D · ${hours}H · ${minutes}M · ${seconds}S`;

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================
   SECTION REVEAL
========================= */

function revealSection(section) {

    section.style.display =
        "block";

    section.style.opacity =
        "0";

    section.style.transform =
        "translateY(45px)";


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
   OPEN LETTER
========================= */

const openLetter =
    document.getElementById("openLetter");

const hero =
    document.getElementById("hero");

const letterSection =
    document.getElementById("letterSection");


openLetter.onclick = () => {

    hero.style.transition =
        "opacity .5s ease, transform .5s ease";

    hero.style.opacity =
        "0";

    hero.style.transform =
        "scale(.96)";


    setTimeout(() => {

        hero.style.display =
            "none";

        revealSection(
            letterSection
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);

};


/* =========================
   TURN PAGE
========================= */

const turnPage =
    document.getElementById("turnPage");

const storySection =
    document.getElementById("storySection");


turnPage.onclick = () => {

    revealSection(
        storySection
    );


    setTimeout(() => {

        storySection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

};


/* =========================
   ONE LAST THING
========================= */

const lastButton =
    document.getElementById("lastButton");

const questionSection =
    document.getElementById("questionSection");


lastButton.onclick = () => {

    revealSection(
        questionSection
    );


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


function runAway() {

    const x =
        Math.random() * 220 - 110;

    const y =
        Math.random() * 130 - 65;


    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

}


noBtn.addEventListener(
    "mouseenter",
    runAway
);


noBtn.addEventListener(
    "touchstart",
    runAway
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
        ♥ PLAYER 01 HAS CHOSEN LOVE ♥
        <br><br>
        Then let's not worry about
        the ending just yet.
        <br>
        We still have so many pages
        left to write together.
        <br><br>
        <span>
            CHAPTER 19 UNLOCKED...
        </span>
    `;


    celebration();

};


/* =========================
   CELEBRATION
========================= */

function celebration() {

    const symbols = [
        "♥",
        "✦",
        "★",
        "♡"
    ];


    for (
        let i = 0;
        i < 40;
        i++
    ) {

        setTimeout(() => {

            const item =
                document.createElement("div");


            item.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            item.style.position =
                "fixed";


            item.style.left =
                Math.random() *
                100 + "vw";


            item.style.top =
                "100vh";


            item.style.color =
                i % 2 === 0
                    ? "#ff4fc8"
                    : "#ffe66d";


            item.style.fontSize =
                (12 +
                Math.random() * 20)
                + "px";


            item.style.textShadow =
                "0 0 10px currentColor";


            item.style.pointerEvents =
                "none";


            item.style.zIndex =
                "10000";


            item.style.transition =
                "transform 3s ease, opacity 3s ease";


            document.body.appendChild(
                item
            );


            requestAnimationFrame(() => {

                item.style.transform =
                    `translateY(-${window.innerHeight + 150}px)
                     rotate(${Math.random() * 360}deg)`;

                item.style.opacity =
                    "0";

            });


            setTimeout(() => {

                item.remove();

            }, 3200);


        }, i * 50);

    }

}


/* =========================
   FLOATING ARCADE PARTICLES
========================= */

const particles =
    document.getElementById(
        "particles"
    );


function createParticle() {

    const particle =
        document.createElement(
            "div"
        );


    particle.className =
        "particle";


    particle.innerHTML =
        Math.random() > .5
            ? "✦"
            : "♥";


    particle.style.left =
        Math.random() * 100 +
        "vw";


    particle.style.top =
        (80 +
        Math.random() * 20) +
        "vh";


    particle.style.fontSize =
        (8 +
        Math.random() * 13) +
        "px";


    particle.style.animationDuration =
        (6 +
        Math.random() * 6) +
        "s";


    particles.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 13000);

}


setInterval(
    createParticle,
    800
);
