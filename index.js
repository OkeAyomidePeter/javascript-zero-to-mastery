// Import the built-in readline module
const readline = require("readline");

console.log("Simple calculator");
console.log("Enter a number, choose an operand, then enter another number");

// Create the input interface
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for the first number
input.question("Enter a number: ", (firstNumber) => {
  // Convert the input to a number
  firstNumber = parseFloat(firstNumber);

  // Ask for the operand
  input.question("Enter an operand [+,-,*,/,%]: ", (operand) => {
    // Remove surrounding whitespace
    operand = operand.trim();

    // Ask for the second number
    input.question("Enter a number: ", (secondNumber) => {
      // Convert again
      secondNumber = parseFloat(secondNumber);

      // Perform the calculation
      calculate(firstNumber, operand, secondNumber);

      // Close the input stream
      input.close();
    });
  });
});

// Define the calculation function
function calculate(firstNumber, operand, secondNumber) {
  // Check division by zero cases first
  if ((operand === "/" || operand === "%") && secondNumber === 0) {
    console.log("Zero division error. Denominator cannot be zero");
    return;
  }

  let result;

  // Check which operand was used
  if (operand === "+") {
    result = firstNumber + secondNumber;
  } else if (operand === "-") {
    result = firstNumber - secondNumber;
  } else if (operand === "*") {
    result = firstNumber * secondNumber;
  } else if (operand === "/") {
    result = firstNumber / secondNumber;
  } else if (operand === "%") {
    result = firstNumber % secondNumber;
  } else {
    console.log("Invalid operand");
    return;
  }

  // Output the result
  console.log("Result:", result);
}
