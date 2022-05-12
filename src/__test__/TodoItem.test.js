import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoItem from "../render/components/TodoItem";

describe("<TodoItem />", () => {
    const MockTodoItem = {
        id: 1,
        text: "숨쉬기",
        done: false
    };

    const setup = (props={}) => {
        const initialProps = { todo: MockTodoItem };
        const utils = render(<TodoItem { ...initialProps } {...props} />);
        const todo = props.todo || initialProps.todo;
        const { getByText } = utils;
        const text = getByText(todo.text);
        const button = getByText("삭제");
        return {
            ...utils,
            text,
            button
        };
        
    };

    it("has span and button",() => {
        const { text, button } = setup();
        expect(text).toBeTruthy();
        expect(button).toBeTruthy();
    });

    it("show line-throuh on text when done true", () => {
        const { text } = setup( { todo:  { ...MockTodoItem, done: true } } );
        expect(text).toHaveStyle("text-decoration: line-through");
    });

    it("does`nt not show line-throuh on text when done false", () => {
        const { text } = setup( { todo:  { ...MockTodoItem, done: false } } );
        expect(text).toHaveStyle("text-decoration: ");
    });

    it("calls onToggle", ()=> {
        const onToggle = jest.fn();
        const { text } = setup({ onToggle });
        fireEvent.click(text);
        expect(onToggle).toBeCalledWith(MockTodoItem.id);
    });

    it("calls onRmove", ()=> {
        const onRemove = jest.fn();
        const { button } = setup({ onRemove });
        fireEvent.click(button);
        expect(onRemove).toBeCalledWith(MockTodoItem.id);
    });
    
});