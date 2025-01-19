import React, { useState } from 'react';
import './App.css';
import ResultComponent from './ResultComponent.jsx'; // Import the child component

function App() {
  const [formData, setFormData] = useState({
    total: '',
    pound: '',
    half: '',
    quater: '',
    forasi: '',
    twist: '',
    cd: '',
    khoraki: '',
    jer: '',
  });

  const [submittedData, setSubmittedData] = useState(null); // Store data after submission

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value === '' ? '' : Number(value), // Ensure inputs are treated as numbers
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData); // Pass data to another component
  };

  return (
    <div className="Home">
      <form onSubmit={handleSubmit} className="input-form">
        {Object.keys(formData).map((key) => (
          <div key={key} style={{ marginBottom: '10px' }}>
            <label htmlFor={key} style={{ marginRight: '10px' }}>
              {key.toUpperCase()}:
            </label>
            <br></br>
            <input
              type="number"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="input-field"
              placeholder={`Enter ${key}`}
            />
          </div>
        ))}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {submittedData && <ResultComponent data={submittedData} />}
    </div>
  );
}

export default App;
