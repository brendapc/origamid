import React from 'react'
import Header from './Header'
import Home from './Home'
import Produtos from './Produtos'

function Main() {

    const {pathname} = window.location
    return (
        <section>
            <Header />
            {pathname == '/' ? <Home /> : <Produtos /> }
            
        </section>
    )
}

export default Main
