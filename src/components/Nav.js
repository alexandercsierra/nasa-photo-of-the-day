import React from 'react'
import Select from "./Select"
import styled from 'styled-components'

const NavBar = styled.nav`
    background: rgba(0,100,200,.5);
    padding: .5% 1%;
    margin-bottom: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const Title = styled.p`
    color: white;
    margin: 2% 7%;
    font-size: 1.2rem;
`;

const Links = styled.a`
    text-decoration: none;
    color: white;
    margin: 2% 7%;
    font-size: 1.2rem;

`;


const Nav = (props) => {
    const {setIsClickedState, isClickedState} = props;

    return (
        <div>
            
            <NavBar>
                <Title>NASA Photo of the Day</Title>
                <Links href="#">Yesterday</Links>
                <Links href="#">Today</Links>
                <Links href="#" onClick = {e => {
                    e.preventDefault();
                    if (isClickedState){
                        setIsClickedState(false);
                    } else {
                        setIsClickedState(true);
                    }
                    
                }}>Custom Date</Links>
            </NavBar>
        </div>
    )
}

export default Nav;