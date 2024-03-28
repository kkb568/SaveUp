import { textStyle_h1 } from "../../emotionjs-styles/styles";
import CurSavings from "./CurrentSavings/CurSavings";
import PrevSavings from "./PreviousSavings/PrevSavings";

export default function Home() {
    return (
        <>
            <h1 className={textStyle_h1}>Welcome to Saveup</h1>
            <CurSavings/>
            <PrevSavings/>
        </>
    )
}