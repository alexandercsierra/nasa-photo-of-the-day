import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    box-shadow: 0px 0px 8px 1px #111111;
    width: 50%;
    margin: 2% auto;
    padding: 1%;
    background: rgba(0,100,200,.5);
`

const H1 = styled.h1`
    
    color: white;
    
`;

const ParaDiv = styled.div`
    // width: 50%;
    margin: 0 auto;
    color: white;
    
`;




const Header = (props) => {
    const {date} = props;
    let textDate = function(date){
        if (date !== "Today") {
            let arr = date.split("")
            let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
            let dateArr = [];
            arr.forEach((char) => {
                if (numbers.includes(char)){
                    dateArr.push(char);
                }
            }); console.log(dateArr);
        } 
    }
    return (
        <Container>
            <H1>NASA Photo of the Day</H1>
            <ParaDiv>
                <p>Photo for {textDate(date)}</p>
            </ParaDiv>
            
        </Container>
    )
}

export default Header;