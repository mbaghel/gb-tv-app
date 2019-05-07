import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { endpoint } from "./config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";
import VideoPage from "./VideoPage";
import PageWithNav from "./PageWithNav";
import AuthGate from "./AuthGate";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? endpoint //process.env.REACT_APP_BACKEND
      : endpoint,
  request: operation => {
    operation.setContext({
      fetchOptions: {
        credentials: "include"
      }
    });
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <AuthGate>
          <Switch>
            <Route path="/video/:id" component={VideoPage} />
            <Route component={PageWithNav} />
          </Switch>
        </AuthGate>
      </div>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
