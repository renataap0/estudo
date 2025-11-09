// Escreva um programa em JavaScript que peça ao usuário para digitar uma frase e conte quantas vezes a letra "a"aparece.
// Exemplo: 
// "abacaxi"
//  → 
// "A letra 'a' aparece 3 vez(es) na frase."

const prompt = require('prompt-sync')();
let contador = 0 

for (let letra of frase) {
    if( letra == 'a' || letra == 'A') {
        contador++; 
    }
}

console;log(`a letra 'a' aparece ${contador} vezes.`);