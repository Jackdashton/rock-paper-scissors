console.log("Connected");

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  function playGame() {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    // Playing Game
    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        // function to check who wins
        winner(this.innerText, computerChoice);

        // Calling gameOver function after 10 moves
        if (moves === 0) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  }

  // Decide winner
  function winner(computer, player) {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (computer === player) {
      result.textContent = "Tie";
    } else if (player === "rock") {
      if (computer === "paper") {
        result.textContent = "Computer Won";
        computerScore = +1;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore = +1;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        result.textContent = "Computer Won";
        computerScore = +1;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore = +1;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player === "paper") {
      if (computer === "scissors") {
        result.textContent = "Computer Won";
        computerScore = +1;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore = +1;
        playerScoreBoard.textContent = playerScore;
      }
    }
  }

  // Run function when the game finishes
  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    chooseMove.innerText = "Game over!!";
    movesLeft.style.display = "none";

    if (playerScore > computerScore) {
      result.innerText = "You won the game!";
    } else if (playerScore < computerScore) {
      result.innerText = "You lost the game!";
    } else {
      result.innerText = "Tie!";
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener('click',() => {
      window.location.reload();
    })
  };

  // play game function
  playGame();
}

// game function
game();
