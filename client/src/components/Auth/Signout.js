import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";
const handleSingout = (client, history) => {
  localStorage.setItem("token", "");
  client.resetStore();
  history.push("/");
};

const Signout = ({ history }) => (
  <ApolloConsumer>
    {(client) => {
      return (
        <button onClick={() => handleSingout(client, history)}>Signout</button>
      );
    }}
  </ApolloConsumer>
);

export default withRouter(Signout);
