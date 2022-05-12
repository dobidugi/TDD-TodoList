import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";
function TodoList(props) {
    const { todos } = props;
    return (
        <ul className={classes.list}>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    );
}

export default TodoList;