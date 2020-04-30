import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
          <button type="submit" className="saveCurrentZooButton">
            Save
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentZoo } = state;
  return { currentZoo };
};

export default connect(mapStateToProps)(headerCurrentZoo);
