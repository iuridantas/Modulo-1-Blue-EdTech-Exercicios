/*Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. 
Imprima a média de idade e de altura.*/

const prompt = require('prompt-sync')();
console.clear();

let listaIdades = [];
let listaAltura = [];
let count = 0;
let soma1 = 0;
let soma2 = 0;

while (count < 5) {
    let novaIdade = +prompt('Digite a idade: ');
    listaIdades.push(novaIdade);
    soma1 += novaIdade;
    let novaAltura = +prompt('Digite a altura: ');
    listaAltura.push(novaAltura);
    soma2 += novaAltura;
    count++;
}

console.log(listaIdades);
console.log();
console.log('Média:', soma1 / listaIdades.length.toFixed(0));
console.log();
console.log(listaAltura);
console.log();
console.log('Média:', soma2 / listaAltura.length.toFixed(0));
