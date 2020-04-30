import React, { Component } from "react";
import { connect } from "react-redux";

import MyZoosList from "./MyZoosList";
import HeaderCreateZoo from "../Header/HeaderCreateZoo";
import "../../style/myZoos.css";

export class MyZoosContainer extends Component {
  render() {
    return (
      <div>
        <HeaderCreateZoo />
        <MyZoosList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyZoosContainer);
