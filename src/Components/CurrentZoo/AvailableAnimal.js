import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ADD_ANIMAL } from "../../store/currentZoo/action";

export class AvailableAnimal extends Component {
  displayImage = () => {
    //change to tenary
    if (this.props.animal.imageName === undefined) {
      return (
        <img
          className="animalImage"
          src={"assets/images/Animals/Placeholder.png"}
          alt="noAnimal"
        />
      );
    } else {
      return (
        <img
          className="animalImage"
          src={`assets/images/Animals/${this.props.animal.imageName}`}
          alt="animal"
        />
      );
    }
  };

  displayCosts = () => {
    let price = this.props.animal.price;
    return (
      <div>
        <img
          className="coins"
          src={`assets/images/Coins/2coins.svg`}
          alt="coins"
        />
        {price}
      </div>
    );
  };

  saveAnimalToStore = (animal) => {
    this.props.ADD_ANIMAL(animal);
  };

  render() {
    return (
      <div className="displayAnimalDetails">
        <div className="animalNamePhoto">
          {this.props.animal.name}
          {this.displayImage()}
        </div>
        <div>{this.displayCosts()}</div>
        <button
          onClick={() => {
            this.saveAnimalToStore(this.props.animal);
          }}
        >
          + add
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentZoo } = state;
  return { currentZoo };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ADD_ANIMAL,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AvailableAnimal);
