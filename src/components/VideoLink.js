import React from "react"

const VideoLink = (props) => {
    const {imgState} = props;
    return (
        <a href={imgState}>Link</a>
    )
}

export default VideoLink;