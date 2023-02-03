import React, { useState } from "react";
import '../../forms.css';
import { useSelector, connect } from 'react-redux';
import {addCourseAction} from '../../redux/actions/coursesActions';

const mapDispatchToProps = (dispatch) => ({
  addCourseAction: (result) => dispatch(addCourseAction(result))
});

const CoursesForm = (props) => {
  // const [courses, setCourses] = useState([]);
  const courses = useSelector(state=>state.courses)
  const [courseName, setCourseName] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!courseName) {
      alert("Please enter a course name to submit");
      return;
    }
    // setCourses([...courses, { courseName}]);
    // logic to add the result to the system
    const result = {courseName};
    props.addCourseAction(result);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
    
    setCourseName("");
  };
  

  return (
    <div>
    <>
      {showSuccessMessage && (
        <div className="success-message">
          Course added successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first-name">Course Name:</label>
        <input
          type="text"
          id="course-name"
          value={courseName}
          className="input-text"
          onChange={(event) => setCourseName(event.target.value)}
        />
      </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </>
      <div>
        {courses.length !== 0 && <table>
          <thead>
            <tr>
              <th>Course Name</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.courseName}</td>
              </tr>
            ))}
          </tbody>
        </table>}
      </div>
    </div>
  );
};

// export default CoursesForm;
export default connect(null, mapDispatchToProps)(CoursesForm);
