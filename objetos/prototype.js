function Pessoa(nome) {
    this.nome = nome
}

Pessoa.prototype.andar = function () {
    return 'andou um passo'
}
const Brenda = new Pessoa("Brenda")

console.log(Pessoa.prototype) //retorna o prototype nativo
console.log(Brenda.prototype)