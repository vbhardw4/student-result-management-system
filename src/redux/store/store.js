import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../reducers/studentReducer';

export const store = configureStore({
  reducer:{
    students: studentReducer
  }
});
