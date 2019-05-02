import React from "react";
import { NavLink, Route } from "react-router-dom";
import ListVideos from "./ListVideos";
import Signin from "./Signin";

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
          <NavLink to="/signin">Sign In</NavLink>
        </li>
      </ul>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/latest" render={props => <ListVideos {...props} />} />
      <Route path="/search" render={() => <h1>Search</h1>} />
      <Route path="/shows" render={() => <h1>Shows</h1>} />
      <Route path="/watchlist" render={() => <h1>Watchlist</h1>} />
      <Route path="/signin" render={props => <Signin {...props} />} />
    </div>
  );
};

export default PageWithNav;
