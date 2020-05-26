import React from 'react'
import VideoItem from './VideoItem'
const VideoList = ({ videos }) => {

    const renderList = videos.map((item, index) => {
        return <VideoItem key={index} video={item} />
    })
    return (
        <div>
            <div>{videos.length}</div>
            <div>{renderList}</div>
        </div>

    )
}
export default VideoList