
import "app/styles/index.scss"
import { FC } from "react"

export const StyleDecorators = (Component: FC) => {
    return (
        <div className="App">
            <Component />
        </div>
    )
}
