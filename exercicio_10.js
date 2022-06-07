/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';*/

const prompt = require('prompt-sync')();
console.clear();

let nome = prompt('Qual o seu nome? ');
while (nome.length < 3) {
    console.log('Nome inválido. Digite um nome com pelo menos 3 caracteres.');
    nome = prompt('Qual o seu nome? ');
}

let idade = +prompt('Qual a sua idade?');
while (idade <= 0 || idade > 150) {
    console.log('Idade inválida! Digite um valor entre 0 e 150.');
    idade = +prompt('Qual a sua idade? ');
}

let salario = +prompt('Qual o seu salário?');
while (salario <= 0) {
    console.log('Salário inválido! Digite um valor maior que 0.');
    salario = +prompt('Qual o seu salário? ');
}

let estadoCivil = prompt('Qual o seu estado civil? ');
while (
    estadoCivil != 's' &&
    estadoCivil != 'c' &&
    estadoCivil != 'v' &&
    estadoCivil != 'd'
) {
    console.log('Estado civil inválido! Digite s, c, v ou d');
    estadoCivil = prompt('Qual o seu estado civil? ');
}
