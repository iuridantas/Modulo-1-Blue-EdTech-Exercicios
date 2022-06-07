/*Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.*/

const prompt = require('prompt-sync')();
console.clear();

let num1 = +prompt(`Digite o primeiro numero: `);
let num2 = +prompt(`Digite o segundo numero: `);

if (num1 > num2) {
    console.log(`O priemiro numero é maior que o segundo numero.`);
} else if (num2 > num1) {
    console.log(`O segundo numero é maior que o primeiro numero.`);
} else {
    console.log(`Os numeros são iguais.`);
}
