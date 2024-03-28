import { css } from "@emotion/css"
import { textStyle_h1 } from "../../emotionjs-styles/styles"
import { ShortContainer } from "../../emotionjs-styles/styled-components"
import CreateSavingsForm from "./CreateSavingsForm"

export default function CreateSavings() {
    return (
        <>
            <h1 className={textStyle_h1}>Savings goal form</h1>
            <p className={css`
                text-align: center;
                font-size: 1.3em;
            `}>Fill in the form below to create your own savings goal</p>
            <ShortContainer>
                <CreateSavingsForm/>
            </ShortContainer>
        </>
    )
}