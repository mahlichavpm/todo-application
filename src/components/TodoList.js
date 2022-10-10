import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {

    const [todos,setTodos] = useState([])


    const addTodo = todo => {
        if(!todo.text || /^\s*S/.test(todo.text)) {
            return
        }

        const newTodos = [todo,...todos]

        setTodos(newTodos)

    }

  return (
    <div>
        <h3>Списък за пазар:</h3>
        <TodoForm onSubmit={addTodo} />
        <ul>
        <Todo todos={todos}/>
        </ul>
    </div>
  )
}

export default TodoList