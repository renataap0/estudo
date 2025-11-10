// Solicite ao usuário um número e informe se ele é primo ou não

const prompt = require('prompt-sync')();

const nanannanaa = Number(prompt('digite um numero: '));

function primo(nanannanaa) {
    if (nanannanaa % 3 == 0 || nanannanaa % 5 == 0) {
        console.log('O numero não é primo.')
    } else {
        console.log('O numero é primo.')
    }
}

primo(nanannanaa);