import { useContext } from "react"
import { Context } from "../App"
import logo from '../assets/logo.png'
import { css } from "@emotion/css"

export default function Header() {
    const green : string = useContext(Context)

    return (
        <header className={css`
            width: 100%;
            background-color: ${green};
            padding: 1em 0;
            height: 5em;
        `}>
            <img src={logo} className={css`
                width: 12em;
                margin-left: 1em;
            `}/>
        </header>
    )
}