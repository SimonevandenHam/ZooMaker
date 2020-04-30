import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderCreateZoo from "../Header/HeaderCreateZoo";
import NewZooForm from "./NewZooForm";

import "../../style/newZoo.css";

export class NewZooContainer extends Component {
  render() {
    return (
      <div className="createZooPage">
        <HeaderCreateZoo />
        <NewZooForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewZooContainer);
