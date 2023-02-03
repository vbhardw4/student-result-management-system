import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../reducers/studentReducer';
import resultsReducer from '../reducers/resultsReducer';
import { combineReducers } from 'redux';
import coursesReducer from '../reducers/coursesReducer';

const rootReducer = combineReducers({
  students: studentReducer,
  results: resultsReducer,
  courses: coursesReducer
});

export const store = configureStore({
  reducer: rootReducer
});


