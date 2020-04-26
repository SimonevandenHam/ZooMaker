import React from "react";
import { Route } from "react-router-dom";

import NewZooContainer from "./components/NewZoo/NewZooContainer";
import CurrentZooContainer from "./components/CurrentZoo/CurrentZooContainer";
import "./style/generalStyle.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/createzoo" component={NewZooContainer} />
        <Route exact path="/currentzoo" component={CurrentZooContainer} />
      </div>
    );
  }
}
export default App;
