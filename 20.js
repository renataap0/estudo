// Peça ao usuário para digitar dois números e exiba o maior deles

const prompt = require('prompt-sync')();
const numa = Number(prompt('digite um numero: '));
const numb = Number(prompt('digite outro numero: '));

if (numa > numb) {
    console.log(numa);
} else {
    console.log(numb);
}
