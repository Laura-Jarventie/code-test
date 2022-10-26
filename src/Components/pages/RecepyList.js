import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

const RecepyCard = ({ id, link, userId, title, button }) => {
  let match = useRouteMatch();

  const deleteRecipe = (id, e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(() =>
        prompt("DELETED!! Recipe title:", title)
      ); /*This we use because fake database*/
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body className="recepyCard">
        <>{id}</>
        <Card.Title className="card-title">Created by: {userId}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Recepy Title: <br></br>
          {title}
        </Card.Subtitle>
        <div className="linkText">
          <Link to={`${match.path}/${link}`}>See instrutions how to make</Link>
        </div>
        <button onClick={(e) => deleteRecipe(id, e)}>Delete</button>
      </Card.Body>
    </Card>
  );
};

const RecepyList = ({ recepies }) => {
  return (
    <div className="posts">
      {recepies &&
        recepies.map((r) => (
          <RecepyCard
            key={r.id}
            link={r.id}
            title={r.title}
            userId={r.userId}
            body={r.body}
          />
        ))}
    </div>
  );
};

export default RecepyList;
