import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Card from "react-bootstrap/Card";

const RecepyCard = ({ id, link, userId, title, body }) => {
  let match = useRouteMatch();

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body className="recepyCard">
        <>{id}</>
        <Card.Title className="card-title">Created by:{userId}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Recepy:{title}
        </Card.Subtitle>
        {/*  <Card.Text>{body}</Card.Text> */}
        <div className="linkText">
          <Link to={`${match.path}/${link}`}>See instrutions how to make</Link>
        </div>
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
