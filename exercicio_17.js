/*Faça um programa que peça um número inteiro e crie arrays com:
Todos os números pares de 0 ao número escolhido;
Todos os números ímpares do 0 ao número escolhido*/

const prompt = require('prompt-sync')();
console.clear();

let arrayPar = [];
let arrayImpar = [];

let numero = +prompt('Digite um número: ');

for (let i = 0; i < numero; i++) {
    if (numero % 2 == 0) {
        arrayPar.push(numero);
    } else {
        arrayImpar.push(numero);
    }
}
console.log();
console.log('Array par:');
console.log(arrayPar);
console.log();
console.log('Array impar:');
console.log(arrayImpar);
