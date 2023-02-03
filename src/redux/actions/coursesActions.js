import { addCourse,deleteCourse } from '../reducers/coursesReducer';

export const addCourseAction = (result) => ({
  type: addCourse,
  payload: result,
});

export const deleteCourseAction = (result) => ({
  type: deleteCourse,
  payload: result,
});