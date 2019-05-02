import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($appCode: String!) {
    signin(appCode: $appCode) {
      message
    }
  }
`;

class Signin extends React.Component {
  state = {
    appCode: ""
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={SIGNIN_MUTATION} variables={this.state}>
        {(signin, { error, loading, data }) => (
          <div>
            <h1>Sign in</h1>
            <form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signin();
                this.setState({ appCode: "" });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <p>Enter appCode here (case-sensitive):</p>
                <input
                  name="appCode"
                  placeholder="x0X0x"
                  type="text"
                  onChange={this.saveToState}
                />
                <button type="submit">Submit</button>
              </fieldset>
            </form>
            {error && error.message}
            {data && data.signin.message}
          </div>
        )}
      </Mutation>
    );
  }
}

export default Signin;
