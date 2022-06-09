/*Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois peça e armazene essa 
quantidade de notas em um array. Ao final imprima a quantidade de alunos 
APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).*/

const prompt = require('prompt-sync')();
console.clear();

let notas = [];
let aprovados = [];
let recuperacao = [];
let reprovados = [];

let quantidadeNotas = +prompt('Quantas notas deseja inserir? ');
for (let i = 0; i < quantidadeNotas; i++) {
    notas[i] = +prompt(`Insira a nota do aluno ${i + 1}: `);
    if (notas[i] >= 7) {
        aprovados.push(notas[i]);
    } else if (notas[i] >= 5) {
        recuperacao.push(notas[i]);
    } else {
        reprovados.push(notas[i]);
    }
}
console.log();
console.log(`
${aprovados.length} alunos foram APROVADOS.
${recuperacao.length} alunos estão em RECUPERAÇÃO.
${reprovados.length} alunos foram REPROVADOS.`);
