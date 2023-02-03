import { addResult,deleteResult } from '../reducers/resultsReducer';

export const addResultAction = (result) => ({
  type: addResult,
  payload: result,
});

export const deleteResultAction = (result) => ({
  type: deleteResult,
  payload: result,
});