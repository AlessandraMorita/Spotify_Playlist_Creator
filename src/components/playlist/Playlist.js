import "./playlist.css";
import React, { useState } from "react";
import TrackList from "../../pages/search/components/tracklist/TrackList";

export default function Playlist({ trackList, handleNameChange, trackAktion }) {
  function handleOnChange(e) {
    handleNameChange(e.target.value);
  }

  function handleOnSubmit() {}

  return (
    <div>
      <input
        id="playlistName"
        placeholder="New Playlist Name"
        onChange={handleOnChange}
      />
      <TrackList
        trackList={trackList}
        trackAktion={trackAktion}
        isRemoval={true}
      />
      <button onSubmit={handleOnSubmit()}>Save to Spotify</button>
    </div>
  );
}
