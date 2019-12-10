import React from 'react'

const Img = (props) => {
    const {imgState} = props;
    return (
        <div>
            <img src={imgState}></img>
        </div>
    )
}

export default Img;