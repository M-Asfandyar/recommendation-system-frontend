import React from 'react';

const RecommendationList = ({ recommendations }) => {
  return (
    <div>
      <h3>Recommendations:</h3>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
