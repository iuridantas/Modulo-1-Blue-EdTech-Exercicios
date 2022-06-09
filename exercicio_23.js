/*Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.*/

const prompt = require('prompt-sync')();
console.clear();

let num = +prompt('Digite o número para ver sua tabuada: ');

for (let i = 1; i <= 10; i++){
    console.log(num * i);
}