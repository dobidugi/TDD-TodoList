import { fireEvent, getByPlaceholderText, getByText, render } from "@testing-library/react";
import React from "react";
import TodoApp from "../render/components/TodoApp";

describe("<TodoApp />", ()=> {
    const setup = () => {
        const utils = render(<TodoApp />);
        const button = utils.getByText("등록");
        const input = utils.getByPlaceholderText("할 일을 입력하세요.");
        return {
            ...utils,
            button,
            input
        }
    }
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
                value: "새로운일 추가하기"
            }
        })
        fireEvent.click(button);
        getByText(newTodo);
    });
});