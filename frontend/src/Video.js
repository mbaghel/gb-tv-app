import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Player from "./Player";

const GET_URLS_QUERY = gql`
  query GET_URLS_QUERY($id: String!) {
    getURLs(id: $id) {
      hd
      high
      low
      savedTime
    }
  }
`;

const Video = ({ id }) => {
  return (
    <Query query={GET_URLS_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        if (data) {
          const { savedTime, ...urls } = data.getURLs;
          return <Player savedTime={savedTime} urls={urls} />;
        }
      }}
    </Query>
  );
};

export default Video;
