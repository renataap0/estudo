//Implemente uma função que receba uma lista de números e retorne a quantidade de números ímpares presentes na lista.

function contImpares(lista) {
    return lista.filter(num => num % 2 !== 0).length;
} 
console.log(contImpares([1, 2, 3, 4, 5]));