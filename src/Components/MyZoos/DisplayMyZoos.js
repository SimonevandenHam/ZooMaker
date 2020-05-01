import React, { Component } from "react";
import { connect } from "react-redux";

export class DisplayMyZoos extends Component {
  displayMyZoos = () => {
    console.log("allzooosayyyrau", this.props.allZoos.zoos);
    return this.props.allZoos.zoos.map((zoo, index) => {
      return (
        <div>
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
