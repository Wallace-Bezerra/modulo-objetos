// Transforme o objeto abaixo em uma Constructor Function
// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = () => {
//     console.log(`${this.nome} andou`);
//   }
// }

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa = new Pessoa("João", 20);
const pessoa2 = new Pessoa("Maria", 25);
const pessoa3 = new Pessoa("Bruno", 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  this.seletor = seletor
  this.elements = document.querySelectorAll(this.seletor);

  this.addClass = (classe) => {
    this.elements.forEach((item) => {
      item.classList.add(classe);
    })
  }
  this.removeClass = (classe) => {
    this.elements.forEach((item) => {
      item.classList.remove(classe);
    })
  }
}

const e1 = new Dom('li');

