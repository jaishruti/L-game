const gameInfo = document.querySelector(".game-info");
const newBtn = document.querySelector(".new-game-btn");
const boxes = document.querySelectorAll(".box");

let currentPlayer;
let gameGrid;
const win = [
  [0, 1, 2, 3],
  [0, 1, 2, 5],
  [0, 3, 1, 6],
  [0, 3, 1, 6],
  [2, 5, 8, 2],
  [2, 5, 8, 1],
  [6, 7, 8, 3],
  [6, 7, 8, 5],
  [3, 4, 5, 8],
  [3, 4, 5, 2],
  [3, 4, 5, 6],
  [3, 4, 5, 0],
  [0, 3, 6, 7],
  [0, 3, 6, 1],
  [2, 5, 8, 7],
  [2, 5, 8, 1],
  [1, 4, 7, 0],
  [1, 4, 7, 8],
  [1, 4, 7, 0],
  [1, 4, 7, 2],
  [1, 4, 7, 6],
];

function checkForWinner() {
  win.forEach((pos) => {
    if (
      gameGrid[pos[0]] &&
      gameGrid[pos[1]] &&
      gameGrid[pos[2]] &&
      gameGrid[pos[3]]
    ) {
      if (
        gameGrid[pos[1]] === gameGrid[pos[0]] &&
        gameGrid[pos[2]] === gameGrid[pos[1]] &&
        gameGrid[pos[3]] === gameGrid[pos[2]]
      ) {
        //game-info ko change "winner"
        gameInfo.innerHTML = `Winner player - ${gameGrid[pos[0]]}`;

        //make win position green
        boxes[pos[0]].classList.add("win");
        boxes[pos[1]].classList.add("win");
        boxes[pos[2]].classList.add("win");
        boxes[pos[3]].classList.add("win");

        //winner found make box unclickable
        boxes.forEach((box) => {
          box.style.pointerEvents = "none";
        });

        // make new game button visible
        newBtn.classList.add("active");
        gameInfo.classList.add("win");

        //aur tie check nahi krna
        return;
      }
    }

    //also check tie to nhi

    let flag = 0;
    gameGrid.forEach((index) => {
      if (index === "") flag = 1;
    });

    //tie hai
    if (flag === 0) {
      gameInfo.innerText = `Oops Game tied!`;
      newBtn.classList.add("active");
      gameInfo.classList.add("win");
    }
    // console.log(gameGrid);
  });
}

function init() {
  currentPlayer = "A";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  gameInfo.innerHTML = `Current player - ${currentPlayer}`;

  gameInfo.classList.remove("win");

  //new game button initially not visible
  newBtn.classList.remove("active");

  //UI change
  boxes.forEach((box) => {
    box.style.pointerEvents = "all";
    box.innerText = "";

    //after win remove green color
    box.classList.remove("win");
  });

  //adding event listener

  boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      handleClick(index);
    });
  });
}

function handleClick(index) {
  if (gameGrid[index] === "") {
    boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;

    //ab aur change nhi kar sakte (unclickable banao)
    boxes[index].style.pointerEvents = "none";

    //ab player 2/1 ka turn (swap)
    currentPlayer = currentPlayer === "A" ? "B" : "A";
    gameInfo.innerText = `Current player - ${currentPlayer}`;

    //check karo kahi win toh nahi
    checkForWinner();
  }
}
newBtn.addEventListener("click", init);
init();
