import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  students: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return {
        ...state,
        students: [...state.students, action.student]
      };
    default:
      return state;
  }
};

export const store = configureStore({reducer:reducer});
