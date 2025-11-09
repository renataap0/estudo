//Crie um programa que converta uma temperatura em Fahrenheit para Celsius.

const prompt = require('prompt-sync')();

const fah = prompt('Informe os fahrenheit: ');
const celsius = (5/9) * (fah - 32);

console.log ('Temperatura em celsius:', celsius);