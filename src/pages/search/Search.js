import "./search.css";
import React, { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import Playlist from "../../components/playlist/Playlist";

export default function Search() {
  const test = [
      { id: 1, artist: "Foo Fighters", album: "Rock", name: "Music 1" },
      { id: 2, artist: "Michael Jackson", album: "Pop", name: "Music 2" },
      { id: 3, artist: "Emicida", album: "Hip Hop", name: "Music 3" },
      {
        id: 4,
        artist: "Chitãozinho e Xororó",
        album: "Sertanejo",
        name: "Music 4",
      },
      { id: 5, artist: "Mc Coringa", album: "Funk", name: "Music 5" },
      { id: 6, artist: "Arlindo Cruz", album: "Samba", name: "Music 6" },
      { id: 7, artist: "Caetano Veloso", album: "MPB", name: "Music 7" },
    ];

  const [playlistName, setPlaylistName] = useState("");
  const [playlistTrackList, setPlaylistTrackList] = useState([]);
  const [searchResultList, setSearchResultList] = useState(test);
  const trackAktion = { addTrack, removeTrack };

  function handleNameChange(name) {
    setPlaylistName(name);
  }

  function addTrack(track, isRemoval) {
    if (isRemoval) {
      setSearchResultList((prevState) => [...prevState, track]);

    } else {
      setPlaylistTrackList((prevState) => [...prevState, track]);
      removeTrack(track, isRemoval);
    }
  }

  function removeTrack(track, isRemoval) {
    if (isRemoval) {
      const updatedPlaylist = playlistTrackList.filter((elem) => {
        return elem.id !== track.id;
      });
      
      setPlaylistTrackList(updatedPlaylist);
      addTrack(track, isRemoval);

    } else {
      const updatedSearchList = searchResultList.filter((elem) => {
        return elem.id !== track.id;
      });

      setSearchResultList(updatedSearchList);
    }
  }

  return (
    <div className="searchPage">
      <SearchBar />
      <SearchResults
        trackList={searchResultList}
        trackAktion={trackAktion}
      />
      <Playlist
        trackList={playlistTrackList}
        handleNameChange={handleNameChange}
        trackAktion={trackAktion}
      />
    </div>
  );
}
