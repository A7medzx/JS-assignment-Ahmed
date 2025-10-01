while (true) {
  let op = window.prompt("Enter the operator (+, -, /, *)");

  if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
    console.log("You entered an Invalid Operator: ", op);
    alert("You entered an Invalid Operator: " + op);
  } else {
    let num1 = parseFloat(window.prompt("Enter the first number"));
    let num2 = parseFloat(window.prompt("Enter the second number"));
    let calc;

    if (isNaN(num1) || isNaN(num2)) {
      alert("Invalid number input.");
    } else {
      if (op === "+") {
        calc = num1 + num2;
        console.log("The number of characters in this sentence: ", calc);
        alert("The number of characters in this sentence: " + calc);
      } else if (op === "-") {
        calc = num1 - num2;
        console.log("The number of characters in this sentence: ", calc);
        alert("The number of characters in this sentence: " + calc);
      } else if (op === "*") {
        calc = num1 * num2;
        console.log("The number of characters in this sentence: ", calc);
        alert("The number of characters in this sentence: " + calc);
      } else if (op === "/") {
        if (num2 === "0") {
          console.log("Invalid");
          alert("Invalid");
        } else {
          calc = num1 / num2;
          console.log("The number of characters in this sentence: ", calc);
          alert("The number of characters in this sentence: " + calc);
        }
      } else {
        console.log("You entered an Invalid Operator: ", op);
        alert("You entered an Invalid Operator: " + op);
      }
    }
  }
}
