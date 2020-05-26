// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import SearchBar from './components/SearchBar'
// import youtube from './apis/youtube'


// class App extends Component {

//   //   youtube.get('/search',
//   //     {
//   //       params: {
//   //         q: term,
//   //         part: 'snippet',
//   //         maxResults: 5,
//   //         KEY : "AIzaSyDM7nu75sZgnXDnuHoZXKq2ZD2KdzGeqUc"

//   //       }
//   //     })

//   /**
//    * Sample JavaScript code for youtube.search.list
//    * See instructions for running APIs Explorer code samples locally:
//    * https://developers.google.com/explorer-help/guides/code_samples#javascript
//    */

  
 




//   render() {
//     async function handleSubmit(searchTerm) {
//       const { data: { items: videos } } = await youtube.get("search", {
//         params: {
//           part: "snippet",
//           maxResults: 5,
//           key: "AIzaSyDM7nu75sZgnXDnuHoZXKq2ZD2KdzGeqUc",
//           q: searchTerm,
//         }
//       });
  
//       setVideos(videos);
//       setSelectedVideo(videos[0]);
//     }
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTemSearch} />
//         <button onclick="authenticate().then(loadClient)">authorize and load</button>
//         <button onclick="execute()">execute</button>
//       </div>

//     );
//   }
// }
// export default App;

import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import  SearchBar from "./components/SearchBar";
import VideoList from './components/VideoList'

import youtube from "./apis/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  async function handleSubmit(searchTerm) {
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
  }

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            {/* <VideoDetail video={selectedVideo} /> */}
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );


}
