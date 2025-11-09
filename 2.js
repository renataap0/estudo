//Crie um programa que peça ao usuário para digitar uma frase e conte quantas palavras ela contém.

const prompt = require('prompt-sync')();

const frase = prompt('digite uma frase: '); 
const palavras = frase.trim().split(/\s+/);
console.log('o numero de palavras na frase é: ', palavras.length);