#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

var color  = chalk.yellowBright('Welcome to Khubaib Word Counter')
console.log(color)

const Word_Counter :{
    sentences: string
} = await inquirer.prompt([
  {
    name: "sentences",
    type: "input",
    message: "ENTER YOUR SENTENCE TO COUNT THE WORDS",
  },
]);
const result = Word_Counter.sentences.trim().split(' ')

console.log( `Your Sentence word count is ${result.length}` )      