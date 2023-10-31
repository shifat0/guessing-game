let form = document.querySelector("#form");
let chance = document.querySelector("#chance");

form.addEventListener("submit", handleGuess);

let min = 0;
let max = 20;
let ans = Math.floor(Math.random() * (max - min) + min);

document.querySelector("#input").min = min;
document.querySelector("#input").max = max;

let initialChance = 3;
chance.innerText = initialChance;

function handleGuess(e) {
  e.preventDefault();
  let input = document.querySelector("#input");
  let guessBtn = document.querySelector("#guess-btn");
  let help = document.querySelector("#help");
  let hint = document.querySelector("#hint");

  if (input.value === "") alert("Please guess a number");
  else {
    if (+input.value === ans) {
      help.innerText = "Congratulations!";
      initialChance -= 1;
      chance.innerText = initialChance;
      guessBtn.disabled = true;
      guessBtn.style.cursor = "not-allowed";
      input.disabled = true;
      input.style.cursor = "not-allowed";
      setTimeout(() => alert("Yahoo! You won the guessing game"), 500);
    } else {
      +input.value < ans
        ? (hint.innerText = "greater than")
        : (hint.innerText = "less than");
      initialChance -= 1;
      chance.innerText = initialChance;
      setTimeout(() => (help.style.visibility = "visible"), 100);
      if (initialChance === 0) {
        guessBtn.disabled = true;
        guessBtn.style.cursor = "not-allowed";
        input.disabled = true;
        input.style.cursor = "not-allowed";
        setTimeout(() => alert("You lose! Try again"), 500);
      }
    }
  }
}
