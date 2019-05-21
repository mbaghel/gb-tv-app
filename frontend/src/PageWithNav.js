import React from "react";
import { Route } from "react-router-dom";

import Nav from "./Nav";
import ListVideos from "./ListVideos";
import Signout from "./Signout";

const PageWithNav = () => {
  return (
    <div>
      <Nav />
      <Route exact path="/" render={props => <ListVideos {...props} />} />
      <Route path="/search" render={() => <h1>Search</h1>} />
      <Route path="/shows" render={() => <h1>Shows</h1>} />
      <Route path="/watchlist" render={() => <h1>Watchlist</h1>} />
      <Route path="/signout" render={() => <Signout />} />
    </div>
  );
};

export default PageWithNav;
