import { fireEvent, render } from "@testing-library/react";
import React from "react";
import TodoList from "../render/components/TodoList";


describe("<TodoList />", () => {   
    const MockTodos = [
        {
            id: 1,
            text: "숨쉬기",
            done: false,
        },
        {
            id: 2,
            text: "TDD",
            done: false,
        },
        {
            id: 3,
            text: "Todo3",
            done: true,
        },
    ];

    const setup = (props={}) => {
        const utils = render(<TodoList {...props} todos={MockTodos} />);
        return {
            ...utils
        };
    };

    it("todo items render", ()=> {
        const { getByText } = setup();
        getByText(MockTodos[0].text);
        getByText(MockTodos[1].text);
        getByText(MockTodos[2].text);
    });

    it("calls onRemove", () => {
        const onRemove = jest.fn();
        const { getAllByText } = setup({ onRemove });
        fireEvent.click(getAllByText("삭제")[0]);
        expect(onRemove).toBeCalledWith(MockTodos[0].id);
    });

    it("calls onToggle", () => {
        const onToggle = jest.fn();
        const { getAllByText, getByText } = setup({ onToggle });
        fireEvent.click(getByText(MockTodos[0].text));
        expect(onToggle).toBeCalledWith(MockTodos[0].id);
    });
});