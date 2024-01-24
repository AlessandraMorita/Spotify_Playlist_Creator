import "./sidebar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo-spotify.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        {/* Site logo */}
        <div className="logo">
          <a href="https://www.spotify.com/de-en/" target="_blank">
            <img src={logo} alt="Spotify logo" />
          </a>
        </div>

        {/* Sidebar list */}
        <ul className="list">
          <li>
            <NavLink
              to="https://www.spotify.com/de-en/"
              className={({ isActive }) =>
                isActive ? "nav-link active-nav-link" : "nav-link"
              }
              target="_blank"
            >
              <span className="fa fa-home"></span>
              <span>Go to Spotify</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "nav-link active-nav-link" : "nav-link"
              }
            >
              <span className="fa fa-search"></span>
              <span>Search</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar__library">
        <button>
          <span className="fa fas fa-book"></span>
          <span>My Library</span>
        </button>

        {/* Plus button */}
        <span className="fa fa-plus"></span>
      </div>
    </div>
  );
}
