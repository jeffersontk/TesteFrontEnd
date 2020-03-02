import React, { useState, useEffect } from "react";
import "./channel.css";
import { MdChevronLeft } from "react-icons/md";
export default function ChannelView({ match, history }) {
  const [channels, setChannel] = useState([]);
  const keyAPI = "AIzaSyCCz2cLBBA1lKv_PuD7DP_D_jmpA5mB628";

  useEffect(() => {
    const channelURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${match.params.id}&key=${keyAPI}`;
    function loadChannel() {
      fetch(channelURL)
        .then(response => response.json())
        .then(responseJson => {
          const channel = responseJson.items.map(obj => obj);
          setChannel(channel);
        })
        .catch(error => {
          console.log(error);
        });
    }
    loadChannel();
  }, [match.params.id]);
  const backToPage = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <div className="channelDetails">
        <button className="btnBack" onClick={backToPage}>
          <MdChevronLeft className="iconBack" />
        </button>
        {channels.map(channel => (
          <li key={channel.id} className="liVideo">
            <img
              className="imgChannel"
              src={channel.snippet.thumbnails.medium.url}
              alt={channel.snippet.title}
            ></img>
            <h3 className="channelTitle">{channel.snippet.title}</h3>
            <span className="statisticsSpan">
              Visualizações {channel.statistics.viewCount}
            </span>
            <br></br>
            <span className="statisticsSpan">
              Inscritos {channel.statistics.subscriberCount}
            </span>
            <br></br>
            <span className="statisticsSpan">
              Total de videos{channel.statistics.videoCount}
            </span>
            <h4 className="descriptionTitle">descrição</h4>
            <p className="ChannelDescription">{channel.snippet.description}</p>
          </li>
        ))}
      </div>
    </div>
  );
}
