import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ADD_ZOO } from "../../store/allZoos/action";
import "../../style/header.css";

export class headerCurrentZoo extends Component {
  calculateCurrentZooBudget = () => {
    let currentBudget = this.props.currentZoo.budget;
    this.props.currentZoo.animals.forEach((animal) => {
      currentBudget -= animal.price;
    });
    if (currentBudget < 0) {
      return alert("you are spending to much!");
    } else {
      return currentBudget;
    }
  };

  saveZoo = (zoo) => {
    console.log("save kmop", this.props);
    this.props.ADD_ZOO(zoo);
  };

  render() {
    return (
      <div className="currentZooHeader">
        <div>
          <Link to="/">
            <img
              src="/assets/images/Animals/PuffinBird.png"
              alt="ZooMaker Logo"
              className="logo"
            />
          </Link>
          ZooMaker
        </div>
        <div>
          {this.props.currentZoo.zooName}
          <img
            src="/assets/images/Coins/stackCoins.svg"
            alt="budget"
            className="stackCoins"
          />
          {this.calculateCurrentZooBudget()}
        </div>
        <div className="buttonBox">
          <button
            onClick={() => {
              this.saveZoo(this.props.currentZoo);
            }}
            className="saveCurrentZooButton"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentZoo, allZoos } = state;

  return { currentZoo, allZoos };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ADD_ZOO,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(headerCurrentZoo);
