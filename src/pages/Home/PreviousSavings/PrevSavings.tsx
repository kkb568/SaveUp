import { css } from "@emotion/css";
import { PreviousSavingsType, getLocalStorageItem } from "../../../data";
import { Container } from "../../../emotionjs-styles/styled-components";
import { textStyle_h2 } from "../../../emotionjs-styles/styles";
import PrevSavingData from "./PrevSavingData";

export default function PrevSavings() {
    const prevSavingsArr = getLocalStorageItem("previousSavings");
    const previousSavingsList = prevSavingsArr.map((saving: PreviousSavingsType) => {
        return (
            <PrevSavingData key={saving.id}
            id={saving.id}
            name={saving.name}
            target_amount={saving.target_amount}
            frequency={saving.frequency}
            date={saving.date_of_creation}/>
        )
    })

    return (
        <Container>
            <h2 className={textStyle_h2}>Previous savings</h2>
            {Number(prevSavingsArr.length) == 0 ? 
            <p className={css`
            text-align: center;
            `}>No current savings</p> : previousSavingsList}
        </Container>
    )
}