import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { IS_REGISTERED_QUERY } from "./AuthGate";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($appCode: String!) {
    signin(appCode: $appCode) {
      message
    }
  }
`;

const Signin = () => {
  const [appCode, setAppCode] = useState("");

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      variables={{ appCode }}
      refetchQueries={[{ query: IS_REGISTERED_QUERY }]}
    >
      {(signin, { error, loading }) => (
        <div>
          <button onClick={signin} disabled={loading} aria-busy={loading}>
            Link Account
          </button>
        </div>
      )}
    </Mutation>
  );
};

export default Signin;
