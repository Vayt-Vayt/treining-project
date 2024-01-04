import { FC } from "react"
import { BrowserRouter } from "react-router-dom"

export const RouteDecorators = (Component: FC) => {
    return (
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    )
}