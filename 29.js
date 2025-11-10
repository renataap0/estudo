// Crie uma função que receba uma lista de números e retorne uma lista apenas com os números negativos

function numnegativos(lista) {
    let negativos = [];
    for (let num of lista) {
        if (num < 0) {
            negativos.push(num);
        }
    }
    return negativos;
}

console.log(numnegativos([-3, -2, -1, 0, 1, 2, 3,]));