import React, { useState } from "react";

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
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="할 일을 입력하세요." 
                value={value}
                onChange={onChange}
            />
            <button type="submit">{`등록`}</button>
        </form>
    );
}

export default TodoForm;