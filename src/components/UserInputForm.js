import React, { useState } from 'react';

const UserInputForm = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInput);  // Pass the input data to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter Preferences:</label>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your preferences"
        />
      </div>
      <button type="submit">Get Recommendation</button>
    </form>
  );
};

export default UserInputForm;
