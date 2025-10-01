let age = window.prompt("Enter your Age Please");

if (age < 13) {
  console.log("Child");
  alert("Child");
} else if (13 <= age && age <= 19) {
  console.log("Teenage");
  alert("Teenage");
} else if (20 <= age) {
  console.log("Adult");
  alert("Adult");
}
