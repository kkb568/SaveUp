import { css } from "@emotion/css";
import { Button } from "../../../emotionjs-styles/styled-components";
import { Link } from "react-router-dom";
import { hrStyle, linkStyle } from "../../../emotionjs-styles/styles";

interface Props {
    id: number,
    name: string,
    current_amount: number,
    target_amount: number
}

export default function CurSavingData(props: Props) {
    return (
        <div className={css`
            margin-left: 2em;
        `}>
            <p>{props.id}. {props.name}, Current amount: Ksh. {props.current_amount},
            Amount left: {props.target_amount - props.current_amount}</p>
            <Button>
                <Link to={props.name} className={linkStyle}>View savings details</Link>
            </Button>
            <br/><br/>
            <hr className={hrStyle}/>
        </div>
    )
}