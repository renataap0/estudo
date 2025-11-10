// Peça ao usuário para digitar uma frase e substitua todas as vogais por "*"   

const prompt = require('prompt-sync')();

const frase = prompt('digite uma frase: ')

function vogais(frase) {
    return frase.replace(/[aeiouAEIOU]/g, '*');
}

console.log(vogais(frase));