const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";

let isGameRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS} ?`,
    ""
  ).toUpperCase();
  // basic validation
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// arrow function
// provides syntactic sugar for single expression to be returned;
const determineWinner = (userChoice, computerChoice) => (
  computerChoice === userChoice
    ? RESULT_DRAW
    : (userChoice === ROCK && computerChoice === SCISSORS) ||
      (userChoice === PAPER && computerChoice === ROCK) ||
      (userChoice === SCISSORS && computerChoice === PAPER)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN
);

startGameBtn.addEventListener("click", () => {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = determineWinner(playerSelection, computerSelection);
  console.log(winner);
});
