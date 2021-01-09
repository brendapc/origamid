import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Produto = () => {
    const params = useParams()
    const location = useLocation()

    const search = new URLSearchParams(location.search)
    console.log(search.get('query'))
    
    return (
        <div>
            <h1>produto</h1>
            <p>params: { params.id }</p>
        </div>
    )
}

export default Produto
