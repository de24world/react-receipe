import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

const handlesingout = (client, history) => {
  localStorage.setItem("token", "");
  client.resetStore();
  history.pushState("/");
};

const Signout = ({ history }) => (
  <ApolloConsumer>
    {(client) => {
      return (
        <button onClicke={() => handlesingout(client, history)}>Signout</button>
      );
    }}
  </ApolloConsumer>
);

export default withRouter(Signout);
