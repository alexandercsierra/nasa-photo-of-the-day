import React from 'react'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fade from '@material-ui/core/Fade';


const Image = styled.img`
    width: 95%;
    box-shadow: 0px 0px 8px 1px #111111;
`;

const ImgDiv = styled.div`
    // border: 1px solid yellow;
    
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4%;
`;



const Img = (props) => {
    const {imgState} = props;
    return (
        <ImgDiv>
            <Image src={imgState}></Image>
        </ImgDiv>


        
    );




    };


export default Img;



