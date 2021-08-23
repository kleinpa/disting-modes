import React from "react";
import "./Card.scss";
import { Mode } from "./DistingModes";

interface CardProps {
  mode: Mode;
}

export function Card(props: CardProps): JSX.Element {
  return (
    <div className="card">
      <img
        src={`${process.env.PUBLIC_URL}/images/${props.mode.image}`}
        alt={props.mode.name}
      />
    </div>
  );
}

interface CardGridProps {
  modes: Mode[];
}
export function CardGrid(param: CardGridProps): JSX.Element {
  return (
    <div className="card-grid">
      {param.modes.map((mode) => (
        <div key={mode.id} className="card-container">
          <Card mode={mode} />
        </div>
      ))}
    </div>
  );
}
