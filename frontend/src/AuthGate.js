import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Signin from "./Signin";

const IS_REGISTERED_QUERY = gql`
  query {
    isRegistered
  }
`;

const AuthGate = ({ children }) => (
  <Query query={IS_REGISTERED_QUERY}>
    {({ loading, data }) => {
      if (loading) return <p>Loading...</p>;
      return data.isRegistered ? children : <Signin />;
    }}
  </Query>
);

export default AuthGate;
export { IS_REGISTERED_QUERY };
