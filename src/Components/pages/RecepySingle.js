import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";

import axios from "axios";

const RecepySingle = () => {
  const [recepy, setRecepy] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => setRecepy(res.data));
  });

  let recepyData = undefined;

  if (!recepy) {
    recepyData = <h1>Loading....</h1>;
  }

  if (recepy) {
    recepyData = (
      <Card style={{ width: "25rem", height: "100vh" }} className="singleCard">
        <Card.Body>
          <>
            <div key={id}></div>
            <Card.Title className="card-title">{recepy.title}</Card.Title>
            <Card.Text>{recepy.body}</Card.Text>

            <button onClick={() => history.goBack()}>
              Back to all recipies
            </button>
          </>
        </Card.Body>
      </Card>
    );
  }
  return <>{recepyData}</>;
};

export default RecepySingle;
