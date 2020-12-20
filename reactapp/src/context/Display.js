import React from 'react'
import { ApiContext } from './Context'

const Display = () => {
    const dados = React.useContext(ApiContext)
    console.log(dados)

    return (
        <div>
            Produtos: {' '}
            {dados.data && dados.data.map((produto) => <li key={produto.id}>{produto.nome}</li> )}
            {/* <button onClick={dados.limpar()}>Limpar</button> */}
        </div>
    )
}

export default Display
