/*Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720*/

const prompt = require('prompt-sync')();
console.clear();

console.log('Vamos ver o fatorial de um número?');
const array = [];
let numero = +prompt('Insira um número: ');
for (let i = 1; i <= numero; i++) {
    array.unshift(i);
}
let fatorial = array.reduce((a, b) => a * b);

console.log();
console.log(`O fatorial de ${numero} é:
${numero}! = ${array.join(' x ')} = ${fatorial}`);
