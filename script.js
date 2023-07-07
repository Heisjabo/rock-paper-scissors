let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let roundCount = 0;
const roundsPlayedElement = document.querySelector(".game p span");
const playerScoreElement = document.getElementById("player_score");
const computerScoreElement = document.getElementById("computer_score");
const messageElement = document.querySelector(".message");

const options = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * options.length);
  computerSelection = options[random];
};

const updateScores = () => {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    messageElement.textContent = "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    const winningCombination = `${playerSelection} beats ${computerSelection}`;
    messageElement.textContent = `You win! ${winningCombination}`;
    playerScore++;
  } else {
    const winningCombination = `${computerSelection} beats ${playerSelection}`;
    messageElement.textContent = `You lose! ${winningCombination}`;
    computerScore++;
  }

  roundCount++;
  roundsPlayedElement.textContent = roundCount;
  updateScores();

  if (roundCount === 5) {
    if (playerScore > computerScore) {
      messageElement.textContent = "Congratulations! You won the game!";
    } else if (playerScore < computerScore) {
      messageElement.textContent = "Sorry! Computer won the game.";
    } else {
      messageElement.textContent = "It's a tie game!";
    }

    // Reset scores and round count
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    roundsPlayedElement.textContent = roundCount;
    updateScores();
  }
};

rockBtn.addEventListener("click", () => {
  playerSelection = "Rock";
  getComputerChoice();
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", () => {
  playerSelection = "Paper";
  getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissorBtn.addEventListener("click", () => {
  playerSelection = "Scissors";
  getComputerChoice();
  playRound(playerSelection, computerSelection);
});
