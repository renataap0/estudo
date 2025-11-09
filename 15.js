// Escreva um programa em JavaScript que calcule a média aritmética apenas dos números pares de uma lista.
// Exemplo: 
// [4, 7, 10, 13]
//  → 
// 7

let lista = [ 10, 13, 18, 19];

let soma = 0 
let quantidade = 0

for(let num of lista) {
    if(num % 2 == 0){
        soma += num;
        quantidade++;
    }
}

const media = soma / quantidade;
console.log('a media aritmetrica dos numeros pares é: ', media);