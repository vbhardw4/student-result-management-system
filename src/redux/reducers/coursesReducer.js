import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
        addCourse: (state, action) => {
            state.push(action.payload);
        },
        deleteCourse: (state, action) => {
            const index = state.findIndex(result => result.id === action.payload.id);
            state.splice(index, 1);
        }
    },
});

export const { addCourse,deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
