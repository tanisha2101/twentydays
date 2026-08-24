/* =========================
   COUNTDOWN
========================= */

const targetDate =
    new Date("September 6, 2026 00:00:00").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        countdown.innerHTML =
            "🎂 IT'S YOUR BIRTHDAY! 🎂";

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

    countdown.innerHTML =
        `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}

updateCountdown();

setInterval(updateCountdown,1000);


/* =========================
   START GAME
========================= */

const startBtn =
    document.getElementById("startBtn");

const mainContent =
    document.getElementById("mainContent");

startBtn.addEventListener("click",function(){

    mainContent.classList.remove("hidden");

    mainContent.scrollIntoView({
        behavior:"smooth"
    });

    startBtn.style.display="none";

});


/* =========================
   LETTER
========================= */

const letterBtn =
    document.getElementById("letterBtn");

const letterSection =
    document.getElementById("letterSection");

letterBtn.addEventListener("click",function(){

    letterSection.classList.remove("hidden");

    letterSection.scrollIntoView({
        behavior:"smooth"
    });

});


/* =========================
   FORTUNE COOKIE
========================= */

const fortuneBtn =
    document.getElementById("fortuneBtn");

const fortuneSection =
    document.getElementById("fortuneSection");

const revealFortune =
    document.getElementById("revealFortune");

const fortuneText =
    document.getElementById("fortuneText");

fortuneBtn.addEventListener("click",function(){

    fortuneSection.classList.remove("hidden");

    fortuneSection.scrollIntoView({
        behavior:"smooth"
    });

});

revealFortune.addEventListener("click",function(){

    fortuneText.innerHTML =
        "🥟 Your fortune says: There are many meals ahead, many places to discover, and someone who would happily share every single one with you. ❤️";

    revealFortune.innerHTML =
        "✨ Fortune Revealed ✨";

    document.getElementById("questionSection")
        .classList.remove("hidden");

});


/* =========================
   YES / NO QUESTION
========================= */

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const response =
    document.getElementById("response");


yesBtn.addEventListener("click",function(){

    response.innerHTML =
        "🥟❤️ Then it is officially a food date. No take-backs.";

    createSteam();
});


/* NO BUTTON RUNS AWAY */

noBtn.addEventListener("mouseenter",function(){

    const x =
        Math.random() * 180 - 90;

    const y =
        Math.random() * 100 - 50;

    noBtn.style.transform =
        `translate(${x}px,${y}px)`;

});


/* =========================
   FLOATING STEAM
========================= */

function createSteam(){

    const steam =
        document.createElement("div");

    steam.className="steam";

    steam.innerHTML =
        ["♨️","☁️","〰️","♨️"][Math.floor(Math.random()*4)];

    steam.style.left =
        Math.random()*100+"vw";

    steam.style.animationDuration =
        (5 + Math.random()*4)+"s";

    document.body.appendChild(steam);

    setTimeout(()=>{
        steam.remove();
    },9000);
}


/* CONSTANT STEAM */

setInterval(createSteam,900);


/* =========================
   EXTRA FOOD FLOATIES
========================= */

const foods =
    ["🥟","🥢","🍜","❤️","🥠"];

function foodFloat(){

    const item =
        document.createElement("div");

    item.style.position="fixed";
    item.style.left=Math.random()*100+"vw";
    item.style.bottom="-30px";
    item.style.fontSize="20px";
    item.style.opacity=".22";
    item.style.pointerEvents="none";
    item.style.zIndex="0";

    item.innerHTML =
        foods[Math.floor(Math.random()*foods.length)];

    item.style.transition="transform 8s linear, opacity 8s";

    document.body.appendChild(item);

    requestAnimationFrame(()=>{

        item.style.transform =
            `translateY(-110vh) rotate(${Math.random()*360}deg)`;

        item.style.opacity="0";
    });

    setTimeout(()=>{
        item.remove();
    },8000);
}

setInterval(foodFloat,1400);
