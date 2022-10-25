import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRouteMatch, Route, Switch } from "react-router";
import RecepyList from "./RecepyList";
import RecepySingle from "./RecepySingle";
import RecepyNew from "./RecepyNew";

const Recepypage = () => {
  const [recipes, setRecipes] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setRecipes(res.data));
  }, []);

  const [newRecipe, setNewRecipe] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const valueChangeHandler = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const submitRecipe = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", newRecipe)
      .then(() => {
        prompt("ADDED!! Recipe created by:", newRecipe.userId);
        return axios.get("https://jsonplaceholder.typicode.com/posts/");
      })
      .then((res) => setRecipes(res.data));

    e.target.reset();
  };

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <RecepySingle />
        </Route>
        <Route path={match.path}>
          <h3>Add your own recipe:</h3>
          <RecepyNew change={valueChangeHandler} submit={submitRecipe} />
          <h1>Recepies:</h1>
          <RecepyList recepies={recipes} />
        </Route>
      </Switch>
    </div>
  );
};

export default Recepypage;
