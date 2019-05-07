import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import { IS_REGISTERED_QUERY } from "./AuthGate";

const SIGNOUT_MUTATION = gql`
  mutation {
    signout {
      message
    }
  }
`;

const Signout = () => {
  return (
    <Mutation
      mutation={SIGNOUT_MUTATION}
      refetchQueries={[{ query: IS_REGISTERED_QUERY }]}
    >
      {signout => <button onClick={signout}>Unlink Account</button>}
    </Mutation>
  );
};

export default Signout;
