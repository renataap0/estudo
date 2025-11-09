//Implemente um programa que gere um número aleatório entre 1 e 100 e peça para o usuário adivinhar o número, informando se o chute é maior ou menor que o número gerado.

const prompt = require('prompt-sync')();

const numSecreto = Math.floor(Math.random() * 100 + 1);
let palpite 
do {
    palpite = prompt('digite um numero de 1 a 100: ');
    if (palpite > numSecreto) {
        console.log('Menor!');
    } else if (palpite < numSecreto) {
        console.log('Maior!');
    }
}
while (palpite !== numSecreto);
console.log('Você acertou!');