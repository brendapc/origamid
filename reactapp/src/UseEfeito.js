import React from 'react'

const UseEfeito = () => {
    const [ contar, setContar ] = React.useState(0)
    const [ dados, setDados ] = React.useState(null)

    React.useEffect(()=>{
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook').then((res)=> res.json()).then((json)=> setDados(json))
        console.log('dentro')
    
    }, [])
 
    return (
        <div>
        {dados && (
            <div>
                <h1>{dados.nome}</h1>
                <p>R$ {dados.preco * contar} </p>
            </div>
           
        )}
            <button onClick={()=>setContar(contar + 1)}>{contar}</button>
        </div>
    )
}

export default UseEfeito
