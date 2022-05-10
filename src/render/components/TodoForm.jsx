import React, { useState } from "react";
import classes from "./TodoForm.module.css";
function TodoForm(props) {
    const [value, setValue] = useState("");
    const onChange = (event) => {
        setValue(event.target.value);
    }; 

    const onSubmit = (event) => {
        event.preventDefault();
        props.onInsert(value);
        setValue("");
    };
    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <input
                className={classes.input}
                type="text" 
                placeholder="할 일을 입력하세요." 
                value={value}
                onChange={onChange}
            />
            <button 
                className={classes.button}
                type="submit">
                {`등록`}
            </button>
        </form>
    );
}

export default TodoForm;