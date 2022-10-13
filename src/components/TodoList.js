import React, {useEffect, useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {


    const getTodos = () => {
      let list = JSON.parse(localStorage.getItem('todos'))
      if(!list){
        list = localStorage.setItem('todos',JSON.stringify([]))
      }
      return list
    }

    useEffect(()=>{
      setTodos(getTodos());
    },[])
    

    const [todos,setTodos] = useState([]);


    const addTodo = todo => {
        if(!todo.text || /^\s*S/.test(todo.text)) {
            return
        }

        const newTodos = [...todos,todo]
        localStorage.setItem('todos',JSON.stringify(newTodos))
        setTodos(newTodos)

    }

    const completeTodo = id => {
        let updatedtodos = todos.map(todo => {
          if(todo.id === id){
            todo.isComplete = !todo.isComplete
          } 
          return todo
        })
        setTodos(updatedtodos)
    }

    const removeTodo = id => {

      let index = todos.indexOf( todos.find( e => e.id === id) )
      let updatedtodos = [...todos]
      updatedtodos.splice(index,1)
      setTodos(updatedtodos)
      localStorage.setItem('todos',JSON.stringify(updatedtodos))
    }

  return (
    <div>
        <h3>Списък за пазар:</h3>
        <TodoForm onSubmit={addTodo} />
        <ul>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
        </ul>
    </div>
  )
}

export default TodoList