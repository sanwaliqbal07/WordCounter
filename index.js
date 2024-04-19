#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your sentence To Count The Words"
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence Word count is ${words.length}`);
