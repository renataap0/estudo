// Escreva um programa em JavaScript que calcule a soma dos números pares de 1 a 200.

let soma = 0

for (let i = 1; i <= 200; i++){
    if (i % 2 == 0) {
        soma += i;
    }
}

console.log ('A soma dos pares é: ', soma); 