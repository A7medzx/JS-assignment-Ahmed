const size = window.prompt("Enter the size of the board");
let grid = "";

for (let y = 0; y < size; y++) {
  //col

  for (let x = 0; x < size; x++) {
    //row

    if (y === 0 || y === size - 1 || x === 0 || x === size - 1) {
      grid += "#";
    } else {
      grid += " ";
    }
  }
  grid += "\n";
}

console.log(grid);
