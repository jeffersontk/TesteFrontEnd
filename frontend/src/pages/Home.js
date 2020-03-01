import React, { useState } from "react";

export default function Youtube({ history }) {
  const keyAPI = "AIzaSyDNsDWSFTRFQYLRjfYp91HOOhKQm1e85RY";

  const [term, setTerm] = useState("");
  const [resultyts, setResultyts] = useState([]);

  var searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${term}&key=${keyAPI}`;

  const handleSubmit = event => {
    event.preventDefault();
  };

  const search = () => {
    fetch(searchURL)
      .then(response => response.json())
      .then(responseJson => {
        const result = responseJson.items.map(obj => obj);
        setResultyts(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const viewMore = id => {
    if (id.channelId !== "" && id.channelId != null) {
      history.push(`/channel/${id.channelId}`);
    } else {
      history.push(`/details/${id.videoId}`);
    }
  };

  return (
    <div>
      <form className="formSearch" onSubmit={handleSubmit}>
        <input
          className="imputSearch"
          placeholder="pesquisar"
          onChange={e => setTerm(e.target.value)}
          value={term}
        ></input>
        <button className="btnSearch" onClick={search}>
          search
        </button>
      </form>

      {resultyts.map((resulty, i) => (
        <ul>
          <li key={i}>
            <img
              src={resulty.snippet.thumbnails.medium.url}
              alt={resulty.snippet.title}
            />
            <h3>{resulty.snippet.title}</h3>
            <p>{resulty.snippet.description}</p>
            <button onClick={() => viewMore(resulty.id)}>ver mais</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
