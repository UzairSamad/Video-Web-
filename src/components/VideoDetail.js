import React from 'react'
import { Typography } from "@material-ui/core";



const VideoDetail = ({ video }) => {
    if (!video) {
        return <div> Loading..</div>
    }
    return (

        <div>
            <iframe width="800" height="400" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Typography style={{padding:'5px',fontSize:'25px'}}> {video.snippet.title} </Typography>
            <Typography> {video.snippet.description} </Typography>
            <Typography> {video.snippet.channelTitle} </Typography>
            <Typography> {video.snippet.publishTime} </Typography>
        </div>



    )
}

export default VideoDetail