import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { connect } from "react-redux";

import { deleteSmurf, getSmurf } from "../actions";

const Smurf = ({ smurf, deleteSmurf, getSmurf }) => {
  const deleteSmurfs = event => {
    event.preventDefault();

    deleteSmurf(smurf);
    getSmurf();
    console.log(smurf);
  };

  return (
    <Card>
      <Card.Content header={smurf.name} />
      <Card.Content description={`Age: ${smurf.age}`} />
      <Card.Content extra>{`Height: ${smurf.height}`}</Card.Content>
      <form onSubmit={deleteSmurfs}>
        <button type="submit">Delete</button>
      </form>
    </Card>
  );
};

export default connect(
  null,
  { deleteSmurf, getSmurf }
)(Smurf);
