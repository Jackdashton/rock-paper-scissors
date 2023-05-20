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
        moves += 1;
        movesLeft.innerText = `Moves left: ${10 - moves}`;

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
}

// Decide winner
function winner(computer, player) {
  const result = document.querySelector('.result');
  const playerScoreBoard = document.querySelector('.p-count');
  const computerScoreBoard = document.querySelector('.c-count');
  player = player.toLowerCase();
  computer = computer.toLowerCase();

  if (computer === player){
    result.textContent = "Tie"
  } else if (player === "rock"){
    if(computer === "paper") {
      result.textContent = "Computer Won";
      computerScore =+ 1 ;
      computerScoreBoard.textContent = computerScore;
    } else{
      result.textContent = "Player Won";
      playerScore =+ 1 ;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player === "scissors"){
    if(computer === "rock") {
      result.textContent = "Computer Won";
      computerScore =+ 1 ;
      computerScoreBoard.textContent = computerScore;
    } else{
      result.textContent = "Player Won";
      playerScore =+ 1 ;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player === "paper"){
    if(computer === "scissors") {
      result.textContent = "Computer Won";
      computerScore =+ 1 ;
      computerScoreBoard.textContent = computerScore;
    } else{
      result.textContent = "Player Won";
      playerScore =+ 1 ;
      playerScoreBoard.textContent = playerScore;
    }
  }
};
