function randomNumberGenerator() {
  return Math.floor(Math.random() * 101); // Generate random number between 0 and 100
}

function playGame() {
  const hiddenNumber = randomNumberGenerator();
  let attemptsLeft = 3;
  let gameOver = false;

  while (attemptsLeft > 0 && !gameOver) {
    const guess = parseInt(prompt(`Guess a number between 0 and 100 (Attempts left: ${attemptsLeft}):`));

    if (isNaN(guess)) {
      alert("Please enter a valid number.");
      continue; // Skip to the next iteration if input is not a number
    }

    if (guess === hiddenNumber) {
      congratulatePlayer();
      gameOver = true;
      break;
    } else if (guess > hiddenNumber) {
      attemptsLeft--;
      alert("Oops! Too high. Try again.");
    } else {
      attemptsLeft--;
      alert("Nope! Too low. Give it another shot.");
    }
  }

  if (!gameOver) {
    revealNumber(hiddenNumber);
  }
}

function congratulatePlayer() {
  const congratsMessages = [
    "Wow! You guessed it! Are you psychic or something?",
    "Congratulations! You cracked the code. ",
    "Finally! You got it after all that brain power usage. ",
    "Impressive! You aced the guessing game!",
    "Nailed it! You're a natural at this guessing thing.",
  ];
  const randomIndex = Math.floor(Math.random() * congratsMessages.length);
  alert(congratsMessages[randomIndex]);
}

function revealNumber(number) {
  const sarcasticMessages = [
    "Took you long enough. The number was " + number + ".",
    "Better luck next time. The number was " + number + ".",
    "Maybe you should stick to easier games. The number was " + number + ".",
    "Wow, that was a struggle. The answer was " + number + ".",
    "Don't worry, practice makes perfect. The number was " + number + ".",
  ];
  const randomIndex = Math.floor(Math.random() * sarcasticMessages.length);
  alert(sarcasticMessages[randomIndex]);
}

playGame();