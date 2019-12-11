import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    box-shadow: 0px 0px 8px 1px #111111;
    width: 50%;
    margin: 4% auto;
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


const Footer = (props) => {
    const {descState, titleState} = props;
    return (
        <Container>
            <H1>{titleState}</H1>
            <ParaDiv>
                <p>{descState}</p>
            </ParaDiv>
            
        </Container>
    )
}

export default Footer;