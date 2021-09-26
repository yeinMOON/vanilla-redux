import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function Detail({ toDo, onBtnClick }) {
  return (
    <>
      <h1>{toDo.text}</h1>
      <h5>Created at: {toDo.id}</h5>
      <button onClick={onBtnClick}>DEL</button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => {
      ownProps.history.push("/");
      const id = ownProps.match.params.id;
      dispatch(actionCreators.deleteToDo(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
