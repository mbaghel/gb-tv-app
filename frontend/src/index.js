import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { endpoint } from "./config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import VideoPage from "./VideoPage";
import PageWithNav from "./PageWithNav";

const client = new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
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
        <Switch>
          <Route path="/video/:id" component={VideoPage} />
          <Route component={PageWithNav} />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
