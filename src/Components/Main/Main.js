import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recepypage from "../pages/Recepypage";

import "./Main.css";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" component={Recepypage} />
      </Switch>
    </main>
  );
};

export default Main;
