import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import { REMOVE_ZOO } from "../../store/allZoos/action";

export class DisplayMyZoos extends Component {
  state = {
    redirect: null,
  };

  displayMyZoos = () => {
    return this.props.allZoos.zoos.map((zoo, i) => {
      return (
        <div key={i} className="localStorageZoo">
          <div>{zoo.zooName}</div>
          <div>
            <button
              className="openButton"
              onClick={() => {
                console.log("klikt dit?");
                this.setState({ redirect: "/currentzoo" });
              }}
            >
              Open
            </button>
            <button
              className="deleteButton"
              onClick={() => {
                console.log("klikt dit?");
                this.deleteMyZoo(zoo);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  };

  deleteMyZoo = (zoo) => {
    let filterdZooArray = this.props.allZoos.zoos.filter(function (a) {
      return zoo.zooName !== a.zooName;
    });
    console.log("filter", filterdZooArray);
    this.props.REMOVE_ZOO(filterdZooArray);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return <div>{this.displayMyZoos()}</div>;
  }
}

const mapStateToProps = (state) => {
  const { allZoos } = state;
  return { allZoos };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      REMOVE_ZOO,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMyZoos);
