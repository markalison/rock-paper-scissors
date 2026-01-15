let human_score = 0;
let computer_score = 0;
let human_choice = ""

function getComputerChoice() {
    const num = Math.floor(Math.random()*3)+1;
    let computer_choice;
    switch(num) {
        case 1:
            computer_choice = "rock";
            break;
        case 2:
            computer_choice = "paper";
            break;
        case 3:
            computer_choice = "scissors";
            break;
    }
    console.log(`The computer chose: ${computer_choice}`);
    return computer_choice;
}

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => {
    human_choice = "rock";
 });

// rockBtn.addEventListener("click", playRound("rock", getComputerChoice));
// rockBtn.addEventListener("click", declareResult);

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => {
     human_choice = "paper";
 });
// paperBtn.addEventListener("click", getComputerChoice);
// paperBtn.addEventListener("click", playRound("paper", getComputerChoice));

const scissorsBtn = document.querySelector("#scissors-btn");
 scissorsBtn.addEventListener("click", () => {
     human_choice = "scissors";
 })

// scissorsBtn.addEventListener("click", getComputerChoice);
// scissorsBtn.addEventListener("click", playRound("scissors", getComputerChoice));





// function getHumanChoice() {
//     let human_string = prompt("Rock, Paper, Scissors Shoot!");
//     human_string = human_string.toLowerCase();
//     switch(human_string) {
//         case "rock":
//             human_choice = "rock";
//             break;
//         case "paper":
//             human_choice = "paper";
//             break;
//         case "scissors":
//             human_choice = "scissors";
//             break;
//     }
//     console.log(`You chose: ${human_choice}`)
//     return human_choice;
// }

function playRound(human_choice, computer_choice) {
    let result;
    

    switch(`${human_choice}-${computer_choice}`) {
        case "rock-rock":
            result = "draw";
            break;
        case "rock-paper":
            result = "computer_wins";
            break;
        case "rock-scissors":
            result = "human_wins";
            break;
        case "paper-rock":
            result = "human_wins";
            break;
        case "paper-paper":
            result = "draw";
            break;
        case "paper-scissors":
            result = "computer_wins";
            break;
        case "scissors-rock":
            result = "computer_wins"
            break;
        case "scissors-paper":
            result = "human_wins";
            break;
        case "scissors-scissors":
            result = "draw";
            break;
    }
    return result;
}

const roundResult = document.querySelector("#round-result");

const results = document.querySelector("#results")
const finalResult = document.querySelector("#final-result");
function declareResult(result, computer_choice) {
    
        if (result == "draw") {
            // console.log("Draw!")
            roundResult.textContent = "Draw!";
        } else if (result == "computer_wins") {
            // console.log(`You lose! ${computer_choice} beats ${human_choice}`);
            roundResult.textContent = `You lose! ${computer_choice.charAt(0).toUpperCase()}${computer_choice.slice(1)} beats ${human_choice}!`
            computer_score++;
        } else {
            // console.log(`You win! ${human_choice} beats ${computer_choice}`);
            roundResult.textContent = `You win! ${human_choice.charAt(0).toUpperCase()}${human_choice.slice(1)} beats ${computer_choice}!`
            human_score++;
        }
        results.textContent = `You: ${human_score} Computer: ${computer_score}`
        console.log(`Human: ${human_score} Computer: ${computer_score}`)

        if (human_score == 5) {
            finalResult.textContent = "You win!"
            buttons.forEach((button) => {
                button.style.display = "none";
            
            });
            playAgain.style.display = "block";
        } else if (computer_score == 5) {
            finalResult.textContent = "The computer wins!";
            buttons.forEach((button) => {
                button.style.display = "none";
            });
            playAgain.style.display = "block";
        } else {
            finalResult.textContent = "First to five wins!";
        }
        
}







function playGame() {
    
        
        const computer_choice = getComputerChoice();
        
        
        const result = playRound(human_choice, computer_choice);
        declareResult(result, computer_choice);
    
}

const playAgain = document.querySelector("#play-again");
const buttons = document.querySelectorAll("button:not(#play-again)");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame();
    });
});

function pressPlayAgain() {
    human_score = 0;
    computer_score = 0;
    buttons.forEach((button) => {
        button.style.display = "inline-block";
    });
    playAgain.style.display = "none";
    roundResult.textContent = "";
    results.textContent = "";
    finalResult.textContent = "";
}

playAgain.addEventListener("click", pressPlayAgain);




