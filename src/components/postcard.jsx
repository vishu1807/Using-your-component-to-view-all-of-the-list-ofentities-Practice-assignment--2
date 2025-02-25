// PostCard.jsx
import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  return (
    <div style={{
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '20px', 
      margin: '10px', 
      backgroundColor: '#f9f9f9', 
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={post.profilePicture} 
          alt="profile" 
          style={{
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            marginRight: '10px'
          }} 
        />
        <h3 style={{ margin: 0 }}>{post.username}</h3>
      </div>
      <p style={{ marginTop: '10px' }}>{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
