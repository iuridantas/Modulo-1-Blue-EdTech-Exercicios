/*Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, 
o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. Após, 
calcule e mostre o valor a ser pago.*/

const prompt = require('prompt-sync')();
console.clear();

let peça1 = prompt(`Qual peça está procurando? `);
let quantidade1 = +prompt(`Quantas unidades precisa? `);
valor1 = 20.0;
console.log();
let peça2 = prompt(`Qual peça está procurando? `);
let quantidade2 = +prompt(`Quantas unidades precisa? `);
valor2 = 10.0;

conta = quantidade1 * 20 + quantidade2 * 10;
console.log();
console.log(`O valor total da compra ficou R$ ${conta},00 . Foi comprado ${quantidade1} unidade de ${peça1} e ${quantidade2} unidade de ${peça2}.`);
