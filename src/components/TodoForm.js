import React, { useState } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handeSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
            isComlete: false
        })
        setInput('')
    }

    return (
    <form onSubmit={handeSubmit}>
        <input type='text'
         placeholder='Добави продукт...'
         value={input}
         name="text" 
         onChange={handleChange}/>
         <button>Добави</button>
    </form> 
    )
}

export default TodoForm