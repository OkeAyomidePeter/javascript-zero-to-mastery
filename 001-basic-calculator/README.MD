````md
# Beginner Notes: Simple Calculator in Node.js

This file serves as a notebook-style explanation of how this simple calculator works. The goal is to help beginners understand each part of the code and why it exists.

---

## What This Program Does

This program:
- Accepts two numbers from a user
- Asks for an operand (`+`, `-`, `*`, `/`, `%`)
- Performs the calculation
- Displays the result in the terminal

It runs inside Node.js using the built-in `readline` module.

---

## Importing the Readline Module

```js
const readline = require("readline");
````

`readline` is a built-in Node module that lets us collect input from the terminal. No installation required.

---

## Instructions for the User

```js
console.log("Simple calculator");
console.log("Enter a number, choose an operand, then enter another number");
```

These messages tell the user what to do.

---

## Creating the Input Interface

```js
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

* `process.stdin` reads text typed into the terminal.
* `process.stdout` prints output to the terminal.

This sets up a communication channel between the user and the program.

---

## Asking for the First Number

```js
input.question("Enter a number: ", (firstNumber) => {
```

`input.question` displays a prompt then waits for user input. The entered value arrives inside the callback function.

```js
firstNumber = parseFloat(firstNumber);
```

User input arrives as text. `parseFloat` converts it into a number.

---

## Asking for the Operand

```js
input.question("Enter an operand [+,-,*,/,%]: ", (operand) => {
```

The user chooses which operation to perform.

```js
operand = operand.trim();
```

`trim()` removes accidental whitespace like spaces or newlines.

---

## Asking for the Second Number

```js
input.question("Enter a number: ", (secondNumber) => {
  secondNumber = parseFloat(secondNumber);
```

Same logic as the first input. Convert the text into a number.

---

## Running the Calculation Function

```js
calculate(firstNumber, operand, secondNumber);
input.close();
```

We send all three values into a separate function. `input.close()` stops waiting for more input.

---

## The Calculate Function

```js
function calculate(firstNumber, operand, secondNumber) {
```

Encapsulates the math logic.

---

### Checking for Zero Division

```js
if ((operand === "/" || operand === "%") && secondNumber === 0) {
  console.log("Zero division error. Denominator cannot be zero");
  return;
}
```

Division or modulo by zero is not allowed, so we stop early.

---

### Choosing the Operation

A `let` variable stores the result.

```js
let result;
```

We check which operand was used:

```js
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
```

Each condition assigns a different mathematical operation.

---

### Displaying the Result

```js
console.log("Result:", result);
```

This prints the final output.

---

## Important Concepts Learned

* Using Node's built-in modules
* Collecting user input in the terminal
* Converting strings into numbers
* Trimming whitespace
* Handling errors like division by zero
* Writing clean, readable logic
* Separating behavior into functions

