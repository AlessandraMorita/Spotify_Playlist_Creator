import "./sidebar.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        {/* Sidebar list */}
        <ul className="list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active-nav-link" : "nav-link"
              }
            >
              <span className="fa-solid fa-house fa-1x"></span>
              <span className="textSidebar">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://www.spotify.com/de-en/"
              className={({ isActive }) =>
                isActive ? "nav-link active-nav-link" : "nav-link"
              }
              target="_blank"
            >
              <span className="fa-brands fa-spotify fa-1x"></span>
              <span className="textSidebar">Go to Spotify</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "nav-link active-nav-link" : "nav-link"
              }
            >
              <span className="fa-solid fa-magnifying-glass fa-1x"></span>
              <span className="textSidebar">Search</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Library */}
      <div className="sidebar__library">
        <button>
          <span className="fa-solid fa-book fa-1x"></span>
          <span className="textSidebar">Your Library</span>
        </button>

        {/* Plus button */}
        <span className="fa fa-plus fa-1x"></span>
      </div>
    </div>
  );
}
