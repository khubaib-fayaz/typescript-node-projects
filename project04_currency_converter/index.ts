#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const currency = {
  PKR: {
    USD: 231.37,
    PKR: 1,
    EUR: 251.59,
  },
  USD: {
    USD: 1,
    PKR: 231.37,
    EUR: 0.92,
  },
  EUR: {
    USD: 1.09,
    PKR: 251.46,
    EUR: 1,
  },
};

console.log(chalk.rgb(123, 45, 67).underline('welcome to khubaib calculator!'));

const CurrencyMaker: {
  // CURRENCY: string;
  CURRENCY: "PKR" | "USD" | "EUR";
  CONVERTOR: "PKR" | "USD" | "EUR";
  AMOUNT: number;
} = await inquirer.prompt([
  {
    type: "list",
    name: "CURRENCY",
    choices: ["PKR", "USD", "EUR"],
    message: "Select your Currency?",
  },
  {
    type: "list",
    name: "CONVERTOR",
    choices: ["PKR", "USD", "EUR"],
    message: "Which Currency like to Convert?",
  },
  {
    type: "number",
    name: "AMOUNT",
    message: "Enter your Converting  amount ?",
  },
]);
const { CURRENCY, CONVERTOR, AMOUNT } = CurrencyMaker;
if (CURRENCY && CONVERTOR && AMOUNT) {
  var result = currency[CURRENCY][CONVERTOR] * AMOUNT;
  console.log(`Your converting from ${CURRENCY} to ${CONVERTOR} is ${result} `)
} else{
  console.log('invalid inputs ')
}
