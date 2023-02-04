#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
console.log(chalk.bgGreen('WELOCOME TO COUNTDOWN TIMER'));
inquirer.prompt([
    {
        type: 'input',
        name: 'duration',
        message: 'Enter the duration for the countdown in seconds:',
        validate: (input) => {
            const value = parseInt(input);
            if (!value || value <= 0) {
                return 'Please enter a valid number greater than 0.';
            }
            return true;
        },
    },
]).then((answers) => {
    const duration = parseInt(answers.duration);
    let count = duration;
    const interval = setInterval(() => {
        console.log(count);
        count--;
        if (count < 0) {
            clearInterval(interval);
            console.log('Countdown finished!');
        }
    }, 1000);
});
