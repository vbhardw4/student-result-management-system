import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
        addResult: (state, action) => {
            state.push(action.payload);
        },
        deleteResult: (state, action) => {
            const index = state.findIndex(result => result.id === action.payload.id);
            state.splice(index, 1);
        }
    },
});

export const { addResult,deleteResult } = resultsSlice.actions;
export default resultsSlice.reducer;
