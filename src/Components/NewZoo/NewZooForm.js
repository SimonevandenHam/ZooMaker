import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { CREATE_NEW_ZOO } from "../../store/currentZoo/action";

export class NewZooForm extends Component {
  state = {
    zooName: null,
    budget: null,
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.props.CREATE_NEW_ZOO(this.state.zooName, parseInt(this.state.budget));

    //reset state
    this.setState({
      zooName: this.value,
      budget: "",
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.props.newZoo);
    return (
      <div className="addZooFormContainer">
        New Zoo
        <form onSubmit={this.onSubmit}>
          <label>
            Zoo name:
            <input
              type="text"
              name="zooName"
              placeholder="Type the name of your Zoo"
              value={this.state.zooName}
              onChange={this.onChange}
            />
          </label>
          <label>
            Budget:
            <input
              type="integer"
              name="budget"
              placeholder="Specify your budget"
              value={this.state.budget}
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { newZoo } = state;
  return { newZoo };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      CREATE_NEW_ZOO,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewZooForm);
