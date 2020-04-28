import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { SET_SELECTED_ANIMALS } from "../../store/currentZoo/action";

export class MyAnimals extends Component {
  displayCurrentZooAnimals = () => {
    return this.props.currentZoo.animals.map((animal, i) => {
      return (
        <div key={i} className="singleAnimalContainer">
          <div className="animalPrice">
            <div>
              <img
                className="coins"
                src={`assets/images/Coins/2coins.svg`}
                alt="coins"
              />
              {animal.price}
            </div>
            <button
              className="deleteAnimalButton"
              onClick={() => {
                this.deleteAnimalFromStore(animal);
              }}
            >
              X
            </button>
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

  deleteAnimalFromStore = (animal) => {
    let filterdAnimalsArray = this.props.currentZoo.animals.filter(function (
      a
    ) {
      return animal.name !== a.name;
    });
    console.log("filter", filterdAnimalsArray);
    this.props.SET_SELECTED_ANIMALS(filterdAnimalsArray);
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      SET_SELECTED_ANIMALS,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MyAnimals);
