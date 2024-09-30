import React, { useState } from 'react';

const FeedbackForm = ({ onSubmitFeedback }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitFeedback(feedback);  // Pass the feedback to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Was the recommendation helpful? (yes/no)</label>
        <input
          type="text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter yes or no"
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
