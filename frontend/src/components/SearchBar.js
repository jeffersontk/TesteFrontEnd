import React from "react";
import "./searchBar.css";
import { MdSearch } from "react-icons/md";

export default function SearchBar(props) {
  return (
    <>
      <form id="form" className="formSearch" onSubmit={props.handleFormSubmit}>
        <input
          className="inputSearch"
          placeholder="pesquisar"
          onChange={props.handleFormChange}
          value={props.value}
        ></input>
        <button id="btn-submit" type="submit" className="btnSearch">
          <MdSearch className="searchIcon" />
        </button>
      </form>
    </>
  );
}
