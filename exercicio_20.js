/*Faça um programa que peça o nome de usuário e a senha de um usuário. 
A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.*/

const prompt = require('prompt-sync')();
console.clear();

let padrao = /^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-zA-Z])[@!#$%^&*()/\\a-zA-Z0-9]{8,}$/;

console.log('Cadastro de usuário e senha');

prompt('Insira um nome de usuario: ');
let senha = prompt('Cadastre uma senha: ');
while (!(padrao.test(senha))){
    console.log('Sua senha deve ter pelo menos 8 dígitos, um número e um caracter especial (@!#$%^&*()')
    senha = prompt('Cadastre uma senha: ');
}
console.clear()
console.log('Senha cadastrada. Obrigado!');