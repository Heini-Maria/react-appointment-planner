import React from "react";

export const Tile = (props) => {
  const object= props.object;
  return (
    <div className="tile-container">
      {Object.values(object).map((objectValue, index) =>
      index === 0? (
        <p className='tile-title' key={index}>{objectValue}</p>
      ) : (
        <p className='tile' key={index}>{objectValue}</p>
      )
      )}
    </div>
  );
};
