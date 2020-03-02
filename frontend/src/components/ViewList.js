import React from "react";
import "./viewList.css";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ViewList(props) {
  return (
    <div className="view">
      {props.result.map((resulty, i) => (
        <li key={i} className="itemResult">
          <img
            className="imgResult"
            src={resulty.snippet.thumbnails.medium.url}
            alt={resulty.snippet.title}
          />
          <div className="infoResult">
            <p className="titleResult">{resulty.snippet.title}</p>
            <p className="descriptionResult">{resulty.snippet.description}</p>
          </div>
          <button
            className="btnResult"
            onClick={() => props.viewMore(resulty.id)}
          >
            <MdKeyboardArrowRight className="iconResult" />
          </button>
        </li>
      ))}
    </div>
  );
}
