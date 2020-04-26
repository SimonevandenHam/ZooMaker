import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AvailableAnimal from "./AvailableAnimal";
import { SET_ANIMALS } from "../../store/animals/action";

export class AvailableAnimals extends Component {
  displayAnimals = () => {
    if (this.props.animals.animals === []) {
      return <h4>loading animals</h4>;
    } else {
      return this.props.animals.animals.map((animal, i) => {
        return <AvailableAnimal key={i} animal={animal} />;
      });
    }
  };

  render() {
    return (
      <div>
        <h4>Available Animals</h4>
        <div>{this.displayAnimals()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { animals } = state;
  return { animals };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      SET_ANIMALS,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AvailableAnimals);
