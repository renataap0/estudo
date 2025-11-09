// Escreva uma função em JavaScript que receba uma lista de números inteiros e retorne o menor número da lista.

function menorNum(numInteiros) {
    return Math.min(...numInteiros);
}

console.log(menorNum([10, 30, 40, 20, 6]));