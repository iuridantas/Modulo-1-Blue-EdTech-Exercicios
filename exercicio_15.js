/*Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. 
Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.*/

const prompt = require('prompt-sync')();
console.clear();

let listaAlunos = [];
let listaNotas = [];
let count = 0;
let soma1 = 0;
let soma2 = 0;

let quantidadealunos = +prompt(`Quantos alunos a classe possui? `)

while (count < quantidadealunos) {
    let novaAlunos = prompt('Digite nome do aluno: ');
    listaAlunos.push(novaAlunos);
    soma1 += novaAlunos;
    let novaNotas = +prompt('Digite a nota do aluno: ');
    listaNotas.push(novaNotas);
    soma2 += novaNotas;
    count++;
}

console.log();
console.log(listaAlunos);
console.log();
console.log(listaNotas);
console.log();
console.log('Média:', soma2 / listaNotas.length);