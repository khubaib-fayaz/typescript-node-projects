#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const adventurer = {
    name: "",
    location: "a mysterious forest ,Cave ,Mountain",
};
console.log(chalk.rgb(123, 45, 67).underline("WELCOME TO ADVANTURE GAME!"));
const game = async () => {
    console.log(` You find yourself in ${adventurer.location}.`);
    // Get adventurer's name
    const nameResponse = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
    ]);
    adventurer.name = nameResponse.name;
    // Choose the next step
    const nextStepResponse = await inquirer.prompt([
        {
            type: "list",
            name: "nextStep",
            message: "What would you like to do next?",
            choices: [
                "Explore the forest",
                "Explore the cave",
                "Explore the Mountain",
                "Go back home",
                "Quit the game",
            ],
        },
    ]);
    switch (nextStepResponse.nextStep) {
        case "Explore the forest":
            console.log("You start exploring the forest.");
            break;
        case "Explore the Cave":
            console.log("You start exploring the Cave..");
            break;
        case "Explore the Mountain":
            console.log("You start exploring the Mountain..");
            break;
        case "Go back home":
            console.log("You go back home.");
            break;
        case "Quit the game":
            console.log("Thanks for playing!");
            process.exit(0);
    }
};
game();
