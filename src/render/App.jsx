import TodoList from "./components/TodoList";
import React from "react";
import TodoForm from "./components/TodoForm";

function App() {
    const Todos = [
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
    const onInsert = (value) => {
        
    };

    const onToggle = (id) => {
        
    };
    return (
        <React.Fragment>
            <TodoForm onInsert={onInsert}/>
            <TodoList todos={Todos}/>
        </React.Fragment>
    );
}

export default App;