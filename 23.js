// Escreva uma função que receba uma lista de números e retorne apenas os números ímpares
let numeros = [3, 17, 98, 54, 22, 81, 65, 40, 7, 33, 91, 49, 12, 76, 88, 5, 29, 70, 44, 59];

function lista(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 3 == 0 || numeros[i] % 5 == 0) {
            console.log(numeros[i]);
        }
    }
}

lista(numeros);