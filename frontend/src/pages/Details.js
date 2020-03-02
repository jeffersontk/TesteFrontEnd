import React, { useState, useEffect } from "react";
import "./details.css";
export default function VideoView({ match, history }) {
  const [videos, setVideos] = useState([]);
  const keyAPI = "AIzaSyCCz2cLBBA1lKv_PuD7DP_D_jmpA5mB628";

  useEffect(() => {
    const videoURL = `https://www.googleapis.com/youtube/v3/videos?id=${match.params.id}&part=snippet,statistics&maxResults=1&key=${keyAPI}`;
    function loadVideo() {
      fetch(videoURL)
        .then(response => response.json())
        .then(responseJson => {
          const video = responseJson.items.map(obj => obj);
          setVideos(video);
        })
        .catch(error => {
          console.log(error);
        });
    }
    loadVideo();
  }, [match.params.id]);

  const backToPage = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <button onClick={backToPage}>voltar</button>
      {videos.map(video => (
        <li className="VideoDetails" key={video.id}>
          <iframe
            title={video.snippet.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h1>{video.snippet.title}</h1>
          <p>{video.snippet.description}</p>
          <p>{video.statistics.viewCount}</p>
          <p>{video.statistics.likeCount}</p>
          <p>{video.statistics.dislikeCount}</p>
        </li>
      ))}
    </div>
  );
}
