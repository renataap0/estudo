// Escreva uma função em JavaScript que receba uma lista de strings e retorne a string mais curta

function strCurta(lista) {
    let strCurta = 0;
    for (let str of lista) {
        if (str.length < strCurta.length) {
            strCurta = str;
        }
    }
    return strCurta;
}

console.log(strCurta(["ola", "banana", "boi"]));