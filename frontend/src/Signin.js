import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { IS_REGISTERED_QUERY } from "./AuthGate";
import Keyboard from "./Keyboard";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($appCode: String!) {
    signin(appCode: $appCode) {
      message
    }
  }
`;

const Signin = () => {
  const [appCode, setAppCode] = useState("");

  const addLetter = e => {
    setAppCode(appCode + e.target.innerText);
  };

  const backSpace = () => {
    setAppCode(appCode.slice(0, -1));
  };

  const clear = () => {
    setAppCode("");
  };

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      variables={{ appCode }}
      refetchQueries={[{ query: IS_REGISTERED_QUERY }]}
    >
      {(signin, { error, loading }) => (
        <div>
          <h1>Register App</h1>
          <div>{appCode}</div>
          <Keyboard
            handleLetters={addLetter}
            backSpace={backSpace}
            clear={clear}
          />
          <button onClick={signin} disabled={loading} aria-busy={loading}>
            Link Account
          </button>
        </div>
      )}
    </Mutation>
  );
};

export default Signin;
