import React from "react";
import { Route } from "react-router-dom";

import NewZooContainer from "./Components/NewZoo/NewZooContainer";
import "./style/generalStyle.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/createzoo" component={NewZooContainer} />
      </div>
    );
  }
}
export default App;
