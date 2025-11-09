//Escreva uma função que calcule a soma dos dígitos de um número inteiro.

function somaDigitos (num) {
    return num.toString().split('').reduce((soma, dig) => soma + Number(dig) , 0);
}

console.log (somaDigitos(1234));