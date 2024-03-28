import { css } from "@emotion/css";
import { useContext } from "react";
import { Context } from "../App";

export default function Footer() {
    const green : string = useContext(Context)

    return (
        <footer className={css`
            width: 100%;
            background-color: ${green};
            padding: 1em 0;
            height: 4em;
            color: white;
        `}>
            <p className={css`
                margin-left: 1em;
            `}>Brian Koome, 2024.</p>
        </footer>
    )
}