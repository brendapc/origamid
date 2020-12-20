import React from 'react'
import { ApiContextData } from './Context'
import Display from './Display'

const Main = () => {
   
    return (
        <ApiContextData>
            <Display />
        </ApiContextData>
    )
}

export default Main
