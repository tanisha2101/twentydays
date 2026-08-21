
/* =========================
   SECTION SWITCH
========================= */

function showSection(section) {

    section.classList.remove("hidden");

    section.style.opacity = "0";

    section.style.transform =
        "translateY(30px)";

    requestAnimationFrame(() => {

        section.style.transition =
            "opacity .7s ease, transform .7s ease";

        section.style.opacity = "1";

        section.style.transform =
            "translateY(0)";

    });

    setTimeout(() => {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================
   START GAME
========================= */

const startGame =
    document.getElementById("startGame");

const startScreen =
    document.getElementById("startScreen");

const levelOne =
    document.getElementById("levelOne");


startGame.onclick = () => {

    startScreen.style.transition =
        "opacity .6s ease";

    startScreen.style.opacity =
        "0";

    setTimeout(() => {

        startScreen.classList.add("hidden");

        showSection(levelOne);

        setTimeout(() => {

            document
                .getElementById("character")
                .style.left = "42%";

        }, 300);

    }, 600);

};


/* =========================
   MEMORY LEVEL
========================= */

const memoryButton =
    document.getElementById("memoryButton");

const memoryScreen =
    document.getElementById("memoryScreen");

const heartScore =
    document.getElementById("heartScore");

const memoryScore =
    document.getElementById("memoryScore");

let collected = 0;


memoryButton.onclick = () => {

    levelOne.classList.add("hidden");

    showSection(memoryScreen);

};


/* =========================
   MEMORY CARDS
========================= */

const memoryCards =
    document.querySelectorAll(".memory-card");

const memoryMessage =
    document.getElementById("memoryMessage");

const levelComplete =
    document.getElementById("levelComplete");


memoryCards.forEach(card => {

    card.onclick = () => {

        if (
            card.classList.contains(
                "collected"
            )
        ) {
            return;
        }


        card.classList.add(
            "collected"
        );


        collected++;

        heartScore.innerHTML =
            collected;

        memoryScore.innerHTML =
            collected;


        memoryMessage.innerHTML =
            card.dataset.message;


        createCoins();


        if (collected === 3) {

            setTimeout(() => {

                levelComplete.classList.remove(
                    "hidden"
                );

            }, 500);

        }

    };

});


/* =========================
   LEVEL COMPLETE
========================= */

const letterScreen =
    document.getElementById("letterScreen");


levelComplete.onclick = () => {

    memoryScreen.classList.add(
        "hidden"
    );

    showSection(letterScreen);

};


/* =========================
   CASTLE
========================= */

const castleButton =
    document.getElementById("castleButton");

const castleScreen =
    document.getElementById("castleScreen");


castleButton.onclick = () => {

    letterScreen.classList.add(
        "hidden"
    );

    showSection(castleScreen);

};


/* =========================
   FINAL QUESTION
========================= */

const questionButton =
    document.getElementById("questionButton");

const questionScreen =
    document.getElementById("questionScreen");


questionButton.onclick = () => {

    castleScreen.classList.add(
        "hidden"
    );

    showSection(questionScreen);

};


/* =========================
   NO BUTTON
========================= */

const noBtn =
    document.getElementById("noBtn");


function moveNoButton() {

    const x =
        Math.random() * 220 - 110;

    const y =
        Math.random() * 120 - 60;


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
        ⭐ LEVEL COMPLETE ⭐
        <br><br>
        PLAYER 1 + PLAYER 2
        <br><br>
        ADVENTURE CONTINUES ❤️
    `;


    createCelebration();

};


/* =========================
   COIN EFFECT
========================= */

function createCoins() {

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const coin =
            document.createElement("div");

        coin.innerHTML = "🪙";

        coin.style.position =
            "fixed";

        coin.style.left =
            Math.random() * 100 + "vw";

        coin.style.top =
            "70vh";

        coin.style.fontSize =
            "25px";

        coin.style.zIndex =
            "9999";

        coin.style.pointerEvents =
            "none";

        coin.style.transition =
            "1s ease";

        document.body.appendChild(
            coin
        );


        requestAnimationFrame(() => {

            coin.style.transform =
                `translateY(-${150 +
                Math.random() * 200}px)
                 rotate(360deg)`;

            coin.style.opacity =
                "0";

        });


        setTimeout(() => {

            coin.remove();

        }, 1200);

    }

}


/* =========================
   FINAL CELEBRATION
========================= */

function createCelebration() {

    const items = [
        "❤️",
        "⭐",
        "✨",
        "🪙",
        "🌸",
        "🎉"
    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        setTimeout(() => {

            const item =
                document.createElement("div");

            item.innerHTML =
                items[
                    Math.floor(
                        Math.random() *
                        items.length
                    )
                ];


            item.style.position =
                "fixed";

            item.style.left =
                Math.random() * 100 + "vw";

            item.style.top =
                "-30px";

            item.style.fontSize =
                (18 +
                Math.random() * 22) +
                "px";

            item.style.zIndex =
                "9999";

            item.style.pointerEvents =
                "none";

            item.style.transition =
                "transform 3s ease, opacity 3s ease";


            document.body.appendChild(
                item
            );


            requestAnimationFrame(() => {

                item.style.transform =
                    `translateY(${window.innerHeight + 80}px)
                     rotate(${Math.random() * 720}deg)`;

                item.style.opacity =
                    "0";

            });


            setTimeout(() => {

                item.remove();

            }, 3200);

        }, i * 50);

    }

}
