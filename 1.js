//Escreva uma função que receba uma lista de números e retorne um novo array com os números ao quadrado.
numeros = [ 1, 2 , 3 , 4]

function quadrados(numeros) {
    numeros.map(num => num * num)
}
console.log ('os numeros ao quadrado ficam: ', quadrados);