function startBirthday() {

    megaConfetti();

    document.querySelector(".card-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* MESSAGE */

function showMessage() {

    const message =
        document.getElementById("secretMessage");

    message.classList.toggle("hidden");

    megaConfetti();

}



/* GIFTS */

function openGift(number) {

    const messages = [

        "🎁 You received: unlimited permission to yap to Ashi.",

        "🎁 You received: ONE free argument win. Use wisely.",

        "🎁 You received: a lifetime supply of Ashi annoying you.",

        "🎁 JACKPOT! You received absolutely nothing. Congratulations."

    ];

    document.getElementById("giftMessage")
        .innerText = messages[number - 1];

}



/* DANGER BUTTON */

let dangerCount = 0;

function dangerClick() {

    dangerCount++;

    const text =
        document.getElementById("dangerText");

    if (dangerCount === 1) {

        text.innerText =
            "I literally said DO NOT press it.";

    }

    else if (dangerCount === 2) {

        text.innerText =
            "Arul. Control yourself.";

    }

    else if (dangerCount === 3) {

        text.innerText =
            "Why are you like this 😭";

    }

    else if (dangerCount === 4) {

        text.innerText =
            "Fine. Press it again.";

    }

    else {

        text.innerText =
            "🎉 HAPPY BIRTHDAY IDIOT 🎉";

        megaConfetti();

    }

}



/* WISH MACHINE */

function generateWish() {

    const wishes = [

        "🔮 Prediction: you will become 37% more handsome this year. Unfortunately your ego will increase by 94%.",

        "🔮 Prediction: many gym gains are coming. Leg day cannot be avoided.",

        "🔮 Prediction: this year contains excessive happiness, adventures and at least 482 stupid conversations with Ashi.",

        "🔮 Prediction: you will eat something extremely good very soon.",

        "🔮 Prediction: one annoying girl called Ashi will continue appearing in your life.",

        "🔮 Prediction: 23 is going to look very good on you.",

        "🔮 Prediction: you will continue ragebaiting Ashi and somehow survive."

    ];

    const random =
        Math.floor(
            Math.random() *
            wishes.length
        );

    document.getElementById("wishResult")
        .innerText =
            wishes[random];

}



/* CONFETTI */

function megaConfetti() {

    const confetti =
        ["🎉","✨","💖","⭐","🎈","💫","🌸","🎂"];

    for (let i = 0; i < 70; i++) {

        setTimeout(() => {

            const piece =
                document.createElement("div");

            piece.classList.add("confetti");

            piece.innerText =
                confetti[
                    Math.floor(
                        Math.random() *
                        confetti.length
                    )
                ];

            piece.style.left =
                Math.random() * 100 + "vw";

            piece.style.fontSize =
                15 +
                Math.random() * 25 +
                "px";

            piece.style.animationDuration =
                2 +
                Math.random() * 3 +
                "s";

            document.body.appendChild(piece);

            setTimeout(() => {
                piece.remove();
            }, 5000);

        }, i * 30);

    }

}