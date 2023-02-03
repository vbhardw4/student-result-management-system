import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
        addStudent: (state, action) => {
            state.push(action.payload);
        },
        deleteStudent: (state, action) => {
            const index = state.findIndex(student => student.id === action.payload.id);
            state.splice(index, 1);
        }
    },
});

export const { addStudent,deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
