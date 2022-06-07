/*Faça um programa que leia um número, e informe se ele é par ou impar*/

const prompt = require('prompt-sync')();
console.clear();

let num1 = +prompt(`Digite um numero: `);

console.log();
if (num1 % 2 == 0) {
    console.log(`O numero ${num1} é um numero par!`);
} else {
    console.log(`O numero ${num1} é um numero impar!`);
}
