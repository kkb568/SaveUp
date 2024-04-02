import { Link } from "react-router-dom";
import { Button } from "../../emotionjs-styles/styled-components";
import { css } from "@emotion/css";
import { useContext } from "react";
import { Context } from "../../App";
import { linkStyle } from "../../emotionjs-styles/styles";

// Renders the 404 error message.
export default function Error_404() {
    const green: string = useContext(Context);

    return (
        <div className={css`
            text-align: center;
            margin-bottom: 6em;
        `}>
            <h1 className={css`
                font-size: 6em;
                color: ${green};
            `}>404</h1>
            <p className={css`
                font-size: 2.5em;
                font-weight: bold;
                margin-top: -1em;
            `}>Page not found</p>
            <p className={css`
                font-size: 1.5em;
                margin-top: -0.5em;
            `}>The page you're requesting could not be found</p>
            <Button>
                <Link to="/" className={linkStyle}>Go to homepage</Link>
            </Button>
        </div>
    )
}