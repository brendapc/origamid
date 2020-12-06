import React from 'react'

const Input = ({label, id, ...props}) => {
    return (
        <div style={{margin: '1rem 0'}}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" {...props}/>  {/* se o type for reescrito pelo ..props vale o ultimo */}
        </div>
    )
}

export default Input
