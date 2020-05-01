import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DisplayMyZoos from "./DisplayMyZoos";

export class MyZoosList extends Component {
  render() {
    return (
      <div className="myZoosBox">
        <div className="myZoosButtonBox">
          <div>My Zoo's</div>
          <div>
            <Link to="/createzoo">
              <button className="newZooButton">+ New</button>
            </Link>
          </div>
        </div>
        <div className="myZoosOverviewBox">
          <div>{<DisplayMyZoos />}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentZoo } = state;
  return { currentZoo };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyZoosList);
