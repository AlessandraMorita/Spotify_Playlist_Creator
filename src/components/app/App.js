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

    //   <footer>
    //     <ul>
    //       <li>About Me</li>
    //       <li>My GitHub</li>
    //       <li>Projects</li>
    //     </ul>
    //   </footer>
  );
}

export default App;
