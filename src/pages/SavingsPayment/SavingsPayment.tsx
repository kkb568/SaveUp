import { useParams } from "react-router-dom"
import { ShortContainer } from "../../emotionjs-styles/styled-components"
import PaymentForm from "./PaymentForm"
import { textStyle_h1, textStyle_h2 } from "../../emotionjs-styles/styles";
import { css } from "@emotion/css";

export default function SavingsPayment() {
    const { savingsName } = useParams();
    const textStyle = css`
        text-align: center;
        font-size: 1.3rem;
    `

    return (
        <>
            <h1 className={textStyle_h1}>Savings payment form</h1>
            <h2 className={textStyle_h2}>{savingsName}</h2>
            <p className={textStyle}>Fill in the form below to add amount to your savings goal</p>
            <ShortContainer>
                <PaymentForm/>
            </ShortContainer>
        </>
    )
}