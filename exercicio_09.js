/*Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
mostrando uma mensagem de erro e voltando a pedir as informações.*/

const prompt = require('prompt-sync')();
while (true) {
    console.clear();

    let usuário = prompt(`Digite o usuario: `);
    let senha = prompt(`Digite a senha: `);

    if (usuário != senha) {
        console.log(`Senha aceita!`);
    } else if (usuário == senha) {
        continue;
    }
    break;
}
