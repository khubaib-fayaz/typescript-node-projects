#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const systemGeneratedNo = Math.floor(Math.random() * 10);
const chalK = chalk.bgGreen('Welcome to Number Guess');
console.log(chalK);
async function Guess_Game() {
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Write your guess b/w 1 to 10: "
        }
    ]);
    const { userGuess } = answers;
    console.log(userGuess, "userGuess", systemGeneratedNo, 'SYs');
    if (userGuess === systemGeneratedNo) {
        console.log("Yeaaaa Your answer is correct \n You Win!");
    }
    else {
        console.log("Please try again Better luck next time!");
    }
}
Guess_Game();
