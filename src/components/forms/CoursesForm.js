import React, { useState } from "react";
import '../../forms.css';

const CoursesForm = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!courseName) {
      alert("Please enter a course name to submit");
      return;
    }
    setCourses([...courses, { courseName}]);
    // logic to add the result to the system
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
    
    setCourseName("");
  };
  

  return (
    <div>
    <>
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
      {showSuccessMessage && (
        <div style={{ backgroundColor: "green", color: "white" }}>
          Result added successfully!
        </div>
      )}
    </>

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
  );
};

export default CoursesForm;
