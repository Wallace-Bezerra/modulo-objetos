// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let valorTaxa = 0;
let valorRecebimento = 0;

transacoes.forEach((item) => {

  if (item.descricao.includes("Taxa")) {
    valorTaxa += parseInt(item.valor.slice(3));
  }
  else if (item.descricao.includes("Recebimento")) {
    valorRecebimento += parseInt(item.valor.slice(3));
  }
})
console.log(`Valor taxa: ${valorTaxa}`);
console.log(`Valor recebimento: ${valorRecebimento}`);



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.split(";"));

// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

const resultado = html.replace(/[span]+/g, "a");
console.log(resultado);


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
// console.log(frase.length);
console.log(frase.charAt(frase.length - 1));


// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let valorTotal = 0;
transacoes2.forEach((item) => {
  if (item.toLowerCase().includes("taxa")) {
    valorTotal += 1;
  }
})
console.log(valorTotal);
