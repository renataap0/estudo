//Escreva um programa em JavaScript que peça ao usuário para digitar um número e verifique se ele é divisível por 5.
// Se for, exiba: 
// "O número é divisível por 5"
// . Caso contrário, 
// "O número não é divisível por 5"

const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número: ')); 

if (num % 5 == 0) {
    console.log('O número é divisivel por 5.');
} else {
    console.log('O número não é divisivel por 5.');
}