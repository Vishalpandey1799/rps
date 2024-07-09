const images = document.querySelectorAll(".imageContainer div");
const humanScoreElem = document.querySelector(".humanSide span");
const computerScoreElem = document.querySelector(".computerSide span");
const played = document.querySelector(".played span");
const result = document.querySelector(".ifornot p span");

let humanScore = 0;
let computerScore = 0;
let score = 0;

const buttons = document.querySelectorAll("button");
const choicesArray = ["Rock", "Paper", "Scissors"];

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let userChoice = e.target.textContent;


        let computerChoice = choices();
        score += 1;
        played.textContent = score;

        if (userChoice === computerChoice) {
            result.textContent = "It's a tie!";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
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
    console.log(randomNumbers);
    let computerChoice = choicesArray[randomNumbers];

    // kya fayda forEach sikh ke jab khud element pe jaake change karna pade
    if (randomNumbers === 0) {
        images[0].style.backgroundColor = "red";
        images[1].style.backgroundColor = "";
        images[2].style.backgroundColor = "";
        // malum hai i can do it in one line of code 
    }
    if (randomNumbers === 1) {
        images[1].style.backgroundColor = "red";
        images[2].style.backgroundColor = "";
        images[0].style.backgroundColor = "";
    }
    if (randomNumbers === 2) {
        images[2].style.backgroundColor = "red";
        images[0].style.backgroundColor = "";
        images[1].style.backgroundColor = "";
    }

    return computerChoice;
}
