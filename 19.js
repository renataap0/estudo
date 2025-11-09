// Escreva uma função em JavaScript que receba uma lista de números e retorne a soma de todos os números pares.

function numPares(lista) {
    let soma = 0;
    for (let num of lista) {
        if (num % 2 == 0) {
            soma += num;
        }
    }
    return soma;
}
console.log(numPares([10, 30, 50, 76, 92]));