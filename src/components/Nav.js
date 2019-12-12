import React from 'react'
import Select from "./Select"
import styled from 'styled-components'
import { setDate } from 'date-fns/fp';

const NavBar = styled.nav`
    // background: rgba(0,100,200,.5);
    background: #343a40;
    // background: white;
    // padding: .5% 1%;
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Title = styled.p`
    color: white;
    margin: .5% 7%;
    font-size: 1.2rem;
`;

const Links = styled.a`
    text-decoration: none;
    color: white;
    margin: .5% 7%;
    font-size: 1.2rem;

`;

const Icon = styled.i`
    color: white;
    font-size: 2rem;
`;


const Nav = (props) => {
    const {setIsClickedState, isClickedState, setClassState, setDate} = props;
    

    return (
        <div>
            
            <NavBar>
                
                <Title><Icon className="fas fa-user-astronaut"></Icon>    NASA Photo of the Day</Title>
                <Links href="#" onClick = {e => {
                    e.preventDefault();
                    let selectedDate = new Date();
                    const formatDate = () => {
                        setDate("&date=" + selectedDate.getFullYear() + "-" + (selectedDate.getMonth()+1) + "-" + selectedDate.getDate());
                    
                      };
                      formatDate();
                    
                }}>Today's Photo</Links>
                {/* <Select /> */}
                {/* <Links href="#" onClick = {e => {
                    e.preventDefault();
                    if (isClickedState){
                        setIsClickedState(false);
                        setClassState("hidden");
                        console.log("hide");
                    } else {
                        setIsClickedState(true);
                        setClassState("flex");
                        console.log("show");
                    }
                    
                }}>Custom Date</Links> */}
            </NavBar>
        </div>
    )
}

export default Nav;