# Playlist App With the Spotify API

### Introduction

This is a React web application. It allows users to search the Spotify library, create a custom playlist, then save it to the Spotify account.


Contents
========

 * [Why?](#why)
 * [Features](#features)
 * [How To Use?](#how-to-use)
 * [Technologies](#technologies)
 * [Project status](#project-status)

 
 ## Why?
 
 I wanted to practice my knowledge of React components, passing state, and requests with the Spotify API to build a website. I also want to create features that make easy to create playlists. All upgrades and challenges are a plus in the original project.

 ## Features
 
 * Users can search for songs by song title, artist and/or album
 * Users can see information about each song like title, artist, and album for songs they queried
 * Users can export their custom playlist to their personal Spotify account
 * Songs removed from the playlist are returned to the search results list
 * Users can't add the same song twice in the playlist
 * Users can't save empty playlist
 * Playlist and search informations don’t get cleared if the the access token has to be refreshed
 
 ## How To Use?
 
 You'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
 
 ```bash
# Clone this repository
$ git clone https://github.com/AlessandraMorita/Spotify_Playlist_Creator

# Go into the repository
$ cd Spotify_Playlist_Creator

# Installs the required dependencies
$ npm install

# Run the React project
$ npm start
```

## Technologies

* HTML
* CSS
* JavaScript
* React
* HTTP Requests and Responses
* Authentication

## Project status

The project is still being developed. Next challenges:

* Add intro text on home page
* Fix page responsiveness
* Restore search data after user redirection at login (the search results, playlist name and playlist)
* Include more pages in the search results list
* Include more than one track per artist at a time