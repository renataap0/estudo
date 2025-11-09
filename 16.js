// Escreva uma função em JavaScript que receba 3 argumentos (
// raio
// , 
// altura
// , 
// pi = 3.14
// ) e retorne o volume de um cilindro.

function volume(raio, altura, pi = 3.14){
    return pi * (raio ** 2) * altura;
}
console.log(volume(5, 10));