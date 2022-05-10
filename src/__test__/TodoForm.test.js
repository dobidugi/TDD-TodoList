import { fireEvent, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import TodoForm from "../render/components/TodoForm";

describe("<TodoForm /> test", () => {
    const setup = (props={}) => {
        const utils = render(<TodoForm {...props}/>);
        const input = utils.getByPlaceholderText("할 일을 입력하세요.");
        const button = utils.getByText("등록");
        return {
            ...utils,
            input,
            button
        };
    };

    it("render test", () => {
        render(<TodoForm />);
    });

    it("has a input tag and placeholder" , () => {
        const { getByPlaceholderText }  = setup();
        getByPlaceholderText("할 일을 입력하세요.");
    });
    
    it("has a submit button", () => {
        const { getByText } = setup();
        getByText("등록"); 
    });

    it("change input", () => {
        const changeValue = "TDD 익히기";
        const { input } = setup();
        const utils = render(<TodoForm />);

        fireEvent.change(input, {
            target: {
                value: changeValue
            }
        });

        expect(input).toHaveAttribute("value", changeValue);
    });

    it("calls onInsert function and clear value", () => {
        const onInsert = jest.fn();
        const changeValue = "TDD 익히기";

        const { input, button } = setup( { onInsert })
        fireEvent.change(input, {
            target: {
                value: changeValue
            }
        });
        fireEvent.click(button);

        expect(onInsert).toBeCalledWith(changeValue); // 함수 호출이후 값 확인
        expect(input).toHaveAttribute("value", "");
    });
});