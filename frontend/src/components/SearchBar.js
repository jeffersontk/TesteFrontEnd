import React, { useState } from "react";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="pesquisar"
          onChange={e => setTerm(e.target.value)}
          value={term}
        ></input>
        <button>search</button>
      </form>
    </div>
  );
}
