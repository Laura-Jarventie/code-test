import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRouteMatch, Route, Switch } from "react-router";
import RecepyList from "./RecepyList";
import RecepySingle from "./RecepySingle";

const Recepypage = () => {
  const [recipes, setRecipes] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setRecipes(res.data));
  }, []);

  return (
    <div>
      <h1>recepy page!</h1>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <RecepySingle />
        </Route>
        <Route path={match.path}>
          <RecepyList recepies={recipes} />
        </Route>
      </Switch>
      {/* <ul>{recipes.map((post) => [<li key={post.id}>{post.title}</li>])}</ul> */}
      {/* <Switch>
        <Route path={match.path}>
          <RecepyList recipes={recipes} />
        </Route>
      </Switch> */}
    </div>
  );
};

export default Recepypage;
