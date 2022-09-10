// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoa.prototype.mostrarNome = function () {
  return `Seu nome completo: ${this.nome} ${this.sobrenome}`;
}


function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

const p1 = new Pessoa("wallace", "bezerra", 20);


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

const dom = document.querySelectorAll("li");
dom.forEach
dom.values

const dom2 = document.getElementsByTagName("li");
dom2.item
dom2.namedItem


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
const ul = document.querySelector('ul');

li; // html li element
li.click; // function
li.innerText; // string
li.value; // number
li.hidden; // boolean
li.offsetLeft; // number
li.click(); //nao tem

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
// string
