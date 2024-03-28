import { css } from "@emotion/css"
import { hrStyle } from "../../../emotionjs-styles/styles"

interface Props {
    id: number,
    name: string,
    target_amount: number,
    frequency: string,
    date: string
}

export default function PrevSavingData(props: Props) {
    return (
        <div className={css`
            margin-left: 2em;
        `}>
            <p>{props.id}. {props.name}, Target amount: Ksh. {props.target_amount},
            Frequency: {props.frequency}, Date of creation: {props.date} </p>
            <hr className={hrStyle}/>
        </div>
    )
}