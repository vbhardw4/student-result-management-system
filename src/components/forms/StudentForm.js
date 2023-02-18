import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../forms.css';
import {addStudentAction} from '../../redux/actions/studentActions';
import { useSelector } from 'react-redux';
import axios from 'axios';

const mapDispatchToProps = (dispatch) => ({
  addStudentAction: (student) => dispatch(addStudentAction(student))
});


const StudentForm = (props) => {
  const studentList = useSelector(state => state.students);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const sortedStudents = [...studentList].sort((a,b)=>b.age-a.age);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');

    const today = new Date();
    const dobDate = new Date(dob);
    const age = today.getFullYear() - dobDate.getFullYear();


    if (!firstName || !lastName || !dob) {
      setErrorMessage('All fields are required');
    } else if (isNaN(dobDate.getTime()) && age<10) {
      setErrorMessage('Date of birth must be a valid date and the student must be at least 10 years old');
    } else {
      const student = { firstName, lastName, dob, age };

      console.log('process.env is '+JSON.stringify(process.env));
      console.log('process.env is API_HOST'+JSON.stringify(process.env.API_HOST));
      axios.post(`http://localhost:8080/api/v1/students`,student)
           .then(req=>{
              let student = req.data;
              setShowSuccessMessage(true);
              setTimeout(() => {
                setShowSuccessMessage(false);
              }, 5000);
              
              console.log('Form submitted with values:');
              console.log('Full Name: ', student.studentName);
        
              console.log('Date of Birth: ', student.dob);
             
              props.addStudentAction(student);
              setFirstName("");
              setLastName("");
              setDob("");
           })
           .catch(err=>
              console.log(`Error ${err}`)
           );
     
    };

  }

  return (
    <div>
    <div className="form-container">
      {showSuccessMessage && (
        <div className="success-message">
          Student added successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            className="input-text"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            className="input-text"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            className="input-text"
            onChange={(event) => setDob(event.target.value)}
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
      </div>
      <div>
      {sortedStudents.length!==0 && <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.dob}</td>
                <td>{student.age}</td>
              </tr>
            ))}
          </tbody>
        </table>}
        </div>
    </div> 
  );
  
  
};

// export default StudentForm;
export default connect(null, mapDispatchToProps)(StudentForm);
