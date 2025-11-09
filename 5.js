//Escreva uma função que receba uma string e retorne a mesma string invertida.

function inverter(str) {
    return str.split('').reverse().join('')
}

console.log(inverter('trabalho'));