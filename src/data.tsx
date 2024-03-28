/* Since the focus of the assessment is on the front-end part,
   I created an array containing the savings and stored in a localStorage item for testing purposes.
   The dailyOption is used if the frequency is "Daily", otherwise, it remains null.
*/

export interface CurrentSavingsType {
    id: number,
    name: string,
    target_amount: number,
    current_amount: number,
    date_of_creation: string,
    frequency: string,
    dailyOption: string | null;
}

export interface PreviousSavingsType {
    id: number,
    name: string,
    target_amount: number,
    date_of_creation: string,
    frequency: string,
    dailyOption: string | null
}

export enum State {
    Visible = "visible",
    Invisible = "invisible"
}

const current_savings : CurrentSavingsType[] = [
    {   id: 1,
        name: "BK Savings",
        target_amount: 100000,
        current_amount: 23500,
        date_of_creation: "Fri Mar 22 2024",
        frequency: "Weekly",
        dailyOption: null
    },
    {   id: 2,
        name: "KB Savings",
        target_amount: 150000,
        current_amount: 44500,
        date_of_creation: "Fri Mar 22 2024",
        frequency: "Weekly",
        dailyOption: null
    }
]

const previous_savings : PreviousSavingsType[] = [
    {
        id: 1,
        name: "EMK Savings",
        target_amount: 150000,
        date_of_creation: "Fri Jan 05 2024",
        frequency: "Weekly",
        dailyOption: null
    }
]

localStorage.setItem("currentSavings", JSON.stringify(current_savings))
localStorage.setItem("previousSavings", JSON.stringify(previous_savings))

/* Function for getting the item from local storage 
and returns it as an object. */
export function getLocalStorageItem(item : string) {
    const itemValue = localStorage.getItem(item);
    if (typeof itemValue === 'string') {
        return JSON.parse(itemValue)
    }
}

// Function that updates the item at the local storage.
export function updateLocalStorageItem(item: string, 
object: CurrentSavingsType[] | PreviousSavingsType[]) {
    localStorage.setItem(item, JSON.stringify(object))
}