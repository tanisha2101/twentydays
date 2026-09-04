/* =========================================================
   SEPTEMBER 4 — NUSHI'S BIRTHDAY COUNTDOWN
========================================================= */


/* =========================================================
   SAFE ELEMENT HELPER
========================================================= */

function getElement(id) {
    return document.getElementById(id);
}


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

function scrollToSection(targetId) {

    const target = getElement(targetId);

    if (!target) {
        console.warn("Section not found:", targetId);
        return;
    }

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   ALL NAVIGATION BUTTONS
========================================================= */

document.querySelectorAll("[data-target]").forEach(button => {

    button.addEventListener("click", function () {

        const target = this.getAttribute("data-target");

        scrollToSection(target);

    });

});


/* =========================================================
   OPEN LETTER BUTTON
========================================================= */

const openButton = getElement("openButton");

if (openButton) {

    openButton.addEventListener("click", function () {

        scrollToSection("letter");

    });

}


/* =========================================================
   COUNTDOWN
========================================================= */

const birthdayDate = new Date(
    "September 6, 2026 00:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthdayDate - now;


    /* Birthday has arrived */

    if (difference <= 0) {

        getElement("days").textContent = "00";
        getElement("hours").textContent = "00";
        getElement("minutes").textContent = "00";
        getElement("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    getElement("days").textContent =
        String(days).padStart(2, "0");

    getElement("hours").textContent =
        String(hours).padStart(2, "0");

    getElement("minutes").textContent =
        String(minutes).padStart(2, "0");

    getElement("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================================
   QUEST SYSTEM
========================================================= */

const questButtons =
    document.querySelectorAll(".quest-button");

const completedQuests = new Set();


questButtons.forEach(button => {

    button.addEventListener("click", function () {

        const quest = this.dataset.quest;

        if (completedQuests.has(quest)) {
            return;
        }


        completedQuests.add(quest);

        this.classList.add("completed");

        this.textContent = "✓ Complete";


        const result =
            getElement(`${quest}-result`);

        if (result) {
            result.classList.add("show");
        }


        updateQuestProgress();


        /* When all four quests are complete */

        if (completedQuests.size === 4) {

            setTimeout(() => {

                showCelebration();

            }, 800);

        }

    });

});


/* =========================================================
   QUEST PROGRESS
========================================================= */

function updateQuestProgress() {

    const completed = completedQuests.size;

    const percentage =
        (completed / 4) * 100;


    const progressFill =
        getElement("progressFill");

    const progressText =
        getElement("progressText");


    if (progressFill) {
        progressFill.style.width =
            `${percentage}%`;
    }


    if (progressText) {

        progressText.textContent =
            `${completed} / 4 completed`;

    }

}


/* =========================================================
   CELEBRATION
========================================================= */

const celebration =
    getElement("celebration");

const closeCelebration =
    getElement("closeCelebration");


function showCelebration() {

    if (!celebration) {
        return;
    }

    celebration.classList.add("show");

    createSparkles();

}


if (closeCelebration) {

    closeCelebration.addEventListener(
        "click",
        function () {

            celebration.classList.remove("show");

        }
    );

}


/* =========================================================
   MAGIC SPARKLES
========================================================= */

function createSparkles() {

    const symbols = [
        "✦",
        "✧",
        "⋆",
        "✨"
    ];


    for (let i = 0; i < 25; i++) {

        const sparkle =
            document.createElement("span");


        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        sparkle.style.position = "fixed";

        sparkle.style.left =
            `${Math.random() * 100}%`;

        sparkle.style.top =
            `${Math.random() * 100}%`;

        sparkle.style.color =
            "#d4af5a";

        sparkle.style.fontSize =
            `${10 + Math.random() * 18}px`;

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.zIndex =
            "2000";

        sparkle.style.animation =
            `sparkleFloat ${
                1.5 + Math.random() * 2
            }s ease forwards`;


        document.body.appendChild(sparkle);


        setTimeout(() => {

            sparkle.remove();

        }, 4000);

    }

}


/* =========================================================
   SPARKLE ANIMATION
========================================================= */

const sparkleStyle =
    document.createElement("style");

sparkleStyle.textContent = `

@keyframes sparkleFloat {

    0% {
        opacity: 0;
        transform: translateY(20px) scale(.5);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translateY(-100px)
            scale(1.4)
            rotate(180deg);
    }

}
`;

document.head.appendChild(sparkleStyle);


/* =========================================================
   ESCAPE KEY — CLOSE CELEBRATION
========================================================= */

document.addEventListener("keydown", function(event) {

    if (
        event.key === "Escape" &&
        celebration &&
        celebration.classList.contains("show")
    ) {

        celebration.classList.remove("show");

    }

});


/* =========================================================
   PREVENT ACCIDENTAL FORM SUBMISSIONS
========================================================= */

document.querySelectorAll("button").forEach(button => {

    button.setAttribute("type", "button");

});


/* =========================================================
   CONSOLE CONFIRMATION
========================================================= */

console.log(
    "✨ Nushi's September 4 birthday experience is ready."
);
