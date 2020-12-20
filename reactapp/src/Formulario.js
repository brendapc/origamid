import React from 'react'

const Formulario = () => {
    const [comentarios, setComentarios ] = React.useState([])
    const [ input, setInput ] = React.useState('Digite aqui')
    const inputElement = React.useRef()

    function handleClick(){
        setComentarios([...comentarios, input])
        setInput('')
        inputElement.current.focus()
    }

    return (
        <div>
            <ul>
                {comentarios.map((comentario, index)=>{
                    return <li key={index}>{comentario}</li>
                })}
            </ul>
            <input type="text"
                value={input}
                ref={inputElement}
                onChange={(e)=> setInput(e.target.value)}
            />
            <br/>
            <button onClick={handleClick}>clique</button>
        </div>
    )
}

export default Formulario
