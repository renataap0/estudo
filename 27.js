// Faça uma função que receba uma lista de strings e retorne a que tem mais caracteres

function strmaior(lista) {
    let maior = lista[0];
    for (let str of lista) {
        if (str.length > maior.length) {
            maior = str;
        }
    } 
    return maior;
}

console.log(strmaior(['ana', 'banana', 'paralelepipedo']));