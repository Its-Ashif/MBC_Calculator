import React, { useState } from 'react';
import '../App.css';
import breadResultComponent from './bread_result.jsx';

function BreadCalc(){
    const [formData, setFormData] = useState({
        pound: '',
        half: '',
        quater: '',
        forasi: '',
        twist: '',
        cd: '',
      });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value === '' ? '' : Number(value), // Ensure inputs are treated as numbers
        });
      };

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
    
          {submittedData && <breadResultComponent data={submittedData} />}
        </div>
      );
}

export default BreadCalc;