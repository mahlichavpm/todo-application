import React from "react";

function Todo (props) {

    return props.todos.map((todo,index) => (<li key={index}>{todo.text}</li>))

}

export default Todo;