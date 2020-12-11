import React from 'react'
import Produto from './Produto'

const Main = () => {
    const [ product, setProduct ] = React.useState(null)

    function handleClick(e){
        //e.preventDefault()
        setProduct(e.target.innerText)
        
    }

    React.useEffect(()=>{
        if(product !== null) window.localStorage.setItem('produto', product)
    }, [product])

    React.useEffect(()=>{
        const produtoLocal = window.localStorage.getItem('produto')
        if(produtoLocal !== null) setProduct(produtoLocal)
    }, [])

    return (
        <div>
            <h1>Preferencia: {product} </h1> 
            <div >
                <button style={{margin: '.5rem'}} onClick={ handleClick }>notebook</button>
                <button style={{margin: '.5rem'}} onClick={ handleClick }>smartphone</button>
            </div>      
            <Produto produto={product} /> 
        </div>
    )
}

export default Main
