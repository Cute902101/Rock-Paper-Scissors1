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

    if(humanInput === "paper"){
      if(computerInput === "rock"){
        return("Player Wins!");
      }
      else{
        return("Computer Wins!");
      }
    }

    if(humanInput === "scissors"){
      if(computerInput === "paper"){
        return("Player Wins!");
      }
      else{
        return("Computer Wins!");
      }
    }
    
}

//Function to play a round of Rock Paper Scissors
let playRound = () => {
  playerInput = playerChoice();
  computerInput = getComputerChoice();
  console.log(compareInputs(playerInput, computerInput));
}

//Add 5 rounds to the playRound function 
let playGame = () =>{
computerScore = 0
playerScore = 0
  for(i = 0; i < 5; i++){
     playRound();
  if("Player Wins!"){
      playerScore++;
      if("Computer Wins!"){
        computerScore++;
      }
    }

    if(computerScore > playerScore){
      alert("Sorry, Computer Wins!");
      if(playerScore > computerScore){
        alert("Congratulations! You Win!");
      }
      else{
        alert("TIE GAME!")
      }
    } 
  }
   
}
playGame();
 