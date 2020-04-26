import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import zooMakerApi from "../../api/zooMakerApi";
import { SET_ANIMALS } from "../../store/animals/action";

export class CurrentZooContainer extends Component {
  componentDidMount() {
    this.getApiAnimals();
  }

  getApiAnimals = async () => {
    const zooApi = new zooMakerApi();

    //dit geeft een resultaat
    const apiAnimals = await zooApi.getApiAnimals();
    console.log(apiAnimals);
    this.props.SET_ANIMALS(apiAnimals.animals);
    //sla dat resultaat op in de store op de juiste plek
  };
  render() {
    return <div>{this.props.animals.animals.name}</div>;
  }
}

const mapStateToProps = (state) => {
  const { animals } = state;
  return { animals };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      SET_ANIMALS,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentZooContainer);
