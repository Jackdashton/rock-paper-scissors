console.log("Connected");

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

// 3 Variables to store choices

let player;
let computer;
let result;


choiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    // Set player equal to button we select
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  });
});

function computerTurn() {
  const randNumber = Math.floor(Math.random() * 3) + 1;

  switch (randNumber) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function checkWinner() {
  if (player === computer) {
    return "Draw"
  } else if (computer === "Rock") {
    return (player == "Paper") ? "You win!" : "You lose!"
  } else if (computer === "Paper") {
    return (player == "Scissors") ? "You win!" : "You lose!"
  } else if (computer === "Scissors") {
    return (player == "Rock") ? "You win!" : "You lose!"
  }
};
