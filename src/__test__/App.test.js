import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../render/App";

describe("<App />", () => {
    it("render test", () => {
        render(<App />);
    });
});