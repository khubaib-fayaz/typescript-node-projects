#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";




console.log(chalk.bgYellowBright('WELCOME TO MY QUIZ GAME'));

const questions = [
  {
    type: "input",
    name: "capitalOfFrance",
    message: "What is the capital of France?",
    validate: (input: string) => input.toLowerCase() === "paris"
  },
  {
    type: "input",
    name: "capitalOfItaly",
    message: "What is the capital of Italy?",
    validate: (input: string) => input.toLowerCase() === "rome"
  },
  {
    type: "input",
    name: "capitalOfSpain",
    message: "What is the capital of Spain?",
    validate: (input: string) => input.toLowerCase() === "madrid"
  }
];


  const answers = await inquirer.prompt(questions);

  let score = 10;
  for (const key in answers) {
    if (answers[key] === true) {
      score++;
    }
  }

  console.log(`You got ${score} out of ${questions.length} questions correct!`);
