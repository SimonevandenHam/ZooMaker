import React, { Component } from "react";
import { connect } from "react-redux";

export class AvailableAnimal extends Component {
  render() {
    return <div>{this.props.animal.name}</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AvailableAnimal);
