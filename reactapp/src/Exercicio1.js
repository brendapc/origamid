import React from 'react'

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};
  
const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const Exercicio1 = () => {

    const dados = luana
    const total = dados.compras.map(compra => Number(compra.preco.replace("R$ ", ""))).reduce((anterior, atual)=> anterior+atual)
    console.log(total)

    return (
        <div>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>Total: R${total}</p>
            <p>
                Situação: <span style={{color: dados.ativa ? 'green' : 'red' }}> {dados.ativa ? 'Ativa' : 'Inativa' } </span>
            </p>
            {total > 10000 && <p>você está gastando muito</p> }
        </div>
    )
}

export default Exercicio1