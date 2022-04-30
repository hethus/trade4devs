import enquirer from "enquirer";
const { prompt } = enquirer;
import chalk from 'chalk';
console.clear();

function calc(first, operador, second){
    first = parseFloat(first);
    second = parseFloat(second);

    switch(operador){
        case "+":
            console.log(chalk.hex('#FA7610')(`O resultado da operação de soma é: ${chalk.red(first + second)}`));
            break;
        case "-":
            console.log(chalk.hex('#FA7610')(`O resultado da operação de subtração é: ${chalk.red(first - second)}`));
            break;
        case "*":
            console.log(chalk.hex('#FA7610')(`O resultado da operação de multiplicação é: ${chalk.red(first * second)}`));
            break;
        case "/":
            console.log(chalk.hex('#FA7610')(`O resultado da operação de divisão é: ${chalk.red(first / second)}`));
            break;
    }
};

let first = await prompt({
    type: 'input',
    name: 'numero',
    message: chalk.cyan('Primeiro valor: '),
    validate: (value) => {
        if (value != " " && !isNaN(value) && value != "") {
          return true;
        }
        return "Digite um número válido!";
      }
});

let math = await prompt([
    {
      type: "select",
      name: "operacao",
      message: chalk.cyan(`Qual operação deseja realizar?`),
      initial: 0,
      choices: [
        { name: "+", message: `${chalk.red("Soma")}` },
        { name: "-", message: `${chalk.green("Subtração")}` },
        { name: "*", message: `${chalk.blue("Multiplicação")}` },
        { name: "/", message: `${chalk.yellow("Divisão")}` }
      ],
    },
]);

let second = await prompt({
    type: 'input',
    name: 'numero',
    message: chalk.cyan('Segundo valor: '),
    validate: (value) => {
        if (value != " " && !isNaN(value) && value != "") {
          return true;
        }
        return "Digite um número válido!";
      }
});

calc(first.numero, math.operacao, second.numero );