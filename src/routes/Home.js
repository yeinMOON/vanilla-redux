import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          // <ToDo text={toDo.text} id={toDo.id} key={toDo.id}/>
          // <ToDo {...{text: toDo.text, id: toDo.id}} />
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// 상태를 받아와서 렌더링에 사용하기때문에 toDos가 갱신될 때마다 불린다
function mapStateToProps(state, ownProps) {
  // console.log(state, ownProps); // the second parameter is props of connected component
  // return { sexy: true }; // 'sexy' is added to Home props
  // state: state from store
  // ownProps: props given to Home component, because of react-routing
  console.log("Home props: ", ownProps);
  return { toDos: state };
}

// 렌더링될 때 한번만 불린다. component에 addToDo 함수를 전달해주는 역할 정도!
function mapDispatchToProps(dispatch, ownProps) {
  console.log("Home dispatch props: ", ownProps);
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)), // making a function
  };
}

// get state from store.js to Home component
// mapStateToProps 가 Home에 전달되는 props에 추가할 것을 허용해준다.
// connect는 getState 처럼 state를 가져다주는 역할 / dispatch해주는 역할 두개의 인자를 갖는다
export default connect(mapStateToProps, mapDispatchToProps)(Home);
