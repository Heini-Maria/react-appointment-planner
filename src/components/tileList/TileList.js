import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  const  array= props.array;
  return (
    <div>
      {array.map((object, index) => (
      <div key={index}>
        <Tile object={object} />
        </div>
      ))}
    </div>
  );
};
