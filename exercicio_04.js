/*Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. 
Também considere todo ano com 365 dias e todo mês com 30 dias.*/

const prompt = require('prompt-sync')();
console.clear();

let idade = prompt(`Digite sua idade em dias: `);

anos = parseInt(idade / 365)
meses = parseInt((idade%365)/30)
dias = parseInt((idade%365)%30)

console.log();
console.log(`Você já viveu ${anos} anos, ${meses} meses e ${dias} dias`);
