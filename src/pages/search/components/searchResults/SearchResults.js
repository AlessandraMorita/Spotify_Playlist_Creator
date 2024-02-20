import "./searchResults.css";
import React from "react";
import TrackList from '../tracklist/TrackList';

export default function SearchResults({ trackList, trackAktion }) {
  return (
    <div className="searchResults">
      <h2>Top results</h2>
      <TrackList
        trackList={trackList}
        trackAktion={trackAktion}
        isRemoval={false}
      />
    </div>
  );
}
