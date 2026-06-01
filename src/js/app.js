import goblin from "../img/goblin.png";

const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.append(cell);
}

const img = document.createElement("img");
img.src = goblin;
const allCell = grid.querySelectorAll(".cell");

const move = () => {
  const randomIndex = Math.floor(Math.random() * 16);
  if (Array.from(allCell).indexOf(img.parentNode) === randomIndex) {
    move();
    return;
  }

  allCell[randomIndex].append(img);
};
move();

setInterval(() => {
  move();
}, 1000);

export { move, img, allCell };