/* eslint-disable i18next/no-literal-string */
import React from "react";
import { render, screen } from "@testing-library/react";
import Button, { ThemeButton } from "./Button";

describe("Button", () => {
    test("test one", () => {
        render(<Button >test</Button>);
        expect(screen.getByText("test")).toBeInTheDocument();  
    })
    
    test("test two", () => {
        render(<Button theme={ThemeButton.CLEAR} >test</Button>);
        expect(screen.getByText("test")).toHaveClass('clear');  
        screen.debug()
    })

})



