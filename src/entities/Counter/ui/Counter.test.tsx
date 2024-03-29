import { ComponentRender } from "shared/lib/test/ComponentRender/ComponentRender"
import { Counter } from "./Counter"
import { screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

describe("Counter", () => {
    test("render", () => {
        ComponentRender(<Counter />, "/", {
            counter: {
                value: 10
            },
            user: {
                authData: {
                    id: "1",
                    username: "asd"
                }
            },
            loginForm: undefined,
            profile: undefined
        })

        expect(screen.getByTestId("value-title")).toHaveTextContent("10")
    })

    test("increment", () => {
        ComponentRender(<Counter />, "/", {
            counter: {
                value: 10
            },
            user: {
                authData: {
                    id: "1",
                    username: "asd"
                }
            },
            loginForm: undefined,
            profile: undefined
        })

        userEvent.click(screen.getByTestId("increment-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    })

    test("decrement", () => {
        ComponentRender(<Counter />, "/", {
            counter: {
                value: 10
            },
            user: {
                authData: {
                    id: "1",
                    username: "asd"
                }
            },
            loginForm: undefined,
            profile: undefined
        })

        userEvent.click(screen.getByTestId("decrement-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    })

})