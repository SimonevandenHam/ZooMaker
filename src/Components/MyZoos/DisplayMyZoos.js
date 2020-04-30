import React, { Component } from "react";
import { connect } from "react-redux";

export class DisplayMyZoos extends Component {
  displayMyZoos = () => {
    return (
      <div>
        <div>{this.props.currentZoo.zooName}</div>
        <div>
          <button className="openButton">Open</button>
          <button className="deleteButton">Delete</button>
        </div>
      </div>
    );
  };

  deleteMyZoo = (zoo) => {
    this.props.REMOVE_ZOO(zoo);
  };
  render() {
    return <div>{this.displayMyZoos()}</div>;
  }
}

const mapStateToProps = (state) => {
  const { currentZoo } = state;
  return { currentZoo };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMyZoos);
