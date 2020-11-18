import logo from "./logo.svg";
import "./App.css";

import { Query } from "react-apollo";

import { GETL_ALL_RECIPES } from "./queries";

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Query query={GETL_ALL_RECIPES}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div> Error</div>;
          console.log(data);
          return <p>Recipes</p>;
        }}
      </Query>
    </div>
  );
}

export default App;
