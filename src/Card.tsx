import React from "react";
import "./Card.scss";

interface CardProps {
  image: string;
  name: string;
}

function Card(props: CardProps) {
  return (
    <div className="Card">
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Card;
