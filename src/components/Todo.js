import React  from "react";
function Todo (props) {

    return props.todos.map((todo,index) => (
        <div
            className={todo.isComplete ? 'todo-row completed' : 'todo-row'}
            key={index}
        >
            <div className="todo-item" key= {todo.id} onClick={()=>{ props.completeTodo(todo.id)}}>
                {todo.text}
            </div>
            <button onClick={() => { props.removeTodo(todo.id) }}>X</button>
        </div>
    ))

}

export default Todo;