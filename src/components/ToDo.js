import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

// ToDo에서는 state 전체를 받아올 일은 없기 때문에 Dispatch만 활용한다!
function ToDo({ text, id, onBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  // 여기서 ownProps는 컴포넌트가 쓰일 때 props로 받은 전체 즉 toDo 객체 하나!
  console.log("ToDo props: ", ownProps);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}
export default connect(null, mapDispatchToProps)(ToDo);
