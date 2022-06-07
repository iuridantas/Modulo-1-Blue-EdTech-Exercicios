/*Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.*/

const prompt = require('prompt-sync')();
while (true) {
    console.clear();

    let num1 = +prompt(`Digite um numero: `);

    if (num1% 2 == 0) {
        console.log(`Numero par`);
    } else{
        continue;
    }
    break;
}