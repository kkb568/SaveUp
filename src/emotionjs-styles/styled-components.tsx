import styled from "@emotion/styled";

const green = '#06B203';
// This is where I've created the styled components.
export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 1em 0;
    margin-bottom: 5em;
    box-shadow:  0px 0px 7px 3px rgba(0, 0, 0, 0.15);;
`
export const ShortContainer = styled.div`
    box-sizing: border-box;
    width: 80%;
    padding: 2em 0;
    margin-bottom: 5em;
    box-shadow:  0px 0px 7px 3px rgba(0, 0, 0, 0.15);;
    margin-left: 10%;
    border-radius: .5em;
`

export const Button = styled.button`
    cursor: pointer;
    background-color: ${green};
    color: white;
    padding: 1em;
    border-radius: 5px;
    border: none;
    font-size: 1em;
    transition: .3s ease;
    
    &:hover {
        background-color: ${green};
    }
    &:disabled {
        background-color: #016501;
    }
`