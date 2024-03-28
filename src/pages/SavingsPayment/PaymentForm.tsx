import { css } from "@emotion/css";
import { Button } from "../../emotionjs-styles/styled-components";
import { inputStyle } from "../../emotionjs-styles/styles";
import { useState } from "react";
import { CurrentSavingsType, PreviousSavingsType, getLocalStorageItem, updateLocalStorageItem } from "../../data";
import { useNavigate, useParams } from "react-router-dom";

export default function PaymentForm() {
    const navigate = useNavigate();
    // Get the savingsName URL parameter value.
    const { savingsName } = useParams();
    // Set the amount state for storing the inputted amount.
    const [amount, setAmount] = useState<number>(0);
    // Get the current savings array.
    const currSavingsArr: CurrentSavingsType[] = getLocalStorageItem("currentSavings");
    const formStyle = css`
        padding: 1.3em;
    `
    /* The function looks for the item in the currSavingsArr with the same
    name as the savingsName value and if found, the value from the amount state
    is added to the current_amount value. If the new current_amount value exceeds or is equal to the target_amount value,
    the object is transferred from the currSavingsArr to prevSavingsArr and then both arrays are updated to the localStorage. 
    Otherwise, the array is then updated to the localStorage and then the user is sent back to the homepage. */
    function addAmount() {
        for (let i = 0; i < currSavingsArr.length; i++) {
            if (currSavingsArr[i].name === savingsName) {
                currSavingsArr[i].current_amount += amount;
                if (currSavingsArr[i].current_amount >= currSavingsArr[i].target_amount) {
                    const prevSavingsArr: PreviousSavingsType[] = getLocalStorageItem("previousSavings");
                    const newPrevObject : PreviousSavingsType = {
                        id: prevSavingsArr.length + 1,
                        name: currSavingsArr[i].name,
                        target_amount: currSavingsArr[i].target_amount,
                        date_of_creation: currSavingsArr[i].date_of_creation,
                        frequency: currSavingsArr[i].frequency,
                        dailyOption: currSavingsArr[i].dailyOption
                    }
                    const newCurrSavingsArr = currSavingsArr.filter(saving => saving.name != savingsName);
                    prevSavingsArr.push(newPrevObject);
                    updateLocalStorageItem("currentSavings", newCurrSavingsArr);
                    updateLocalStorageItem("previousSavings", prevSavingsArr);
                } else {
                    updateLocalStorageItem("currentSavings", currSavingsArr);
                }
                break;
            }
        }
        navigate("/");
    }

    return (
        <form className={formStyle} onSubmit={addAmount}>
            <label htmlFor="amount">Amount to add:</label>
            <br/>
            <input 
                style={inputStyle} 
                type="number" 
                id="amount" 
                className="amount"
                onChange={(e) => setAmount(Number(e.target.value))} 
                placeholder="Amount (in Ksh.)" required/>
            <br/><br/>
            <Button type="submit">Add amount</Button>
        </form>
    )
}