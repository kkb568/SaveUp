import { css } from "@emotion/css";
import { Button, Container } from "../../../emotionjs-styles/styled-components";
import { Link } from "react-router-dom";
import { linkStyle, textStyle_h2 } from "../../../emotionjs-styles/styles";
import { CurrentSavingsType, getLocalStorageItem } from "../../../data";
import CurSavingData from "./CurSavingData";

export default function CurSavings() {
    const currSavingsArr = getLocalStorageItem("currentSavings");
    const currentSavingsList = currSavingsArr.map((saving: CurrentSavingsType) => {
        return (
            <CurSavingData key={saving.id}
            id={saving.id}
            name={saving.name}
            current_amount={saving.current_amount}/>
        )
    })

    return (
        <Container>
            <h2 className={textStyle_h2}>Current savings</h2>
            {/* If there's no current savings, a text is shown saying 'No current savings'
            otherwise, each current savings is rendered as specified
            in the CurSavingData component. The same goes for previous savings.*/}
            {Number(currSavingsArr.length) === 0 ? 
            <p className={css`
                text-align: center;
            `}>No current savings</p> : currentSavingsList}
            <br/>
            <div className={css`
                display: flex;
                justify-content: center;
            `}>
                <Button>
                    <Link to="/create_savings" className={linkStyle}>Create savings goal</Link>
                </Button>
            </div>
        </Container>
    )
}