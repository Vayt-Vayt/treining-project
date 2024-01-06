import React from "react";
import {  fireEvent, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { ComponentRender } from "shared/lib/test/ComponentRender/ComponentRender";

describe("SideBar", () => {
    test("test one", () => {
        ComponentRender(<SideBar />)        
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();  
    })
    
    test("test two", () => {
        ComponentRender(<SideBar />)    
        const toggleBtn = screen.getByTestId("sidebar-toggle");    
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    })
})