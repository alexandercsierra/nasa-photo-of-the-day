import React from 'react'

const Footer = (props) => {
    const {descState, titleState} = props;
    return (
        <div>
            <h1>{titleState}</h1>
            <p>{descState}</p>
        </div>
    )
}

export default Footer;