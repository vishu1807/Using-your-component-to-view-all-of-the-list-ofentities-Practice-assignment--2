// LikeButton.jsx
import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(prevLiked => !prevLiked);
  };

  return (
    <button 
      onClick={toggleLike} 
      style={{
        backgroundColor: liked ? 'red' : 'gray', 
        color: 'white', 
        border: 'none', 
        padding: '10px', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
