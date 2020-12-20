import React from 'react'

export const ApiContext = React.createContext()

export const ApiContextData = ({children}) => {
    const [data, setData ] = React.useState('')

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then(response => response.json())
        .then((json)=> setData(json))
    }, [])

    function limpar() {
        setData('')
    }

    return <ApiContext.Provider value={{ data, limpar }}>
        {children}
    </ApiContext.Provider>
}