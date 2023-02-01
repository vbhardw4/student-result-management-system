import React, { useState } from "react";
import '../../forms.css';

const ResultsForm = () => {
  const [results, setResults] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!courseName || !studentName || !score) {
      alert("Please select a course, student and score");
      return;
    }
    
    // logic to add the result to the system
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
    setResults([...results, { courseName, studentName, score }]);
    setCourseName("");
    setStudentName("");
    setScore("");
  };

  return (
    <div>
    <div class="form-container">
    <>
      {showSuccessMessage && (
        <div className="success-message">
          Results added successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label>Course Name:</label>            
            <select
              value={courseName}
              onChange={(event) => setCourseName(event.target.value) }
              
            >
              <option value="">Select a course</option>
              {/* populate options with actual course names */}
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
            </select>
        </div>
        <div class="form-group">
          <label>Student Name:</label>
          <select
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
          >
            <option value="">Select a student</option>
            {/* populate options with actual student names */}
            <option value="student1">Student 1</option>
            <option value="student2">Student 2</option>
            <option value="student3">Student 3</option>
          </select>
        </div>
        <div class="form-group">
          <label>Score:</label>
          <select value={score} onChange={(event) => setScore(event.target.value)}>
            <option value="">Select a score</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    
    </>
    </div>
      {results.length !== 0 && <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {results.map((results, index) => (
            <tr key={index}>
              <td>{results.courseName}</td>
              <td>{results.studentName}</td>
              <td>{results.score}</td>
            </tr>
          ))}
        </tbody>
        </table>}

    </div>
  );
};

export default ResultsForm;
