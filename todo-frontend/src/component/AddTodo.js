import React, { useState } from 'react'

const AddTodo = ()=> {
    const [todo,setTodo] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e)
    }
  return (
    <form onSubmit = {handleSubmit}>
        <input type="text"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
        />
        <button type='submit'>AddTodo</button>
    </form>
  )
}

export default AddTodo