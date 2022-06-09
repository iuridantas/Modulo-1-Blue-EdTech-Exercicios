/*Peça ao usuário uma quantidade de linhas e 
outra de colunas, e imprima essas informações na 
forma de uma tabela 
como no exemplo de 3 linhas e 4 colunas:
[ 0, 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 2, 3, 4, 5 ]
*/

const prompt = require('prompt-sync')();
console.clear();

let linhas = +prompt('Quantas linhas? ');
let colunas = +prompt('Quantas colunas? ');

let arrayLinhas = [];

for (let i = 0; i < linhas; i++) {
    let arrayColunas = [];
    for (let a = 0; a < colunas; a++) {
        arrayColunas.push(a + i);
    }
    arrayLinhas.push(arrayColunas);
}

for (let i of arrayLinhas) {
    console.log(i);
}

console.log();
