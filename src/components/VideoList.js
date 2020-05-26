import React from 'react'
import VideoItem from './VideoItem'
const VideoList = ({ videos,onVideoSelect }) => {

    const renderList = videos.map((item, index) => {
        return <VideoItem key={index} video={item} selectedVideo={onVideoSelect} />
    })
    return (
        <div>
            <div>{videos.length}</div>
            <div>{renderList}</div>
        </div>

    )
}
export default VideoList