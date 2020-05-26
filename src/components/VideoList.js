import React from 'react'
import VideoItem from './VideoItem'
const VideoList = ({ videos, onVideoSelect }) => {

    const renderList = videos.map((item, index) => {
        return <VideoItem key={index} video={item} selectedVideo={onVideoSelect} />
    })
    return (

        <div>{renderList}</div>


    )
}
export default VideoList