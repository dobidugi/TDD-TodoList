import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const INIT_TODOS = [
    {
        id:1,
        text: "숨쉬기",
        done: false
    },
    {
        id:2,
        text: "개발",
        done: false
    },
    {
        id:3,
        text: "잠자기",
        done: true
    },
];
function TodoApp() {
    const [todos, setTodos] = useState(INIT_TODOS);
    const onInsert = (value) => {
        setTodos((prevTodos) => prevTodos.concat( { id: prevTodos.length, text: value, done: false } ));
    };

    const onToggle = (id) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, done: !todo.done };
            }
            else return todo;
        });
        setTodos(newTodos);
    };

    const onRemove = (id) => {
        
    };
    return (
        <React.Fragment>
            <TodoForm onInsert={onInsert}/>
            <TodoList todos={todos} onToggle={onToggle}/>
        </React.Fragment>
    );
}

export default TodoApp;