//Faça um programa que peça ao usuário para digitar uma data no formato "dd/mm/aaaa" e exiba o dia da semana correspondente.

const prompt = require('prompt-sync')();

let entrada = prompt('Digite uma data (dd/mm/aaaa): ');
let [dia, mes, ano] = entrada.split('/').map(Number);
let data = new Date (ano, mes - 1, dia);
let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

console.log('Dia da semana: ', dias[data.getDay()]);