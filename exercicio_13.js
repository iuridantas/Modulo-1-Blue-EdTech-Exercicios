/*Faça um Programa que leia 20 números inteiros e armazene-os num array. 
Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.*/

const prompt = require('prompt-sync')();
console.clear();

let contador = 0;
let arrayGeral = [];
let arrayPar = [];
let arrayImpar = [];
let limite = 20;

while (contador < limite) {
    let numero = +prompt('Digite um número: ');
    arrayGeral.push(numero);
    contador++;

    if (numero % 2 == 0) {
        arrayPar.push(numero);
    } else {
        arrayImpar.push(numero);
    }
}

console.log('Array GERAL:');
console.log(arrayGeral);

console.log('Array PARES:');
console.log(arrayPar);

console.log('Array IMPARES:');
console.log(arrayImpar);
