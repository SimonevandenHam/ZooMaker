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
                this.deleteAnimalFromStore(this.props.animal);
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

  //FIX DELETE FUNCTION
  deleteAnimalFromStore = (animal) => {
    let newAnimalArray = this.props.currentZoo.animals;
    let filterdAnimalsArray = newAnimalArray.filter(function (a) {
      console.log("newAnimals", newAnimalArray);
      console.log("a", a);
      console.log("animal", animal);
      return a !== a;
    });
    return this.props.SET_SELECTED_ANIMALS(filterdAnimalsArray);
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
