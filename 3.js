//Faça uma função que receba dois números e retorne qual deles é o maior.
a = 18
b = 60

function maior (a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    }
}
console.log ('o maior numero é: ', maior);