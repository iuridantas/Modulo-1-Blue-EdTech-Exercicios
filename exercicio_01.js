/*Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, 
sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.*/

const prompt = require('prompt-sync')();
console.clear();

let aluno = prompt(`Nome do aluno: `);
let nota1 = +prompt(`Digite a primeira nota: `);
let nota2 = +prompt(`Digite a segunda nota: `);

media = (nota1 * 4 + nota2 * 6) / (4 + 6);

console.log()

console.log(`A média do aluno ${aluno} foi de ${media}`);
