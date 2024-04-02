import { Link, useParams } from "react-router-dom";
import { Button, ShortContainer } from "../../emotionjs-styles/styled-components";
import { linkStyle, textStyle_h1 } from "../../emotionjs-styles/styles";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "../../data";
import { css } from "@emotion/css";
import Error_404 from "../Error/Error_404";

interface savingsType {
    name: string,
    date: string,
    current_amount: number,
    target_amount: number,
    frequency: string,
    dailyOption: string | null
}

enum Const {
    Null = "null",
    Not_Null = "not_null"
}

export default function SavingsDetails() {
    // Get the parameter named 'savingsName'.
    const { savingsName } = useParams();
    // Store the found savings details in the savingsDetails state.
    const [savingsDetails, setSavingsDetails] = useState<savingsType>()
    // Store the null state for checking if the data is found or not.
    const [nullState, setNullState] = useState<Const>(Const.Not_Null)
    /* Using the useEffect hook for fetching data, 
    loop through the currSavingsArr array and set the savingsDetails state
    with the element whose name matches the savingsName parameter value 
    and the null state to not_null. */
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
                setNullState(Const.Not_Null)
                break;
            } else {
                setNullState(Const.Null)
            }
        }
    }, [])

    /*If the state is null, render the 404 error page (used the page because
    of scenarios such as the savings goal does not exist anymore or if a user
    is typed an incorrect link details at the url.) */
    return (
        nullState === Const.Null ? <Error_404/> : 
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