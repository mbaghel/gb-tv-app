import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const LATEST_VIDS_QUERY = gql`
  query {
    getLatest {
      id
      name
      deck
    }
  }
`;

const ListVideos = () => {
  return (
    <Query query={LATEST_VIDS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error.message}</p>;
        return data.getLatest.map(video => (
          <div key={video.id}>
            <h5>{video.name}</h5>
            <p>{video.deck}</p>
          </div>
        ));
      }}
    </Query>
  );
};

export default ListVideos;
