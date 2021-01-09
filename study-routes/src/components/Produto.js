import React from 'react'
import { Routes, Route, useLocation, useParams, Link } from 'react-router-dom'
import ProdutoDescricao from './subsProduto/ProdutoDescricao'
import ProdutoEspecificacoes from './subsProduto/ProdutoEspecifocacoes'

const Produto = () => {
    const params = useParams()
    const location = useLocation()

    const search = new URLSearchParams(location.search)
    console.log(search.get('query'))
    
    return (
        <div>
            <h1>produto</h1>
            <p>params: { params.id }</p>
            <nav>
                <Link to="">Descrição</Link>
                <Link to="especificacoes">Especificações</Link>
            </nav>
            <Routes>
                <Route path="/"  element={ <ProdutoDescricao />}/>
                <Route path="/especificacoes"  element={ <ProdutoEspecificacoes />}/>
            </Routes>
        </div>
    )
}

export default Produto
