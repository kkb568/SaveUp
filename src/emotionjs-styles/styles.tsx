import { css } from "@emotion/css";

/* These are styles that are used throughout the application.
   For example, the two textStyles is used in all headings
   and linkStyle is used in all links.
*/
export const textStyle_h1 = css`
text-align: center;
text-transform: uppercase;
color: #06B203;
`

export const textStyle_h2 = css`
text-align: center;
color: #06B203;
`

export const linkStyle = css`
    text-decoration: none;
    color: white;
`

export const hrStyle = css`
    width: 90%;
    height: .01px;
    background-color: gray;
    margin-left: -.1em;
`

export const inputStyle = {
    padding: ".5em",
    fontSize: "1em",
    width: "80%",
}

export const selectStyle = {
    padding: ".5em",
    fontSize: "1em",
    width: "80%",
    cursor: "pointer",
}