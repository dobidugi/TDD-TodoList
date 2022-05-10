import React from "react";
import TodoForm from "./components/TodoForm";

function App() {
    const onInsert = (value) => {
        
    };
    return (
        <div>
            <TodoForm onInsert={onInsert}/>
        </div>
    );
}

export default App;