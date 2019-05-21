import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components/macro";

import Button from "./styles/Button";

import { IS_REGISTERED_QUERY } from "./AuthGate";
import Keyboard from "./Keyboard";

const PaddedPage = styled.div`
  padding: ${({ theme }) => theme.verticalOverscan}
    ${({ theme }) => theme.horizontalOverscan};
`;

const CodeSpace = styled.div`
  height: 4.4rem;
  width: 12rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: black;
`;

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
        <PaddedPage>
          <h1>Register App</h1>
          <p>
            You need a free Giant Bomb account to use this app (subscriber-only
            videos require a premium account)
          </p>
          <ol>
            <li>
              Login or register for a giantbomb.com account on another device
            </li>
            <li>
              Navigate to http://giantbomb.com/app/vewd on your logged-in device
            </li>
            <li>Enter the link code in the field below:</li>
          </ol>
          <CodeSpace>{appCode}</CodeSpace>
          <Keyboard
            handleLetters={addLetter}
            backSpace={backSpace}
            clear={clear}
          />
          <Button onClick={signin} disabled={loading} aria-busy={loading}>
            Link
          </Button>
        </PaddedPage>
      )}
    </Mutation>
  );
};

export default Signin;
