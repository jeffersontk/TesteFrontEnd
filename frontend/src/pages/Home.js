import React, { useState } from "react";
import ViewList from "../components/ViewList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const keyAPI = "AIzaSyCCz2cLBBA1lKv_PuD7DP_D_jmpA5mB628";

  const [term, setTerm] = useState("");
  const [resultyts, setResultyts] = useState([]);

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
  };
  return (
    <div>
      <SearchBar
        handleFormSubmit={handleSubmit}
        handleFormChange={handleChange}
        value={term}
      />
      <ViewList result={resultyts} />
    </div>
  );
}
