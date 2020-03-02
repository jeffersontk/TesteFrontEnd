import React, { useState, useEffect } from "react";
import "./details.css";
import { MdChevronLeft } from "react-icons/md";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
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
      <div className="VideoDetails">
        <button className="btnBack" onClick={backToPage}>
          <MdChevronLeft className="iconBack" />
        </button>
        {videos.map(video => (
          <li key={video.id} className="liVideo">
            <div className="video">
              <div className="video-sobre">
                <iframe
                  className="iframeVideo"
                  title={video.snippet.title}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="descriptionVideo">
                <h3 className="videoTitle">{video.snippet.title}</h3>
                <span className="statisticsSpan">
                  {" "}
                  Visualizações {video.statistics.viewCount}
                </span>
                <span className="statisticsSpan">
                  <AiOutlineLike className="iconStatistcs" />
                  {video.statistics.likeCount}
                </span>
                <span className="statisticsSpan">
                  <AiOutlineDislike className="iconStatistcs" />
                  {video.statistics.dislikeCount}
                </span>

                <p className="videoDescription">
                  <strong>Descrição</strong> <br></br>
                  <br></br>
                  {video.snippet.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
