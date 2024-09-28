import React, { useState } from 'react';

const UserInputForm = ({ onSubmit }) => {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userId);  // Pass the user ID to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter User ID:</label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your user ID"
        />
      </div>
      <button type="submit">Get Recommendation</button>
    </form>
  );
};

export default UserInputForm;
