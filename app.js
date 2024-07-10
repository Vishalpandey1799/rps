const images = document.querySelectorAll(".imageContainer div");
const humanScoreElem = document.querySelector(".humanSide span");
const computerScoreElem = document.querySelector(".computerSide span");
const played = document.querySelector(".played span");
const result = document.querySelector(".ifornot p span");

let humanScore = 0;
let computerScore = 0;
let score = 0;
let chances = {
    0: "Rock",
    1: "Paper",
    2: "Scissor",
};
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let userChoice = e.target.textContent;


        let computerChoice = choices();
        let usual = chances[computerChoice];
        score += 1;
        played.textContent = score;

        if (userChoice === usual) {
            result.textContent = "it's a tie";
        } else if (
            (userChoice === "Paper" && usual === "Rock") ||
            (userChoice === "Scissor" && usual === "Paper") ||
            (userChoice === "Rock" && usual === "Scissor")



        ) {
            humanScore += 1;
            humanScoreElem.textContent = humanScore;
            result.textContent = "You won this round!";
        } else {
            computerScore += 1;
            computerScoreElem.textContent = computerScore;
            result.textContent = "Computer won this round!";
        }




    });
});

function choices() {
    let randomNumbers = Math.floor(Math.random() * 3);



    images.forEach((img, index) => {
        if (index === randomNumbers) {
            img.style.backgroundColor = "red";
        } else {
            img.style.backgroundColor = "";

        }
    })

    return randomNumbers;

}
