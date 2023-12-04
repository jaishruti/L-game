const gameInfo = document.querySelector(".game-info");
const newBtn = document.querySelector(".new-game-btn");
const boxes = document.querySelectorAll(".box");

let currentPlayer;
let gameGrid;
const win = [
  [1, 2, 3, 4],
  [1, 2, 3, 6],
  [1, 4, 7, 8],
  [1, 4, 2, 7],
  [3, 6, 9, 2],
  [3, 6, 9, 2],
  [7, 8, 9, 4],
  [7, 8, 9, 6],
  [4, 5, 6, 9],
  [4, 5, 6, 3],
  [4, 5, 6, 7],
  [4, 5, 6, 2],
];

function init() {
  currentPlayer = "A";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  gameInfo.innerHTML = `Current player - ${currentPlayer}`;

  //new game button initially not visible
  newBtn.classList.remove("active");

  //UI change
  boxes.forEach((index) => {
    boxes[index].style.pointerEvents = "all";
    boxes[index].innerText = "";
  });
}

init();
