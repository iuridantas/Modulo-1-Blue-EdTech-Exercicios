/*Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. 
Depois, mostre quantas vezes cada valor foi conseguido.*/

const prompt = require('prompt-sync')();
console.clear();

const lancamentos = [];
let quantidadeLancamentos = 100;
let dado1 = 0;
let dado2 = 0;
let dado3 = 0;
let dado4 = 0;
let dado5 = 0;
let dado6 = 0;

for (let i = 0; i < quantidadeLancamentos; i++) {
    lancamentos[i] = Math.ceil(Math.random() * 6);
    switch (lancamentos[i]) {
        case 1:
            dado1++;
            break;
        case 2:
            dado2++;
            break;
        case 3:
            dado3++;
            break;
        case 4:
            dado4++;
            break;
        case 5:
            dado5++;
            break;
        case 6:
            dado6++;
            break;
    }
}

console.log(`Em ${quantidadeLancamentos} lançamentos:
O dado 1 foi sorteado ${dado1} vezes.
O dado 2 foi sorteado ${dado2} vezes.
O dado 3 foi sorteado ${dado3} vezes.
O dado 4 foi sorteado ${dado4} vezes.
O dado 5 foi sorteado ${dado5} vezes.
O dado 6 foi sorteado ${dado6} vezes.`);
