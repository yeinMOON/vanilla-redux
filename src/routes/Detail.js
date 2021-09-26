import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { actionCreators } from "../store";

function Detail() {
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  const onBtnClick = () => {
    history.push("/");
    dispatch(actionCreators.deleteToDo(id));
  };

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

export default Detail;
