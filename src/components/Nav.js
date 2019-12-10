import React from 'react'
import Select from "./Select"

const Nav = (props) => {
    const {setIsClickedState, isClickedState} = props;

    return (
        <div>
            <nav>
                <a href="#">Yesterday</a>
                <a href="#">Today</a>
                <a href="#" onClick = {e => {
                    e.preventDefault();
                    if (isClickedState){
                        setIsClickedState(false);
                    } else {
                        setIsClickedState(true);
                    }
                    
                }}>Custom Date</a>
            </nav>
        </div>
    )
}

export default Nav;