/*Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. 
Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.*/

const prompt = require('prompt-sync')();
console.clear();

console.log(`Digite a suda idade em: anos, meses e dias`);

let anos = +prompt(`Anos: `);
let meses = +prompt(`Meses: `);
let dias = +prompt(`Dias: `);

conta = anos * 365 + meses * 30 + dias;

console.log();
console.log(`Você já viveu ${conta} dias`);
