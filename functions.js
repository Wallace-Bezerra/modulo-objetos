// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce



// const paragrafo = document.querySelector("p");
// console.log(paragrafo.innerText.length);


const paragrafos = document.querySelectorAll("p");
const arrayParagrafos = Array.from(paragrafos);

const totalCaracteres = arrayParagrafos.reduce((acc, item) => {
    // console.log(item.innerHTML.length);
    return item.innerHTML.length + acc;
}, 0);

console.log(totalCaracteres);




// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.



function createHtml(tag, classe, conteudo) {
    const element = document.createElement(tag);
    element.classList.add(classe);
    element.innerText = conteudo;
    return element;
}

console.log(createHtml("p", "ativo", "ola esse é um novo elemento"));



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const createH1 = createHtml.bind(createHtml, "h1", "titulo");

console.log(createH1("segundo titulo"));
console.log(createH1("este é um titulo h1"));