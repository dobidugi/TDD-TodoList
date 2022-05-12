import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";
function TodoList(props) {
    const { todos, onRemove, onToggle } = props;
    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />)}
        </ul>
    );
}

export default TodoList;