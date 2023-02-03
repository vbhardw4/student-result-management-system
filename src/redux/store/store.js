import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../reducers/studentReducer';
import resultsReducer from '../reducers/resultsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  students: studentReducer,
  results: resultsReducer
});

export const store = configureStore({
  reducer: rootReducer
    // root: rootReducer,
    // results: resultsReducer
  
});


