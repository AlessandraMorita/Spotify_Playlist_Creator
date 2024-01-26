import "./track.css";
import React, { useState } from "react";

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
        <h2>{track.name}</h2>
        <h3>
          {track.artist} | {track.album}
        </h3>
      </div>
      {renderAction()}
    </div>
  );
}
