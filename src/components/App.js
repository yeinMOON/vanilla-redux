import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <BrowserRouter>
      {/* <Switch> */}
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
      {/* </Switch> */}
    </BrowserRouter>
  );
}

export default App;
