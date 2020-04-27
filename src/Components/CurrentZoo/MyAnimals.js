import React, { Component } from "react";
import { connect } from "react-redux";

export class MyAnimals extends Component {
  displayCurrentZooAnimals = () => {
    return this.props.currentZoo.animals.map((animal, i) => {
      return (
        <div key={i} className="singleAnimalContainer">
          <div className="animalPrice">
            <img
              className="coins"
              src={`assets/images/Coins/2coins.svg`}
              alt="coins"
            />
            {animal.price}
          </div>
          <div>
            <img
              className="singleAnimalContainerAnimalImage"
              src={`assets/images/Animals/${animal.imageName}`}
              alt="animal"
            />
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        My Animals
        <div className="myAnimals">{this.displayCurrentZooAnimals()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentZoo } = state;
  return { currentZoo };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyAnimals);
