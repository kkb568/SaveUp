import { Link, useParams } from "react-router-dom";
import { Button, ShortContainer } from "../../emotionjs-styles/styled-components";
import { linkStyle, textStyle_h1 } from "../../emotionjs-styles/styles";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "../../data";
import { css } from "@emotion/css";

interface savingsType {
    name: string,
    date: string,
    current_amount: number,
    target_amount: number,
    frequency: string,
    dailyOption: string | null
}

export default function SavingsDetails() {
    // Get the parameter named 'savingsName'.
    const { savingsName } = useParams();
    // Store the found savings details in the savingsDetails state.
    const [savingsDetails, setSavingsDetails] = useState<savingsType>()

    /* Using the useEffect hook for fetching data, 
    loop through the currSavingsArr array and set the state
    with the element whose name matches the savingsName parameter value. */
    useEffect(() => {
        const currSavingsArr = getLocalStorageItem("currentSavings")
        for (let i = 0; i < currSavingsArr.length; i++) {
            if (currSavingsArr[i].name === savingsName) {
                const savingsObject : savingsType = {
                    name: currSavingsArr[i].name,
                    date: currSavingsArr[i].date_of_creation,
                    current_amount: currSavingsArr[i].current_amount,
                    target_amount: currSavingsArr[i].target_amount,
                    frequency: currSavingsArr[i].frequency,
                    dailyOption: currSavingsArr[i].dailyOption
                }
                setSavingsDetails(savingsObject)
            }
        }
    }, [])

    return (
        <>
            <h1 className={textStyle_h1}>Current savings details</h1>
            <ShortContainer>
                <div className={css`
                    padding: 1em 0 2em 2em;
                `}>
                    <p>Name: {savingsDetails?.name}</p>
                    <p>Date of creation: {savingsDetails?.date}</p>
                    <p>Current amount: {savingsDetails?.current_amount}</p>
                    <p>Target amount: {savingsDetails?.target_amount}</p>
                    <p>Saving frequency: {savingsDetails?.frequency}</p>
                    {savingsDetails?.dailyOption != null && <p>Daily option: {savingsDetails.dailyOption}</p>}
                    <Button>
                        <Link className={linkStyle} to={`/${savingsName}/addSavings`}>Add amount</Link>
                    </Button>
                </div>
            </ShortContainer>
        </>
    )
}