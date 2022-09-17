// Retorne um número aleatório
// entre 1050 e 2000

const randomNumber = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(randomNumber);


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
let n = [];
console.log(numeros.split(",").forEach((item) => {
    n.push(parseInt(item));
}));

let teste1 = [1, 2, 3];
console.log(n)
console.log(Math.max.apply(null, n));

// numeros.split(",").forEach((item) => {
//     console.log(item);
// });
// console.log(Math.max(numeros));


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
    'R$ 230  ', 'r$  200'];

function limpaPreco(lista) {
    let total = 0;
    lista.forEach(item => {
        let n1 = item.slice(3).trimStart().replace(",", ".");
        total += Math.round(parseFloat(n1));
    });
    return total;
}

limpaPreco(listaPrecos);