import React, { useState } from 'react';
import axios from 'axios';
import UserInputForm from './components/UserInputForm';
import RecommendationList from './components/RecommendationList';
import FeedbackForm from './components/FeedbackForm';  // Import FeedbackForm

const App = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [userId, setUserId] = useState(null);  // Keep track of user ID for feedback

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

  const handleUserInput = async (inputData) => {
    setUserId(inputData);  // Store user ID for later feedback
    try {
      const response = await axios.post(`${backendUrl}/api/recommend`, { user_id: parseInt(inputData, 10) });
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  const handleFeedback = async (feedback) => {
    try {
      // Send feedback to the backend
      await axios.post(`${backendUrl}/api/feedback`, { user_id: userId, feedback });
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error sending feedback:', error);
    }
  };

  return (
    <div>
      <h1>Personalized Recommendation System</h1>
      <UserInputForm onSubmit={handleUserInput} />
      {recommendations.length > 0 && (
        <>
          <RecommendationList recommendations={recommendations} />
          <FeedbackForm onSubmitFeedback={handleFeedback} />
        </>
      )}
    </div>
  );
};

export default App;
