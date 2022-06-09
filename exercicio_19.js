/*Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente.*/

const prompt = require('prompt-sync')();
console.clear();

let quantidadeDeNumeros = 20;
let array = [];

function ordenar(a, b) {
    return a - b;
  }

for (let i = 0; i < quantidadeDeNumeros; i++){
    array[i] = Math.floor(Math.random()*101);
    array.sort(ordenar);
}

console.log(`A lista em ordem crescente é: 
${array}`);