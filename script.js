const carros = ["fiat", "gol", "prisma"];

const newCarro = carros.map((item) => {
    return `${item} muito bom`;
})


const aulas = [
    {
        nome: "html",
        minuto: 10
    },
    {
        nome: "css",
        minuto: 20
    },
    {
        nome: "js",
        minuto: 30
    }
];

const minutosAulas = aulas.map((item) => {
    return item.minuto;
})

const totalMinutos = minutosAulas.reduce((acumulador, atual) => acumulador + atual);
console.log(totalMinutos);


const numeros2 = [2, 10, 20, 50, 54]

// const maiorNumero = numeros.reduce((anterior, atual) => {
//     return anterior > atual ? atual : anterior;
// });

// console.log(maiorNumero);

////////////////////////////////////////////////////////////////////

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

let cursos = document.querySelectorAll(".curso");

cursos = Array.from(cursos);
let novocurso = cursos.reduce((acc, item) => {
    let h1 = item.querySelector("h1").textContent;
    let p = item.querySelector("p").textContent;
    let aulas = item.querySelector(".aulas").textContent;
    let horas = item.querySelector(".horas").textContent;

    acc.push({
        titulo: h1,
        descricao: p,
        aulas: aulas,
        horas: horas
    });
    // console.log(acc);
    return acc;
}, [])

// let novocurso = cursos.map((item) => {
//     let h1 = item.querySelector("h1").textContent;
//     let p = item.querySelector("p").textContent;
//     let aulas = item.querySelector(".aulas").textContent;
//     let horas = item.querySelector(".horas").textContent;

//     return {
//         titulo: h1,
//         descricao: p,
//         aulas: aulas,
//         horas: horas
//     };
// })

// console.log(cursos);
console.log(novocurso);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const N = numeros.filter((item) => {
    return item > 100;
})

console.log(N);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

console.log(instrumentos.includes("Baixo"));


// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]
const valorTotal = compras.reduce((acc, atual) => {
    return acc + parseFloat(atual.preco.slice(2).replace(",", "."));
}, 0)

console.log(valorTotal);