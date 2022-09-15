import React from "react";

function Card(props) {
  return (
    <div className="cell">
      <div className="cell_top">
        <h1 className="cell_name">{props.name}</h1>
        <img src={props.img} />
      </div>
    </div>
  );
}

export default Card;
