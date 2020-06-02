import React from 'react'
import VideoItem from './VideoItem'
import Grid from '@material-ui/core/Grid';
const VideoList = ({ videos, onVideoSelect }) => {

    const renderList = videos.map((item, index) => {

        return <Grid  item xs={6} md={4} sm={2}  className="list">
            <VideoItem key={index} video={item} selectedVideo={onVideoSelect} />
           </Grid>
    })
    return (

        <div>{renderList}</div>


    )
}
export default VideoList