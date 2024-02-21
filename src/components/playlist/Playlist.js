import "./playlist.css";
import React from "react";
import TrackList from "../../pages/search/components/tracklist/TrackList";

export default function Playlist({ trackList, handleNameChange, trackAktion, savePlaylist }) {
  function handleOnChange(event) {
    handleNameChange(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault()
    savePlaylist();
  }

  return (
    <div className="playlist">
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

      <button className="saveOnSpotify" onClick={handleOnSubmit}>
        Save to Spotify
      </button>
    </div>
  );
}
