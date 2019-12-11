import React from "react"
import { directive } from "@babel/types";
import styled from 'styled-components'

const Frame = styled.iframe`
    border: none;
    box-shadow: 0px 0px 8px 5px #111111;
`;


const VideoLink = (props) => {
    const {videoLink} = props;
    return (
        <div>
            <Frame width="830" height="470" src={videoLink}></Frame>
        </div>
        
    )
}

export default VideoLink;