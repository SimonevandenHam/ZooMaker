import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderCreateZoo from "../Header/HeaderCreateZoo";
import NewZooForm from "./NewZooForm";

import "../../style/newZoo.css";

export class Demo extends React.Component {
  render() {
    return (
      <div>
        <header>
          <HeaderCreateZoo />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
