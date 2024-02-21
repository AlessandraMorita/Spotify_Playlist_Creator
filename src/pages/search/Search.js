import "./search.css";
import React, { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import Playlist from "../../components/playlist/Playlist";
import { data } from "../../data";
import { Spotify } from "../../components/Spotify";
import { currentToken } from "../../components/Spotify";

export default function Search() {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistURIs, setPlaylistURIs] = useState([]);
  const [playlistTrackList, setPlaylistTrackList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResultList, setSearchResultList] = useState([]);
  const trackAktion = { addTrack, removeTrack };

  function handleLogin() {
    Spotify.redirectToSpotifyAuthorize();
  }

  function handleSearchInput(input) {
    setSearchInput(input);
  }

  async function search() {
    const accessToken = currentToken.access_token();

    if (!accessToken) {
      handleLogin();
    } else {
      if (searchInput) {
        const searchResults = await Spotify.search(searchInput);

        if (searchResults) {
          setSearchResultList(searchResults.tracks["items"]);
        }
      }
    }
  }

  function handleNameChange(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    if (playlistTrackList.length > 0) {
      Spotify.addItems(playlistName, playlistURIs);
    }
  }

  function addTrack(track, isRemoval) {
    // If isRemoval, the track is in the playlistTrackList and can be removed. When removed, it's added to searchResultList
    // Else, the track is in the searchResultList and can be added to the playlistTrackList. When added, it's removed from searchResultList
    if (isRemoval) {
      const isTrackAddedToSearchResultList = searchResultList.some((elem) => {
        return track.id === elem.id;
      });

      if (!isTrackAddedToSearchResultList) {
        setSearchResultList((prevState) => [...prevState, track]);
      }
    } else {
      const isTrackAddedToPlaylist = playlistTrackList.some((elem) => {
        return track.id === elem.id;
      });

      if (!isTrackAddedToPlaylist) {
        setPlaylistTrackList((prevState) => [...prevState, track]);
        setPlaylistURIs((prevState) => [...prevState, track.uri]);
      }

      removeTrack(track, isRemoval);
    }
  }

  function removeTrack(track, isRemoval) {
    // If isRemoval, the track is in the playlistTrackList and can be removed. When removed, it's added to searchResultList
    // Else, the track is in the searchResultList and can be added to the playlistTrackList. When added, it's removed from searchResultList
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
      <SearchBar
        handleLogin={handleLogin}
        search={search}
        searchInput={handleSearchInput}
      />
      <SearchResults trackList={searchResultList} trackAktion={trackAktion} />
      <Playlist
        trackList={playlistTrackList}
        handleNameChange={handleNameChange}
        savePlaylist={savePlaylist}
        trackAktion={trackAktion}
      />
    </div>
  );
}
