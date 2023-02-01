import React, { useState } from 'react';
import '../../forms.css';

const StudentForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');

    const today = new Date();
    const dobDate = new Date(dob);
    const age = today.getFullYear() - dobDate.getFullYear();

    if (!firstName || !lastName || !dob) {
      setErrorMessage('All fields are required');
    } else if (isNaN(dobDate.getTime()) || age < 10) {
      setErrorMessage('Date of birth must be a valid date and the student must be at least 10 years old');
    } else {
      console.log('Form submitted with values:');
      console.log('First Name: ', firstName);
      console.log('Last Name: ', lastName);
      console.log('Date of Birth: ', dob);
      setFirstName('');
      setLastName('');
      setDob('');
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
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
  );
  
};

export default StudentForm;