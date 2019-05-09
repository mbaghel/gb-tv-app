import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { endpoint } from "./config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components/macro";

import openSans from "./open-sans.woff2";
import VideoPage from "./VideoPage";
import PageWithNav from "./PageWithNav";
import AuthGate from "./AuthGate";

const theme = {
  textColor: "#fafafa",
  secondaryText: "#999999",
  black: "#0c0c0c",
  bgColor: "#242628",
  horizontalOverscan: "64px",
  verticalOverscan: "38px",
  navPad: "206px"
};

const GlobalStyle = createGlobalStyle`
  /* open-sans-regular - latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: url(${openSans}) format("woff2");
}

html {
  box-sizing: border-box;
  font-size: 10px;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  font-size: 2.2rem;
  margin: 0;
  padding: 0;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body::-webkit-scrollbar {
  display: none;
}

iframe {
  height: 100vh;
  width: 100vw;
}

a {
  text-decoration: none;
  color: ${props => props.theme.textColor};
}
`;

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
    <ThemeProvider theme={theme}>
      <>
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
        <GlobalStyle />
      </>
    </ThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
