/* =========================
   COUNTDOWN
========================= */

const targetDate =
    new Date("September 6, 2026 00:00:00").getTime();

const countdown =
    document.getElementById("countdown");


function updateCountdown(){

    const now =
        new Date().getTime();

    const distance =
        targetDate - now;


    if(distance <= 0){

        countdown.innerHTML =
            "It's finally your birthday! ❤️";

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
        `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;

}


updateCountdown();

setInterval(updateCountdown,1000);



/* =========================
   OPEN LETTER
========================= */

const startBtn =
    document.getElementById("startBtn");

const hero =
    document.getElementById("hero");

const daySection =
    document.getElementById("daySection");


startBtn.onclick = () => {

    hero.style.transition =
        "opacity .7s ease, transform .7s ease";

    hero.style.opacity = "0";

    hero.style.transform =
        "translateY(-30px)";


    setTimeout(() => {

        hero.style.display = "none";

        daySection.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });


        requestAnimationFrame(() => {

            daySection.style.transition =
                "opacity 1s ease, transform 1s ease";

            daySection.style.opacity = "1";

            daySection.style.transform =
                "translateY(0)";

        });

    },700);

};


/* =========================
   LETTER → REASONS
========================= */

const nextBtn =
    document.getElementById("nextBtn");

const reasonsSection =
    document.getElementById("reasonsSection");


nextBtn.onclick = () => {

    reasonsSection.style.display = "block";

    setTimeout(() => {

        reasonsSection.scrollIntoView({
            behavior:"smooth"
        });

    },100);

    createHeartBurst(15);

};


/* =========================
   SECRET
========================= */

const secretBtn =
    document.getElementById("secretBtn");

const secretSection =
    document.getElementById("secretSection");


secretBtn.onclick = () => {

    secretSection.style.display = "block";

    setTimeout(() => {

        secretSection.scrollIntoView({
            behavior:"smooth"
        });

    },100);

    createHeartBurst(35);

};


/* =========================
   FLOATING HEARTS
========================= */

const hearts =
    document.getElementById("hearts");


function createHeart(){

    const heart =
        document.createElement("div");

    heart.className = "heart";


    const symbols = [
        "♡",
        "♥",
        "❤",
        "✦",
        "♡"
    ];


    heart.innerHTML =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (14 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (6 + Math.random() * 5) + "s";


    heart.style.animationDelay =
        Math.random() * 2 + "s";


    hearts.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    },12000);

}


setInterval(createHeart,900);


/* =========================
   HEART BURST
========================= */

function createHeartBurst(amount){

    for(let i=0;i<amount;i++){

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className =
                "heart";


            heart.innerHTML =
                ["♡","♥","✦","❤"]
                [
                    Math.floor(
                        Math.random()*4
                    )
                ];


            heart.style.left =
                Math.random()*100 + "vw";


            heart.style.bottom =
                Math.random()*20 + "vh";


            heart.style.fontSize =
                (18 + Math.random()*25) + "px";


            heart.style.animationDuration =
                (4 + Math.random()*3) + "s";


            hearts.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            },8000);

        },i*80);

    }

}


/* =========================
   LITTLE MAGIC WHEN
   HOVERING REASONS
========================= */

const cards =
    document.querySelectorAll(".reason-card");


cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        createTinySparkles(card);

    });

});


function createTinySparkles(card){

    for(let i=0;i<5;i++){

        const sparkle =
            document.createElement("div");

        sparkle.innerHTML = "✦";

        sparkle.style.position =
            "absolute";

        sparkle.style.left =
            (20 + Math.random()*60) + "%";

        sparkle.style.top =
            (20 + Math.random()*50) + "%";

        sparkle.style.color =
            "#d18ba2";

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.fontSize =
            "14px";

        sparkle.style.transition =
            "1s";

        card.appendChild(sparkle);


        requestAnimationFrame(() => {

            sparkle.style.transform =
                "translateY(-25px)";

            sparkle.style.opacity = "0";

        });


        setTimeout(() => {

            sparkle.remove();

        },1000);

    }

}


/* =========================
   CLICK ANYWHERE
   LITTLE HEART
========================= */

document.addEventListener("click",(event)=>{

    if(
        event.target.tagName === "BUTTON"
    ){

        const mini =
            document.createElement("div");

        mini.innerHTML = "♡";

        mini.style.position =
            "fixed";

        mini.style.left =
            event.clientX + "px";

        mini.style.top =
            event.clientY + "px";

        mini.style.color =
            "#c15d7e";

        mini.style.fontSize =
            "24px";

        mini.style.pointerEvents =
            "none";

        mini.style.zIndex =
            "9999";

        mini.style.transition =
            "1s";


        document.body.appendChild(mini);


        requestAnimationFrame(() => {

            mini.style.transform =
                "translateY(-50px) scale(1.5)";

            mini.style.opacity = "0";

        });


        setTimeout(() => {

            mini.remove();

        },1000);

    }

});
/* =========================
   TODAY'S QUESTION
========================= */

const questionBtn =
    document.getElementById("questionBtn");

const questionSection =
    document.getElementById("questionSection");


questionBtn.onclick = () => {

    questionSection.style.display = "block";

    setTimeout(() => {

        questionSection.style.transition =
            "opacity 1s ease, transform 1s ease";

        questionSection.style.opacity = "1";

        questionSection.style.transform =
            "translateY(0)";

        questionSection.scrollIntoView({
            behavior:"smooth",
            block:"center"
        });

    },100);

    createHeartBurst(20);

};
