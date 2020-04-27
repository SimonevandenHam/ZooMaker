import React, { Component } from "react";
import { connect } from "react-redux";

export class MyAnimals extends Component {
  render() {
    return <div>hi</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyAnimals);
