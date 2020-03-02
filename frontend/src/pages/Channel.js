import React, { useState, useEffect } from "react";

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
    <div>
      <ul>
        <button onClick={backToPage}>voltar</button>
        {channels.map(channel => (
          <li key={channel.id}>
            <img
              src={channel.snippet.thumbnails.medium.url}
              alt={channel.snippet.title}
            ></img>
            <h1>{channel.snippet.title}</h1>
            <p>{channel.snippet.description}</p>
            <p>{channel.statistics.viewCount}</p>
            <p>{channel.statistics.subscriberCount}</p>
            <p>{channel.statistics.videoCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
