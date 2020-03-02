import React, { useState } from "react";
import ViewList from "../components/ViewList";
import SearchBar from "../components/SearchBar";

export default function Home({ history }) {
  const keyAPI = "AIzaSyCCz2cLBBA1lKv_PuD7DP_D_jmpA5mB628";
  const [term, setTerm] = useState("");
  const [resultyts, setResultyts] = useState([]);

  const [addClass, setAddClass] = useState("");
  const form = document.getElementById(".form");

  var searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${term}&key=${keyAPI}`;

  const handleChange = e => {
    setTerm(e.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();

    fetch(searchURL)
      .then(response => response.json())
      .then(responseJson => {
        const result = responseJson.items.map(obj => obj);
        setResultyts(result);
      })
      .catch(error => {
        console.log(error);
      });

    setAddClass("form-up");
    //form.classList.add(addClass);
  };

  const viewMore = id => {
    if (id.channelId !== "" && id.channelId != null) {
      history.push(`/channel/${id.channelId}`);
    } else {
      history.push(`/details/${id.videoId}`);
    }
  };

  return (
    <div className="container">
      <SearchBar
        handleFormSubmit={handleSubmit}
        handleFormChange={handleChange}
        value={term}
      />
      <ViewList result={resultyts} viewMore={viewMore} />
    </div>
  );
}
