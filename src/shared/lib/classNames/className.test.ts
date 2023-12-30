import { describe } from "node:test";
import { classNames } from "./classNames";

describe("className", () => {
    test("test one", () => {
        expect(classNames('sass')).toBe("sass");
    })

    test("test two", () => {
        const expected = "sass className push" 
        expect(classNames('sass', ["className", "push"] )).toBe(expected);
    })

    test("test three", () => {
        const expected = "sass className push boolean" 
        expect(classNames('sass', ["className", "push"], {["boolean"]: true} )).toBe(expected);
    })

    test("test for", () => {
        const expected = "sass className push boolean" 
        expect(classNames('sass', ["className", "push"], {["boolean"]: true, ["boolean2"]: false} ))
            .toBe(expected);
    })
})