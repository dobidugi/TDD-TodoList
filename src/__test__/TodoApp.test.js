import { fireEvent, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import TodoApp from "../render/components/TodoApp";

describe("<TodoApp />", ()=> {
    const setup = () => {
        const utils = render(<TodoApp />);
        const button = utils.getByText("등록");
        const input = utils.getByPlaceholderText("할 일을 입력하세요.");
        return {
            ...utils,
            button,
            input,
        };
    };
    it("is render TodoForm and TodoList", ()=> {
        const { getByText, getAllByText } = setup();
        getByText("등록");
        getAllByText("삭제");
    });

    it("create a new todo", ()=> {
        const { button , input, getByText } = setup();
        const newTodo = "새로운일 추가하기";
        fireEvent.change(input, {
            target: {
                value: newTodo
            }
        });
        fireEvent.click(button);
        getByText(newTodo);
    });

    it("toggle todo", ()=> {
        const { button , input, getByText } = setup();
        const newTodo = "새로운일 추가하기";
        fireEvent.change(input, {
            target: {
                value: newTodo
            }
        });
        fireEvent.click(button);
        const todoText = getByText(newTodo);
        expect(todoText).not.toHaveStyle("text-decoration: line-through;"); 
        fireEvent.click(todoText);
        expect(todoText).toHaveStyle("text-decoration: line-through;");
        
    });

    it("remove todo", () => {
        const { input, getByText, button } = setup();
        const newTodo = "새로운일 추가하기";
        fireEvent.change(input, {
            target: {
                value: newTodo
            }
        });
        fireEvent.click(button);
        const todoText = getByText(newTodo);
        fireEvent.click(todoText.nextSibling);
        expect(todoText).not.toBeInTheDocument();
    });
});