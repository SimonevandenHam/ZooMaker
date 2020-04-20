import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderCreateZoo from "../Header/HeaderCreateZoo";

export class NewZooContainer extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(NewZooContainer);
