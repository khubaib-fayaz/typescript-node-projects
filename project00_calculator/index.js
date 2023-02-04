#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.rgb(123, 45, 67).underline("welcome to khubaib calculator!"));
async function Calculator() {
    const calculator = await inquirer.prompt([
        {
            type: "number",
            name: "firstNumber",
            message: "Enter your First number",
        },
        {
            type: "number",
            name: "secondNumber",
            message: "Enter your Secound number",
        },
        {
            type: "list",
            name: "operator",
            choices: ["+", "-", "*", "/"],
            message: "Which method do u like ?",
        },
    ]);
    const { firstNumber, secondNumber, operator } = calculator;
    console.log(calculator);
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            console.log(`${firstNumber} + ${secondNumber} = ${result}`);
            break;
        case "-":
            result = firstNumber - secondNumber;
            console.log(`${firstNumber} - ${secondNumber} = ${result}`);
            break;
        case "*":
            result = firstNumber * secondNumber;
            console.log(`${firstNumber} * ${secondNumber} = ${result}`);
            break;
        case "/":
            result = firstNumber / secondNumber;
            console.log(`${firstNumber} / ${secondNumber} = ${result}`);
            break;
        default:
            console.log("Invalid operator");
            break;
    }
}
Calculator();
