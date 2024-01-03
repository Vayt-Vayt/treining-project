import React from "react";
import {  fireEvent, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { 
    renderWidthTransation 
} from "shared/lib/test/renderWidthTranslation/renderWidthTranslation";

describe("SideBar", () => {
    test("test one", () => {
        renderWidthTransation(<SideBar />)        
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();  
    })
    
    test("test two", () => {
        renderWidthTransation(<SideBar />)    
        const toggleBtn = screen.getByTestId("sidebar-toggle");    
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    })
})