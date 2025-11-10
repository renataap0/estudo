// Peça ao usuário uma frase e exiba quantas palavras ela possui

const prompt = require('prompt-sync')();

const frase = prompt('digite uma frase: '); 
const palavras = frase.trim().split(/\s+/);

console.log('o numero de palavras é: ', palavras.length);
