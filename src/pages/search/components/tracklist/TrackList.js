import "./trackList.css";
import React from "react";
import Track from "../track/Track";

export default function TrackList({ isRemoval, trackList, trackAktion }) {
  return (
    <div>
      {trackList.map((track) => {
        return (
          <Track
            key={track.id}
            track={track}
            trackAktion={trackAktion}
            isRemoval={isRemoval}
          />
        );
      })}
    </div>
  );
}
