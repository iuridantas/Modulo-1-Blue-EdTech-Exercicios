/*Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para 
o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número.
 No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.*/

const prompt = require('prompt-sync')();

let erro = 0;

while (true) {
    console.clear();

    let palpite = +prompt(`Qual foi o numero escolhido pleo computador? `);
    let pc = Math.floor(Math.random() * 11);
    console.log();
    if (palpite == pc) {
        console.log(`Parabéns você acertou o numero! O numero escolhido pelo pc foi ${pc}`);
    } else {
        erro++;
        continue;
    }
    console.log();
    console.log(`Quantidade de palpites foi de ${erro}.`);
    break;
}

