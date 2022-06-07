/*Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Em recuperação", se a média for entre cinco e sete;
A mensagem "Reprovado", se a média for menor que cinco.*/

const prompt = require('prompt-sync')();
console.clear();

let nota1 = +prompt(`Digite a primeira nota: `);
let nota2 = +prompt(`Digite a segunda nota: `);
let nota3 = +prompt(`Digite a terceira nota: `);
let nota4 = +prompt(`Digite a quarta nota: `);

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log()
if (media >= 7) {
    console.log(`O aluno foi aprovado!`);
} else if (media >= 5 && media < 7) {
    console.log(`O aluno está em recuperação!`);
} else {
    console.log(`O aluno foi reporvado!`);
}
