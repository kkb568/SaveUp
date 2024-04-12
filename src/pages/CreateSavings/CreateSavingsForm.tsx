import { css } from "@emotion/css";
import { Button } from "../../emotionjs-styles/styled-components";
import { inputStyle, labelStyle, selectStyle } from "../../emotionjs-styles/styles";
import { useState } from "react";
import { getLocalStorageItem, updateLocalStorageItem } from "../../data";
import { useNavigate } from "react-router-dom";

// Style for the form.
const formStyle = css`
    margin: 0 2em;
`
// Interface for formData state.
interface dataObject {
    name: string,
    target_amount: number,
    frequency: string,
    dailyOption: string | null
}

export default function CreateSavingsForm() {
    // Get the array containing the current savings.
    const currSavingsArr = getLocalStorageItem("currentSavings");
    const navigate = useNavigate();
    // Create state for temporarily store inputted data.
    const [formData, setFormData] = useState<dataObject>({
        name: "",
        target_amount: 0,
        frequency: "",
        dailyOption: null
    })

    /* Function used to set the inputted data to the formData state 
    using the event object.*/
    function addFormData(e: any) {
        var key = e.target.className;
        var value = e.target.value;
        setFormData(prevState => {
            return {...prevState, [key]: value}
        })
    }

    /* The function is used to add a new savings object to the currSavingsArr array.
    The id is created by adding a value to the array's length and the date is created using a new Date string.
    Afterwards, all of the data is put to one object and then the object is added to the array.
    The array is stored to the localStorage and then the user is taken to the homepage. */
    function addSavingGoal() {
        const idValue: number = currSavingsArr.length + 1;
        const date = new Date().toDateString();
        const savingObject = {
            id: idValue,
            name: formData.name,
            target_amount: formData.target_amount,
            current_amount: 0,
            date_of_creation: date,
            frequency: formData.frequency,
            dailyOption: formData.dailyOption
        };
        currSavingsArr.push(savingObject);
        updateLocalStorageItem("currentSavings", currSavingsArr)
        navigate("/");
    }

    return (
        <form className={formStyle} onSubmit={addSavingGoal}>
            <label className={labelStyle} htmlFor="name">Name:</label>
            <br/>
            <input onChange={e => addFormData(e)} style={inputStyle} type="text" className="name" id="name" placeholder="Name" required/>
            <br/><br/>
            <label className={labelStyle} htmlFor="target_amount">Target amount:</label>
            <br/>
            <input onChange={e => addFormData(e)} style={inputStyle} type="number" className="target_amount" id="target_amount" placeholder="Target amount (in Ksh.)" required/>
            <br/><br/>
            <label className={labelStyle} htmlFor="frequency">Savings frequency:</label>
            <br/>
            <select onChange={e => addFormData(e)} id="frequency" className="frequency" style={selectStyle} required>
                <option value="">-- Select frequency --</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
            </select>
            {formData.frequency === "Daily" && 
                <>
                    <br/><br/>
                    <label htmlFor="dailyOption">If daily, do you want to save everyday or on weekdays only:</label>
                    <br/>
                    <select onChange={e => addFormData(e)} id="dailyOption" className="dailyOption" style={selectStyle} required>
                        <option value="">-- Select option --</option>
                        <option value="Everyday">Everyday</option>
                        <option value="Weekdays">Weekdays</option>
                    </select>
                </>
            }
            <br/><br/>
            <Button type="submit">Create savings goal</Button>
        </form>
    )
}