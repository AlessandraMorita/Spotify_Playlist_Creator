import "./search.css";
import React from "react";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import Playlist from "../../components/playlist/Playlist";

export default function Search() {
    return (
        <div className="searchPage">
            <SearchBar />
            <SearchResults />
            <Playlist />
        </div>
    );
}