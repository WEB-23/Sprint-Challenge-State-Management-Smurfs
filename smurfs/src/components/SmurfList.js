import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Card } from "semantic-ui-react";

import { getSmurf, createSmurf } from "../actions";

import Smurf from "./Smurf.js";

const SmurfList = ({ createSmurf, getSmurf, smurfs, isFetching, error }) => {
  const [smurfName, setSmurfName] = useState("");
  const [smurfAge, setSmurfAge] = useState("");
  const [smurfHeight, setSmurfHeight] = useState("");

  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  if (isFetching) {
    return <h3>Smurfs aren't home Yet!</h3>;
  }
  const handleSubmit = event => {
    event.preventDefault();
    const newSmurf = {
      name: smurfName,
      age: smurfAge,
      height: smurfHeight
    };
    createSmurf(newSmurf);
    getSmurf();
  };
  const nameHandleChange = event => {
    setSmurfName(event.target.value);
  };
  const ageHandleChange = event => {
    setSmurfAge(event.target.value);
  };
  const heightHandleChange = event => {
    setSmurfHeight(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Smurf Name:
          <input type="text" name="name" onChange={nameHandleChange} />
          Smurf Age:
          <input type="text" name="age" onChange={ageHandleChange} />
          Smurf Height:
          <input type="text" name="height" onChange={heightHandleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <Card.Group itemsPerRow={4}>
        {smurfs.map(smurf => {
          return <Smurf smurf={smurf} key={smurf.id} />;
        })}
      </Card.Group>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { getSmurf, createSmurf }
)(SmurfList);
