import React, { Component } from "react";
import { connect } from "react-redux";

export class DisplayMyZoos extends Component {
  displayMyZoos = () => {
    return (
      <div>
        <div>{this.props.currentZoo.zooName}</div>
        <div>
          <button className="openButton">Open</button>
          <button
            className="deleteButton"
            onClick={() => {
              console.log("klikt dit?");
              console.log(this.props.currentZoo);
              this.deleteMyZoo(this.props.currentZoo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  deleteMyZoo = (zoo) => {
    this.props.REMOVE_ZOO(zoo);
  };

  render() {
    console.log("allzoooos", this.props.allZoos);
    return <div>{this.displayMyZoos()}</div>;
  }
}

const mapStateToProps = (state) => {
  const { currentZoo, allZoos } = state;
  return { currentZoo, allZoos };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMyZoos);
