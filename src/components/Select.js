import React from 'react';


const Select = (props) => {
    const {date, setDate, setIsClickedState} = props;
    return(
        <div>
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
        </div>
    )
}

export default Select