import React from "react";

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
        <li>
            <span 
                onClick={onDone} 
                style={{ textDecoration: done ? "line-through" : "" }}
            >
                {text}
            </span>
            <button
                onClick={onDelete}
            >
                삭제
            </button>
        </li>
    );
}

export default TodoItem;