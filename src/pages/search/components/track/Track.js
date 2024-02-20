import "./track.css";
import React from "react";

export default function Track({ isRemoval, track, trackAktion }) {
  const { addTrack, removeTrack } = trackAktion;

  function handleOnClick() {
    if (isRemoval) {
      removeTrack(track, isRemoval);
    } else {
      addTrack(track, isRemoval);
    }
  }

  function renderAction() {
    if (isRemoval) {
      return (
        <button className="track-action" onClick={handleOnClick}>
          -
        </button>
      );
    } else {
      return (
        <button className="track-action" onClick={handleOnClick}>
          +
        </button>
      );
    }
  }

  return (
    <div className="track">
      <div className="track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artists[0].name} | {track.album.name}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}
