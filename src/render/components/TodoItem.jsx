import React from "react";
import classes from "./TodoItem.module.css";
function TodoItem( props ) {
    const { id, text, done } = props.todo;
    const { onToggle, onRemove } = props;

    const onDone = () => {
        onToggle(id);
    };

    const onDelete = () => {
        onRemove(id);
    };
    return (
        <li className={classes.item}>
            <span 
                onClick={onDone} 
                style={{ textDecoration: done ? "line-through" : "" }}
            >
                {text}
            </span>
            <button className={classes.button}
                onClick={onDelete}
            >
                삭제
            </button>
        </li>
    );
}

export default TodoItem;