// Escreva um programa em JavaScript que peça ao usuário para digitar uma palavra e, em seguida, exiba a palavra com todas as letras maiúsculas.
// Exemplo: se o usuário digitar 
// "javascript"
// , o programa deve exibir 
// "JAVASCRIPT"

const prompt = require('prompt-sync')();

let palavra = prompt('Digite uma palavra: ');
console.log(palavra.toUppercase());