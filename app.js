"use strick";
let userPoints = 0;
let lastUserSelection = 0;
let computerPoints = 0;

function generateComputerSelection(lastSelection) {
    if (Math.floor(Math.random() * 3) === 0) {
        switch (lastSelection) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 0;
            default:
                return Math.floor(Math.random() * 3);
        }
    } else if (Math.floor(Math.random() * 6) === 0) {
        switch (lastSelection) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            default:
                return Math.floor(Math.random() * 3);
        }
    }

    return Math.floor(Math.random() * 3);
}

function getWinner(computer, user) {
    if (user === computer) {
        return 0;
    } else if ((user === 0 && computer === 1) ||
               (user === 1 && computer === 2) ||
               (user === 2 && computer === 0)) {
        return 2;
    }

    return 1;
}

function play(selection) {
    const roundWinner = getWinner(generateComputerSelection(lastUserSelection), selection);
    lastUserSelection = selection;

    if (roundWinner === 1) {
        document.querySelector("#round_winner").innerText = "YOU WON THE ROUND";
        userPoints++;
    } else if (roundWinner === 2) {
        document.querySelector("#round_winner").innerText = "COMPUTER WON THE ROUND";
        computerPoints++;
    } else {
        document.querySelector("#round_winner").innerText = "TIE ROUND";
    }

    document.querySelector("#versus").innerText = `COMPUTER: ${computerPoints} - YOU: ${userPoints}`;

    if (userPoints >= 5) {
        document.querySelector(".game_over").classList.toggle("show");
        document.querySelector(".game_over_text").innerText = "YOU WON 😎";
    } else if (computerPoints >= 5) {
        document.querySelector(".game_over").classList.toggle("show");
        document.querySelector(".game_over_text").innerText = "COMPUTER WON 🤖";
    }
}

function reset() {
    userPoints = 0;
    lastUserSelection = 0;
    computerPoints = 0;

    document.querySelector("#round_winner").innerText = "? ? ?";
    document.querySelector("#versus").innerText = `COMPUTER: ${computerPoints} - YOU: ${userPoints}`;
    document.querySelector(".game_over").classList.toggle("show");
}

document.querySelector("#play_again").addEventListener("click", () => reset());

document.querySelector("#rock").addEventListener("click", () => play(0));
document.querySelector("#paper").addEventListener("click", () => play(1));
document.querySelector("#scissors").addEventListener("click", () => play(2));

/* -- */

document.querySelector("#yellow").addEventListener("click", () => {
    document.querySelector("#rock").innerText = "✊";
    document.querySelector("#paper").innerText = "🖐️";
    document.querySelector("#scissors").innerText = "✌️";
});

document.querySelector("#bright").addEventListener("click", () => {
    document.querySelector("#rock").innerText = "✊🏻";
    document.querySelector("#paper").innerText = "🖐🏻";
    document.querySelector("#scissors").innerText = "✌🏻";
});

document.querySelector("#medium").addEventListener("click", () => {
    document.querySelector("#rock").innerText = "✊🏽";
    document.querySelector("#paper").innerText = "🖐🏽";
    document.querySelector("#scissors").innerText = "✌🏽";
});

document.querySelector("#dark").addEventListener("click", () => {
    document.querySelector("#rock").innerText = "✊🏿";
    document.querySelector("#paper").innerText = "🖐🏿";
    document.querySelector("#scissors").innerText = "✌🏿";
});