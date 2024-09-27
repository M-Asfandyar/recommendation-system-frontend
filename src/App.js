import React, { useState } from 'react';
import axios from 'axios';
import UserInputForm from './components/UserInputForm';
import RecommendationList from './components/RecommendationList';

const App = () => {
  const [recommendations, setRecommendations] = useState([]);

  // Use the environment variable for the backend URL
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

  const handleUserInput = async (inputData) => {
    try {
      // Send the user input to the backend using the environment variable
      const response = await axios.post(`${backendUrl}/api/recommend`, { user_data: inputData });
      
      // Set recommendations from the backend response
      setRecommendations([response.data.recommendation]);
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
