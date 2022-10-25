import React from "react";
import Card from "react-bootstrap/Card";

const RecepyNew = ({ change, submit }) => {
  return (
    <form onSubmit={submit}>
      <Card style={{ width: "20rem" }}>
        <Card.Body className="recepyCard">
          <Card.Subtitle className="mb-2 text-muted">Created by:</Card.Subtitle>
          <input type="text" name="userId" onChange={change} required />
          <Card.Subtitle className="mb-2 text-muted">
            Recepy Title:
          </Card.Subtitle>
          <input type="text" name="title" onChange={change} required />
          <Card.Subtitle className="mb-2 text-muted">
            Insturctions:
          </Card.Subtitle>
          <input type="text" name="body" onChange={change} required />
          <br></br>
          <button type="submit">Add new recipe</button>
        </Card.Body>
      </Card>
    </form>
  );
};

export default RecepyNew;
