let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let roundResult;
const resultBox = document.querySelector('.round-result');
const winBox = document.querySelector('.win');
const playBtn = document.querySelector('.play-btn');
const playAgainBtn = document.querySelector('.play-again-btn');
const allButtons = document.querySelectorAll('button');
const rpsButtons = document.querySelectorAll('.rps-btn');

playBtn.addEventListener('click', () => {
  hiddenToggle(playBtn);
  hiddenToggle(rpsButtons);
  resultBox.textContent = 'Choose your weapon!';
});

playAgainBtn.addEventListener('click', () => {
  hiddenToggle(playAgainBtn);
  clickedReset();
  reset();
  resultBox.textContent = 'Choose your weapon!';
});

function hiddenToggle(group) {
  if (group.length > 1) {
    group.forEach((e) => {
      e.classList.toggle('hidden');
    });
  } else {
    group.classList.toggle('hidden');
  }
}

// ROCK EVENT LISTENER
const pickRock = document.querySelector('.player-rock');
pickRock.addEventListener('click', () => {
  clickedReset();
  playerChoice('Rock');
  pickRock.classList.add('clicked');
});
// PAPER EVEN LISTENER
const pickPaper = document.querySelector('.player-paper');
pickPaper.addEventListener('click', () => {
  clickedReset();
  playerChoice('Paper');
  pickPaper.classList.add('clicked');
});
// SCISSORS EVENT LISTENER
const pickScissors = document.querySelector('.player-scissors');
pickScissors.addEventListener('click', () => {
  clickedReset();
  playerChoice('Scissors');
  pickScissors.classList.add('clicked');
});

// Function that creates the Computers choice at random
function computerChoice() {
  const result = Math.random();
  const npcRock = document.querySelector('.computer-rock');
  const npcPaper = document.querySelector('.computer-paper');
  const npcScissors = document.querySelector('.computer-scissors');

  if (result <= 0.33) {
    npcRock.classList.add('clicked');
    return 'Rock';
  } else if (result <= 0.66) {
    npcPaper.classList.add('clicked');
    return 'Paper';
  } else {
    npcScissors.classList.add('clicked');
    return 'Scissors';
  }
}

function playerChoice(playerInput) {
  playerSelection = playerInput;
  computerSelection = computerChoice();
  playRound(playerSelection, computerSelection);
}

// Function that runs computerPlay() and then creates a computers choice and compares the two
function playRound(playerSelection, computerSelection) {
  roundNumber++;
  // console.log(`Player chose: ${playerSelection} | Computer chose: ${computerSelection}`);
  // Error & Draw check
  if (playerSelection === computerSelection) {
    roundResult = 'Draw!';
  }
  // Player selects Rock
  if (playerSelection == 'Rock') {
    if (computerSelection == 'Paper') {
      computerScore++;
      roundResult = 'You lose! Rock gets covered by Paper!';
    } else if (computerSelection == 'Scissors') {
      playerScore++;
      roundResult = 'You win! Rock smashes Scissors!';
    }
  }
  // Player selects Paper
  if (playerSelection == 'Paper') {
    if (computerSelection == 'Scissors') {
      computerScore++;
      roundResult = 'You lose! Paper gets cut by Scissors!';
    } else if (computerSelection == 'Rock') {
      playerScore++;
      roundResult = 'You win! Paper covers Rock!';
    }
  }
  // Player selects Scissors
  if (playerSelection == 'Scissors') {
    if (computerSelection == 'Rock') {
      computerScore++;
      roundResult = 'You lose! Scissors get smashed by Rock!';
    } else if (computerSelection == 'Paper') {
      playerScore++;
      roundResult = 'You win! Scissors cut Paper!';
    }
  }
  resultBox.textContent = roundResult;
  winCheck();
}

function winCheck() {
  if (roundNumber === 5) {
    if (playerScore > computerScore) {
      winBox.textContent = `Congratulations! You won ${playerScore} to ${computerScore}.`;
      playAgain();
    } else if (computerScore > playerScore) {
      winBox.textContent = `Sorry, it looks like you lost ${playerScore} to ${computerScore}.`;
      playAgain();
    } else {
      winBox.textContent = `Looks like it was a draw! ${playerScore} to ${computerScore}.`;
      playAgain();
    }
  }
}

function clickedReset() {
  allButtons.forEach((e) => {
    e.classList.remove('clicked');
  });
}

function playAgain() {
  playAgainBtn.classList.toggle('hidden');
}

function reset() {
  roundNumber = 0;
  playerScore = 0;
  computerScore = 0;
  resultBox.textContent = '';
  winBox.textContent = '';
}
