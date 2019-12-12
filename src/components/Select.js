import React from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
    margin: 2%;

`;



const Select = (props) => {
    const {date, setDate, setIsClickedState} = props;

    return(
        <FormDiv>
            <form>
                <input type="date" onChange = {e => {
                    setDate(`&date=${e.target.value}`)
                       
                }}></input>
                <button onClick = {e => {
                    e.preventDefault();
                    console.log(date); 
                    setIsClickedState(false);
                }}>Close</button>
            </form>
        </FormDiv>
    )
}

export default Select