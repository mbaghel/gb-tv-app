import React from "react";
import { NavLink, Route } from "react-router-dom";
import ListVideos from "./ListVideos";

const PageWithNav = () => {
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
          <NavLink to="/latest">Latest</NavLink>
        </li>
        <li>
          <NavLink to="/shows">Shows</NavLink>
        </li>
        <li>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/latest" render={props => <ListVideos {...props} />} />
      <Route path="/search" render={() => <h1>Search</h1>} />
      <Route path="/shows" render={() => <h1>Shows</h1>} />
      <Route path="/watchlist" render={() => <h1>Watchlist</h1>} />
      <Route path="/login" render={() => <h1>Log in</h1>} />
    </div>
  );
};

export default PageWithNav;
