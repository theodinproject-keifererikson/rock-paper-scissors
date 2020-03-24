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

  if (playerSelection !== "Rock" && "Paper" && "Scissors") {
    alert('Please enter a valid choice. ("Rock", "Paper", or "Scissors")')
    return playRound();
  } else if (playerSelection === computerSelection) {
    return("Draw!");
  } 
  // Player selects Rock
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      return("You lose! Rock gets covered by Paper!");
    } else {
      return("You win! Rock smashes Scissors!");
    }
  }
  // Player selects Paper
  if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      return("You lose! Paper gets cut by Scissors!");
    } else {
      return("You win! Paper covers Rock!");
    }
  }
  // Player selects Scissors
  if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      return("You lose! Scissors get smashed by Rock!");
    } else {
      return("You win! Scissors cut Paper!");
    }
  }

}