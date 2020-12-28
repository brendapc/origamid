// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoas.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

const brenda = new Pessoas('brenda', 'pereira', 18)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype) //"Document" é o construtor de "document"




// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.constructor.name // HTML LI Element (HTMLLIElement)
li.click; 
li.click.constructor.name // Function 
li.innerText;
li.innerText.constructor.name // String
li.value;
li.value.constructor.name // Number
li.hidden;
li.hidden.constructor.name // Boolean
li.offsetLeft;
li.offsetLeft.constructor.name // Number

li.click(); //undefined (não RETORNA nada)

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
"Boolean" //String