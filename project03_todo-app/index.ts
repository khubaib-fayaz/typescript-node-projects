#!/usr/bin/env node

import inquirer from "inquirer";
var todos: string[] = [];
var loop: boolean = true;

while (loop) {
  var awn: { todo: string; addmore: boolean } = await inquirer.prompt([
    {
      type: "input",
      name: "todo",
      message: "what you want to enter ?",
    },
    {
      type: "confirm",
      name: "addmore",
      message: "do you want to add more?",
      u8hyhn: false,
    },
  ]);

  var { todo, addmore } = awn;
  loop = addmore;
  if (todo) {
    todos.push(todo);
  }
  if (todos.length > 0) {
    for (let i of todos) {
      console.log(i);
    }
  }
  // console.log(awn);
}
