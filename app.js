// Function that creates the Computers choice at random
function computerPlay() {
  const result = Math.random();

  if (result <= 0.33) {
    return("Rock");
  } else if (result >= 0.34 && result <= 0.66) {
    return("Paper"); 
  } else if (result >= 0.67) {
    return("Scissors");
  }
}

// Function that runs computerPlay() and then creates a players choice and compares the two
function playRound(playerSelection, computerSelection) {
  let choice = prompt("Rock, Paper, or Scissors?");
  computerSelection = computerPlay();
  playerSelection = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

  console.log("Player chose: " + playerSelection + " | " + "Computer chose: " + computerSelection);

  if (playerSelection == "Rock" && computerSelection == "Rock") {
    return("Draw!");
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return("You lose! Rock gets covered by Paper!");
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return("You win! Rock smashes Scissors!");
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return("You win! Paper covers Rock!");
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    return("Draw!");
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return("You lose! Paper gets cut by Scissors!");
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return("You lose! Scissors get smashes by Rock!");
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return("You win! Scissors cut Paper!");
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    return("Draw!");
  } else {
    alert('Please enter a valid choice. ("Rock", "Paper", or "Scissors")')
    return playRound();
  }
  
}