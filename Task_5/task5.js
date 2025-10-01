/* for (let i = 0; i < 8; i++) {
    for (let j = 0; j < i; j++) {
      console.log("#");
    }
    console.log('\n');
} */

for (let i = 0; i <= 7; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += "#";
  }
  console.log(line);
}
