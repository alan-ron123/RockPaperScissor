let container = document.getElementById("container");
let btn = document.querySelectorAll("button");

let p = document.createElement("p");
let div = document.createElement("div");
let newDiv = document.createElement("div");

let playerGame = 0,
  computerGame = 0,
  winner = "First who score Five";

container.appendChild(p);
container.appendChild(div);
container.appendChild(newDiv);

function computerSelection(player) {
  let num;

  num = Math.ceil(Math.random() * 3);
  if (player == num) return;
  else if (player == 1 && num == 2) computerGame += 1;
  else if (player == 1 && num == 2) playerGame += 1;
  else if (player == 2 && num == 1) playerGame += 1;
  else if (player == 2 && num == 3) computerGame += 1;
  else if (player == 3 && num == 1) computerGame += 1;
  else if (player == 3 && num == 2) playerGame += 1;

  div.innerText = `player: ${playerGame}`;
  newDiv.innerText = `Computer: ${computerGame}`;
  p.innerText = `winner: ${winner}`;

  if (playerGame >= 4) {
    winner = "player";
    return;
  }
  if (computerGame >= 4) {
    winner = "computer";
    return;
  }
}

btn[0].addEventListener("click", () => computerSelection(1));
btn[1].addEventListener("click", () => computerSelection(2));
btn[2].addEventListener("click", () => computerSelection(3));
