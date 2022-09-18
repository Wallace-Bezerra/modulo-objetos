const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop();
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixes", "Batata");
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.sort());
console.log(estudantes.reverse());
console.log(estudantes.includes("Joana") ? "sim" : "não");
console.log(estudantes.includes("Juliana") ? "sim" : "não");

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join


let novoHtml = html.split("section").join("ul").replace(/[" "]+/g, "");
novoHtml = novoHtml.split("div").join("li");

console.log(novoHtml);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const copyArray = carros.slice();
carros.pop();
console.log(carros, copyArray);
