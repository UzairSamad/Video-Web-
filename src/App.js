import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";

import SearchBar from "./components/SearchBar";
import VideoList from './components/VideoList'
import VideoDetail from "./components/VideoDetail"

import youtube from "./apis/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [errorMessage,setErrorMessage] = useState(null)

  // React.useEffect(()=>{
  //   handleSubmit('JavaScript')
  // })


  async function handleSubmit(searchTerm) {
    try{
      const { data: { items: videos } } = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          key: "AIzaSyDM7nu75sZgnXDnuHoZXKq2ZD2KdzGeqUc",
          q: searchTerm,
        }
      });
      console.log(videos)
      setVideos(videos);
      setSelectedVideo(videos[0]);
    }catch(error) {
      let message = error.response.data.error.message.split('.')
      setErrorMessage(message)
      console.log(error.response.data.error.message)
    }
    

  }

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
    console.log(selectedVideo)
  }

  return (
    <Grid style={{ justifyContent: "center" }} container >
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail errorMessasge={errorMessage} video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );


}
