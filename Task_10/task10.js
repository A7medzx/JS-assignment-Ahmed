const shape = window.prompt("Choose a shape: \n- Triangle\n- Square");

if (
  shape === "Triangle" ||
  shape === "triangle" ||
  shape === "Square" ||
  shape === "square"
) {
  const rows = parseFloat(window.prompt("Enter Number of Rows"));
  if (isNaN(rows)) {
    alert("Invalid number input.");
  } else {
    if (shape === "Triangle" || shape === "triangle") {
      for (let i = 0; i <= rows; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
          line += "#";
        }
        console.log(line);
      }
    } else if (shape === "Square" || shape === "square") {
      let grid = "";

      for (let y = 0; y < rows; y++) {
        //col

        for (let x = 0; x < rows; x++) {
          //row

          if (y === 0 || y === rows - 1 || x === 0 || x === rows - 1) {
            grid += "#";
          } else {
            grid += " ";
          }
        }
        grid += "\n";
      }
      console.log(grid);
    }
  }
} else {
  alert("Invalid Input.");
}
