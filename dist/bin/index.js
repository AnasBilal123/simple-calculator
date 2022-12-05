#! /usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import { addNumbers, devideNumbers, multiplyNumbers, powerOfNumber, subtractNumbers } from './module/calculator.js';
async function stopAnimation() {
    return new Promise((res, rej) => {
        setTimeout(res, 1000);
    });
}
async function welcomeOnBoard() {
    let heading = chalkAnimation.rainbow('---------------------------- Welcome to my Calculator ---------------------------');
    await stopAnimation();
    heading.stop();
}
async function startAgain() {
    let check;
    do {
        let result = await askQuestions();
        check = await inquirer.prompt({
            type: "input", name: "checkInput", message: "Do you want to perform again?\n Press (y/Y for yes and n/N for No)"
        });
    } while (check.checkInput == 'y' || check.checkInput == 'Y');
}
async function askQuestions() {
    let result = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Please select one of the given operators",
            choices: ["Addition(+)", "Subtraction(-)", "Multiplication(*)", "Division(/)", "Power(**)"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter the first value: ",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the second value: ",
        },
    ]);
    const { operator, num1, num2 } = result;
    if (isNaN(num1) || isNaN(num2)) {
        console.log(chalk.red('Your Inputs are incorrect!\n'));
    }
    else {
        if (operator.toString().includes('+'))
            console.log(chalk.green('The Sum of ' + num1 + ' + ' + num2 + ' = ' + addNumbers(num1, num2)));
        else if (operator.toString().includes('-'))
            console.log(chalk.green('The Subtraction of ' + num1 + ' - ' + num2 + ' = ' + subtractNumbers(num1, num2)));
        else if (operator.toString().includes('Power'))
            console.log(chalk.green('The power of ' + num1 + ' with ' + num2 + ' = ' + powerOfNumber(num1, num2)));
        else if (operator.toString().includes('*'))
            console.log(chalk.green('The Multiplication of ' + num1 + ' * ' + num2 + ' = ' + multiplyNumbers(num1, num2)));
        else if (operator.toString().includes('/'))
            console.log(chalk.green('The Division of ' + num1 + ' / ' + num2 + ' = ' + devideNumbers(num1, num2)));
    }
}
await welcomeOnBoard();
await startAgain();
