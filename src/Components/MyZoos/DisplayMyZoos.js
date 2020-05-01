import React, { Component } from "react";
import { connect } from "react-redux";

export class DisplayMyZoos extends Component {
  displayMyZoos = () => {
    return this.props.allZoos.zoos.map((zoo, index) => {
      return (
        <div key={index} className="localStorageZoo">
          <div>{zoo.zooName}</div>
          <div>
            <button className="openButton">Open</button>
            <button
              className="deleteButton"
              onClick={() => {
                console.log("klikt dit?");
                //  this.deleteMyZoo(this.props.allZoos.zoos);
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
    this.props.REMOVE_ZOO(zoo);
  };

  render() {
    return <div>{this.displayMyZoos()}</div>;
  }
}

const mapStateToProps = (state) => {
  const { allZoos } = state;
  return { allZoos };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMyZoos);
