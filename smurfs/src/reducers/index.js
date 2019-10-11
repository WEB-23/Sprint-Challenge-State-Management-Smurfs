import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  POSTING_SMURFS_START,
  POSTING_SMURFS_SUCCESS,
  POSTING_SMURFS_FAILURE,
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case POSTING_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case POSTING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isFetching: false
      };

    case POSTING_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case DELETE_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => {
          return smurf.id !== action.payload.id;
        }),
        isFetching: false
      };
    case DELETE_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
};
