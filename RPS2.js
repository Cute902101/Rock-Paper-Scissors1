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
  console.log(getComputerChoice());

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
console.log(playerChoice("`${playerInput}`"));
console.log(playerChoice("uhh"));