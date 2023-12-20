let randomNumber = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const remaining = document.querySelector(".lastResult");
const guessslot = document.querySelector(".guesses");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuessList = [];
let totalGuessCount = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    isValidGuess(guess);
  });
}

function isValidGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid guess");
  } else if (guess < 1 && guess > 100) {
    alert("Please enter guess which is greater than 1 and less than 100");
  } else {
    previousGuessList.push(guess);
    if (totalGuessCount === 11) {
      cleanUp(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      cleanUp(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guesses it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too high`);
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2 class="result">${message}</h2>`;
}

function cleanUp(guess) {
  userInput.value = "";
  guessslot.innerHTML += `${guess}, `;
  totalGuessCount++;
  remaining.innerHTML = `${11 - totalGuessCount}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame" href="#">Click here to Start NewGame</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const Newgame = document.querySelector("#newGame");
  Newgame.addEventListener("click", function (e) {
    randomNumber = Math.round(Math.random() * 100 + 1);
    previousGuessList = [];
    totalGuessCount = 1;
    guessslot.innerHTML = "";
    remaining.innerHTML = `${11 - totalGuessCount}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
