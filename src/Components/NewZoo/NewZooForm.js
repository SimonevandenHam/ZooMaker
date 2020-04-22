import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { CREATE_NEW_ZOO } from "../../store/currentZoo/action";

export class NewZooForm extends Component {
  state = {
    zooName: null,
    zooBudget: null,
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      zooName: this.value,
      zooBudget: "",
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
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
              onChange={this.handleChange}
            />
          </label>
          <label>
            Budget:
            <input
              type="integer"
              name="zooBudget"
              placeholder="Specify your budget"
              value={this.state.zooBudget}
              onChange={this.handleChange}
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
