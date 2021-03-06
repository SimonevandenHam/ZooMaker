import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import { CREATE_NEW_ZOO } from "../../store/currentZoo/action";

export class NewZooForm extends Component {
  state = {
    zooName: null,
    budget: null,
    redirect: null,
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.CREATE_NEW_ZOO(this.state.zooName, parseInt(this.state.budget));
    //reset state
    this.setState({
      zooName: "",
      budget: "",
      redirect: "/currentzoo",
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div className="formBox">
        <div className="newZooHeader">New Zoo</div>
        <div className="addZooFormContainer">
          <form onSubmit={this.onSubmit}>
            <label>
              Zoo name: <br />
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
              <br />
              <input
                type="integer"
                name="budget"
                placeholder="Specify your budget"
                value={this.state.budget}
                onChange={this.onChange}
              />
            </label>
            <button type="submit" className="saveZooButton">
              Next
            </button>
          </form>
        </div>
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
      CREATE_NEW_ZOO,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewZooForm);
