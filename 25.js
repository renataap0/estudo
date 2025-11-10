// Crie uma função que receba uma lista de números e retorne a soma dos números múltiplos de 3

function multiplos(lista) {
    let soma = 0;
    for (let num of lista) {
        if (num % 3 == 0) {
            soma += num;
        }
    }
    return soma;
}

console.log(multiplos([3, 17, 98, 54, 22]));