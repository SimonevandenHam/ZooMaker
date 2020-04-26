import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../style/header.css";

export class HeaderCreateZoo extends Component {
  render() {
    return (
      <div className="createZooHeader">
        <Link to="/">
          <img
            src="/assets/images/Animals/PuffinBird.png"
            alt="ZooMaker Logo"
            className="logo"
          />
        </Link>
        <div>ZooMaker</div>
      </div>
    );
  }
}

export default HeaderCreateZoo;
