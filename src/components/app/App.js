import "../../styles/reset.css";
import "./App.css";
import "../../styles/vars.css";
import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../root/Root";
import Search from "../../pages/search/Search";

function App() {
  return (
    <RouterProvider 
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Root />}>
            <Route path="/search" element={<Search />} />

          </Route>
        ))} />

    // <div className="App">
    //   <header className="App-header">
    //     <h1>Playlist Creator - Spotify</h1>
    //   </header>
    //   <main>
    //     <h2>Let's create!</h2>
    //     <Sidebar />
    //     <SearchBar />
    //     <Playlist />
    //     <SearchResults />
    //   </main>
    //   <footer>
    //     <ul>
    //       <li>About Me</li>
    //       <li>My GitHub</li>
    //       <li>Projects</li>
    //     </ul>
    //   </footer>
    // </div>
  );
}

export default App;
