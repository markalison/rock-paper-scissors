human_score = 0;
computer_score = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random()*3)+1;
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
    return computer_choice
}

function getHumanChoice() {
    let human_string = prompt("Rock, Paper, Scissors Shoot!");
    human_string = human_string.toLowerCase();
    switch(human_string) {
        case "rock":
            human_choice = "rock";
            break;
        case "paper":
            human_choice = "paper";
            break;
        case "scissors":
            human_choice = "scissors";
            break;
    }
    console.log(`You chose: ${human_choice}`)
    return human_choice;
}

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

function keepScore(result) {
    if (result == "draw") {
        console.log("Draw!")
    } else if (result == "computer_wins") {
        console.log(`You lose! ${computer_choice} beats ${human_choice}`);
        computer_score++;
    } else {
        console.log(`You win! ${human_choice} beats ${computer_choice}`);
        human_score++;
    }
    console.log(`Human: ${human_score} Computer: ${computer_score}`)
}


function playGame() {
    for (let i = 1; i <= 5; i++) {
        const human_choice = getHumanChoice();
        const computer_choice = getComputerChoice();
        
        
        const result = playRound(human_choice, computer_choice);
        keepScore(result);
    }
}

playGame();





