import React from 'react'


const VideoItem = ({ video,selectedVideo }) => {
    return (
        <div style={{borderBottom:'5px',padding:'8px',cursor:'pointer'}} onClick={()=>selectedVideo(video)} >
            <img src={video.snippet.thumbnails.medium.url} />
            {video.snippet.title}
        </div>
    )
}


export default VideoItem