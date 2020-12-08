import React from 'react'
import Produto from './Produto'

const App = () => {
    const [dados, setDados] = React.useState(null)
    const [carregando, setCarregando] = React.useState(null)

    async function handleClick(event){
        let product = event.target.innerText
        setCarregando(true)
        const dados = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        const dadosJSON = await dados.json()
        setDados(dadosJSON)
        setCarregando(false)
    }

    return (
        <div>
            <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
            <button style={{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
            <button style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>
            {carregando && <p>Carregando...</p> }
            {!carregando && dados && <Produto dados={dados} />}
        </div>
    )
}

export default App
