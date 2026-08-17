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
            "It's Your Birthday ❤️";

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
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const mins =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const secs =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    countdown.innerHTML =
        `${days} Days · ${hours} Hours · ${mins} Minutes · ${secs} Seconds`;

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   RAIN
========================= */

const rain =
    document.getElementById("rain");


function createRain() {

    for (let i = 0; i < 120; i++) {

        const drop =
            document.createElement("div");

        drop.className = "drop";


        drop.style.left =
            Math.random() * 100 + "vw";


        drop.style.top =
            Math.random() * -100 + "vh";


        drop.style.opacity =
            0.15 +
            Math.random() * 0.45;


        drop.style.animationDuration =
            0.6 +
            Math.random() * 0.8 +
            "s";


        drop.style.animationDelay =
            Math.random() * 2 +
            "s";


        rain.appendChild(drop);

    }

}


createRain();


/* =========================
   RAIN SOUND
========================= */

const rainSound =
    document.getElementById("rainSound");

const soundBtn =
    document.getElementById("soundBtn");


rainSound.volume = 0.28;


soundBtn.onclick = () => {

    if (rainSound.paused) {

        rainSound.play()
            .then(() => {

                soundBtn.innerHTML =
                    "🔊 Rain is playing";

            })
            .catch(() => {

                soundBtn.innerHTML =
                    "⚠️ Tap again to play rain";

            });

    } else {

        rainSound.pause();

        soundBtn.innerHTML =
            "🔇 Rain is muted";

    }

};


/* =========================
   ENTER PAGE
========================= */

const startBtn =
    document.getElementById("startBtn");

const hero =
    document.getElementById("hero");

const daySection =
    document.getElementById("daySection");


startBtn.onclick = () => {

    /* Start rain automatically
       because the user has interacted */

    if (rainSound.paused) {

        rainSound.play()
            .catch(() => {});

        soundBtn.innerHTML =
            "🔊 Rain is playing";

    }


    hero.style.transition =
        "1s ease";

    hero.style.opacity =
        "0";


    setTimeout(() => {

        hero.style.display =
            "none";

        daySection.classList.remove(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);

};


/* =========================
   LISTEN TO RAIN
========================= */

const cloudBtn =
    document.getElementById("cloudBtn");

const cloudMessage =
    document.getElementById("cloudMessage");


cloudBtn.onclick = () => {

    cloudMessage.classList.toggle(
        "open"
    );


    if (
        cloudMessage.classList.contains(
            "open"
        )
    ) {

        cloudBtn.innerHTML =
            "☁️ Let It Rain";

    } else {

        cloudBtn.innerHTML =
            "🌧️ Listen To The Rain";

    }

};


/* =========================
   LETTER
========================= */

const letterBtn =
    document.getElementById("letterBtn");

const letter =
    document.getElementById("letter");

const questionSection =
    document.getElementById(
        "questionSection"
    );


letterBtn.onclick = () => {

    letter.classList.remove(
        "hidden"
    );


    letterBtn.innerHTML =
        "💌 The Letter Is Yours";


    setTimeout(() => {

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);


    setTimeout(() => {

        questionSection.classList.remove(
            "hidden"
        );

    }, 1500);

};


/* =========================
   NO BUTTON
========================= */

const noBtn =
    document.getElementById("noBtn");


noBtn.addEventListener(
    "mouseover",
    () => {

        const x =
            Math.random() * 220 - 110;

        const y =
            Math.random() * 120 - 60;


        noBtn.style.transform =
            `translate(${x}px, ${y}px)`;

    }
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
        ☔ Then let's keep dancing
        through every kind of weather. ❤️
    `;


    createMagicRain();

};


/* =========================
   YES EFFECT
========================= */

const effects =
    document.getElementById("effects");


function createMagicRain() {

    const symbols = [
        "❤️",
        "☔",
        "✨",
        "💧",
        "🌧️"
    ];


    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const element =
                document.createElement("div");

            element.className =
                "floating";


            element.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            element.style.left =
                Math.random() * 100 +
                "vw";


            element.style.animationDuration =
                3 +
                Math.random() * 3 +
                "s";


            effects.appendChild(
                element
            );


            setTimeout(() => {

                element.remove();

            }, 6000);

        }, i * 70);

    }

}