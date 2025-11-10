// Peça ao usuário para digitar uma palavra e exiba se ela é um palíndromo

const prompt = require('prompt-sync')();
const palavra = prompt('digie uma palavra: ');

function palindromo(palavra) {
    palavra = palavra.toLowerCase();
    const invertida = palavra.split('').reverse().join('');
    if (palavra === invertida) {
        console.log('é palindromo.');
    } else {
        console.log('não é palindromo.');
    }
}

palindromo(palavra);   