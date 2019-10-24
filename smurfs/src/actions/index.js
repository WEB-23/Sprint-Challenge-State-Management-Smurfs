import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const POSTING_SMURFS_START = "POSTING_SMURFS_START";
export const POSTING_SMURFS_SUCCESS = "POSTING_SMURFS_SUCCESS";
export const POSTING_SMURFS_FAILURE = "POSTING_SMURFS_FAILURE";

export const DELETE_SMURFS_START = "DELETE_SMURFS_START";
export const DELETE_SMURFS_SUCCESS = "DELETE_SMURFS_SUCCESS";
export const DELETE_SMURFS_FAILURE = "DELETE_SMURFS_FAILURE";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("fetch res data", res.data);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: `${err.response.message} code: ${err.response.code}`
      });
    });
};

export const createSmurf = newSmurf => dispatch => {
  dispatch({ type: POSTING_SMURFS_START });
  axios
    .post(`http://localhost:3333/smurfs`, { ...newSmurf })
    .then(res => {
      console.log("post", res);
      dispatch({ type: POSTING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: POSTING_SMURFS_FAILURE,
        payload: `${err.response.message} code: ${err.response.code}`
      });
    });
};

export const deleteSmurf = smurf => dispatch => {
  dispatch({ type: DELETE_SMURFS_START });
  axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {
      console.log("action delete smurf", res.data);
      dispatch({ type: DELETE_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_SMURFS_FAILURE,
        payload: `${err.response.message} code: ${err.response.code}`
      });
    });
};
