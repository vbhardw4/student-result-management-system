import { addStudent,deleteStudent } from '../reducers/studentReducer';

export const addStudentAction = (student) => ({
  type: addStudent,
  payload: student,
});

export const deleteStudentAction = (student) => ({
  type: deleteStudent,
  payload: student,
});