import React, { Component } from "react";
import { connect } from "react-redux";

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

  render() {
    return (
      <div className="displayAnimalDetails">
        <div className="animalNamePhoto">
          {this.props.animal.name}
          {this.displayImage()}
        </div>
        <div>{this.displayCosts()}</div>
        <button> + add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AvailableAnimal);
