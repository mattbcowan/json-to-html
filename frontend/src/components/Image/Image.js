import React from "react";
import "./Image.css";

const Image = ({ block }) => {
  return (
    <div className={`${block.shape} ${block.size} box`}>
      <img src={block.url} alt={block.alt} />
    </div>
  );
};

export default Image;
