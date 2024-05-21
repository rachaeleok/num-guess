let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDiff = Math.abs(targetGuess - humanGuess);
  const computerDiff = Math.abs(targetGuess - computerGuess);

  if (humanDiff <= computerDiff) {
    return true;
  } else {
    return false;
  }
}

const updateScore = (winnerStr) => {
 if (winnerStr === 'human') {
  humanScore++;
 } else if (winnerStr === 'computer'){
  computerScore++;
 }
}

const advanceRound = () => {
  currentRoundNumber++;
}