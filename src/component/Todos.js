import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    const mystyle={
        minHeight:"53vh"
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h2 className="text-center my-3">Todo-List</h2>
            {props.todos.length===0?"No todos to display":
            props.todos.map((todo)=>{
            return (
                <>

            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            <hr/>
            </>)
        })}
        </div>
    )
}
