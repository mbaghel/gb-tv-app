import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shows">Shows</NavLink>
        </li>
        <li>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </li>
        <li>
          <NavLink to="/signout">Sign Out</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
