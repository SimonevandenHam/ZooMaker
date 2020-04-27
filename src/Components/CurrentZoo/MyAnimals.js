import React, { Component } from "react";
import { connect } from "react-redux";

export class MyAnimals extends Component {
  displayCurrentZooAnimals = () => {
    return this.props.currentZoo.animals.map((animal, i) => {
      return (
        <div key={i}>
          <div>
            {animal.name}
            {animal.price}
            <img
              className="animalImage"
              src={`assets/images/Animals/${animal.imageName}`}
              alt="animal"
            />
          </div>
        </div>
      );
    });
  };
  render() {
    return <div>j{this.displayCurrentZooAnimals()}</div>;
  }
}

const mapStateToProps = (state) => {
  const { currentZoo } = state;
  return { currentZoo };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyAnimals);
