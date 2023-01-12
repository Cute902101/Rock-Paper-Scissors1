//Computer Choice Function 
let getComputerChoice = () => {
  let randomNumber =  Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0: 
      return "rock";
    case 1: 
      return "paper";
    case 2: 
      return "scissors";
  }  
}

// Function to call Player Choice
let playerChoice = (playerInput) => 
{
  playerInput = prompt("Rock, Paper, or Scissors").toLowerCase();
  if (playerInput === "rock" ||
      playerInput === "paper" ||
      playerInput === "scissors"){
        return playerInput;
      }
  else {
    return ("ERROR, try 'Rock', 'Paper', or 'Scissors' ");
  }
}

// Determine winner of combined inputs
let compareInputs = (humanInput, computerInput) => {
    if(humanInput === computerInput){
      return("TIE");
    }
    if(humanInput === "rock"){
      if(computerInput === "scissors"){
        return("Player Wins!");
      }
      else{
        return("Computer Wins!");
      }
    } 
    
}
console.log(compareInputs());