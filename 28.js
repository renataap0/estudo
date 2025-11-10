// Peça ao usuário um número e exiba a tabuada deste número de 1 a 10

const prompt = require('prompt-sync')

const numero = Number(prompt('digite um numero: '));

for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}