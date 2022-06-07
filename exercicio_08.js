/*Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" 
ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.*/

const prompt = require('prompt-sync')();
console.clear();

let num1 = parseInt(+prompt(`Digite o primeiro numero: `));
let num2 = parseInt(+prompt(`Digite o segundo numero: `));

multi1 = num1 % num2;
multi2 = num2 % num1;

if (multi1 == 0) {
    console.log(`Os numeros são multiplos.`);
} else if (multi2 == 0) {
    console.log(`Os numeros são multiplos.`);
} else {
    console.log(`Os numeros não são multiplos.`);
}
