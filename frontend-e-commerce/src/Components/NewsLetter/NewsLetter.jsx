import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Gét Exclucive offer on your Email</h1>
      <p>Subscribe to out newsletetr and stay updated</p>
      <div>
        <input type="email" placeholder="Enter Email" />
        <button>Subscribe </button>
      </div>
    </div>
  );
};

export default NewsLetter;
