import React from "react";
import { connect } from "react-redux";
function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
  // Detail 페이지에서 Reload하면 기존 state가 모두 초기화되어 toDo가 undefined가 되는데, 이럴 때 오류대신 빈 화면을 보여주기 위해 ?를 붙인다
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}
export default connect(mapStateToProps)(Detail);
