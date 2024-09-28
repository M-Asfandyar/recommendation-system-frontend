import React, { useState } from 'react';
import axios from 'axios';
import UserInputForm from './components/UserInputForm';
import RecommendationList from './components/RecommendationList';

const App = () => {
  const [recommendations, setRecommendations] = useState([]);

  // Used the backend URL from environment variables
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

  const handleUserInput = async (userId) => {
    try {
      // Send the user ID to the backend
      const response = await axios.post(`${backendUrl}/api/recommend`, { user_id: userId });

      // Set recommendations from the backend response
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div>
      <h1>Personalized Recommendation System</h1>
      <UserInputForm onSubmit={handleUserInput} />
      {recommendations.length > 0 && <RecommendationList recommendations={recommendations} />}
    </div>
  );
};

export default App;
